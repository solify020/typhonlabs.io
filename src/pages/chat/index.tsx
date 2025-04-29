import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { SendHorizonal } from "lucide-react";
import { BeatLoader } from "react-spinners";
import imgRobot from '/public/images/robot.png';
import OpenAI from "openai";
import TypewriterMarkdown from "@/components/TypewriterMarkdown";
import axios from "axios";

interface Message {
  content: string;
  isUser: boolean;
}

interface TokenData {
  address?: string;
  name?: string;
  symbol?: string;
  icon?: string;
  price?: number;
  marketCap?: number;
  liquidity?: number;
  priceChange24h?: number;
  volume24h?: number;
}
const ChatPage: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedQuestions = [
    "How many tokens are listed?",
    "What token should I trade?",
    "Please tell me about trading strategy.",
    "Which token's price will be reached the highest?",
  ];

  useEffect(() => {
    const fetchTokenData = async () => {
      if (!token) return;

      try {
        const tokenData = (await axios.get(`https://api.dexscreener.com/token-pairs/v1/solana/${token}`)).data[0];

          setTokenData({
            address: tokenData?.baseToken?.address,
            name: tokenData?.baseToken?.name,
            symbol: tokenData?.baseToken?.symbol,
            icon: tokenData?.info?.imageUrl,
            price: tokenData?.priceUsd,
            marketCap: tokenData?.marketCap,
            liquidity: tokenData?.liquidity?.usd,
            priceChange24h: tokenData?.priceChange?.h24,
            volume24h: tokenData?.volume?.h24,
          });
      } catch (error) {
        console.error("Error fetching token data:", error);
      }
    };
    fetchTokenData();
  }, [token]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const generateResponse = async (question: any) => {

    console.log("clicked")

    const client = new OpenAI({
      apiKey: "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",
      dangerouslyAllowBrowser: true
    });

    const response = await client.responses.create({
      model: "gpt-4.1",
      input: `${question} !!! Just tell about on Solana blockchain, not any other chains even I request you !!!`,
    });

    return response
    // setMessages(response.output_text)
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    setMessages(prev => [...prev, { content: inputMessage, isUser: true }]);
    setInputMessage("");
    setIsLoading(true);

    try {

      console.log("prompt message >>> ", inputMessage)

      const response = await generateResponse(inputMessage)

      console.log("response >>>> ", response)

      // const data = await response.json();
      setMessages(prev => [...prev, { content: response.output_text, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        content: "Sorry, I'm having trouble connecting. Please try again later.",
        isUser: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };





  return (
    <div className="flex flex-col h-screen bg-[#161616] text-white">
      <header className="p-4 border-b border-[#2F3548]">
        <div className="max-w-4xl flex items-center gap-4">
          <Image
            src={imgRobot}
            alt="Typhon Bot"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">Chat with Typhon Bot</h1>
            <p className="text-sm text-gray-400">
              Get detailed insights about {tokenData?.name || "this token"}
            </p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="max-w-4xl mx-auto text-center mt-20">
            <Image
              src={imgRobot}
              alt="Typhon Bot"
              width={120}
              height={120}
              className="mx-auto mb-6 rounded-full"
            />
            <h2 className="text-2xl font-bold mb-4">Typhon AI Assistant</h2>
            <p className="text-gray-400 mb-8">
              Ask me anything about {tokenData?.name || "this token"}. I can analyze price trends,
              tokenomics, and recent market activity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {predefinedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(question)}

                  className="p-3 text-left rounded-lg bg-[#1A1F2C] hover:bg-[#2F3548] transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                {/* <div
                  className={`max-w-[80%] p-4 rounded-lg ${msg.isUser ? "bg-[#2F3548] rounded-br-none" : "bg-[#1A1F2C] rounded-bl-none"}`}
                  dangerouslySetInnerHTML={{ __html: marked(msg.content) }}
                /> */}
                <TypewriterMarkdown isUser={msg.isUser} text={msg.content} speed={10} />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-4 rounded-lg bg-[#1A1F2C]">
                  <BeatLoader color="#5EE616" size={8} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          // <div className="max-w-4xl mx-auto space-y-4">
          //   this is chatgpt

          // </div>

        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-[#2F3548]">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about this token..."
            className="flex-1 p-3 rounded-lg bg-[#1A1F2C] focus:outline-none focus:ring-2 focus:ring-[#4d9dcb]"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="p-3 text-left rounded-lg bg-[black] hover:bg-[#4d9dcb] transition-colors border-2 border-[white]"
            disabled={isLoading}
          >
            <SendHorizonal className="w-5 h-5 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatPage;