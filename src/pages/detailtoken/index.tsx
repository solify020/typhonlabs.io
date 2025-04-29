import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { CardHeader, CardTitle, CardContent, CardDescription, Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ResponsiveContainer } from "recharts";
import axios from "axios";

// Define image paths
const imgTyphonToken = "/images/typhon_token.png";
const imgCopy = "/images/copy.png";

// Define the backend URL (replace with your actual backend URL)

interface Activity {
    block_id: number;
    trans_id: string;
    block_time: number;
    activity_type: string;
    from_address: string;
    sources: string[];
    platform: string[];
    value: number;
    routers: any;
    time: string;
}

const DetailToken: React.FC = () => {
    const router = useRouter();
    const { query } = router;
    const tokenId = typeof query.token === "string" ? query.token : "";

    const [tokenData, setTokenData] = useState<any>(null);
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    const getTokenData = async (tokenId: string): Promise<void> => {
        try {
            setLoading(true);
            setError(null);

            const token = (await axios.get(`https://api.dexscreener.com/token-pairs/v1/solana/${tokenId}`)).data[0];

            setTokenData(token);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            setError("Error fetching token data: " + errorMessage);
            console.error("Error fetching token data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (tokenId) {
            getTokenData(tokenId);
        }
    }, [tokenId]);

    const renderActivities = () => {
        if (activities.length === 0) {
            return <p>No recent activities found.</p>;
        }

        return (
            <>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-28">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    TimeStamp
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        TransactionId
                                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        FromAddress
                                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Value
                                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <div className="flex items-center">
                                        Platform
                                        <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                                        </svg></a>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map((activity) => (

                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {new Date(activity.time).toLocaleString()}

                                    </th>

                                    <td className="px-6 py-4">
                                        {activity.trans_id.slice(0, 15)}...
                                    </td>

                                    <td className="px-6 py-4">
                                        {activity.from_address.slice(0, 15)}...
                                    </td>
                                    <td className="px-6 py-4">
                                        {activity.value}

                                    </td>

                                    <td className="px-6 py-4">
                                        {activity.platform.slice(0, 15)}...
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* {activities.map((activity) => (
                    <li key={activity.trans_id} className="shadow-lg rounded-lg p-4 mb-4 border border-gray-200">
                        <div className="flex items-center mb-2">
                            <strong className="text-lg text-white">
                                Transaction ID:{" "}
                                <a
                                    href={`https://solscan.io/tx/${activity.trans_id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    {activity.trans_id}
                                </a>
                            </strong>
                        </div>
                        <div className="mb-2">
                            <strong className="text-white">Type:</strong>
                            <span className="text-sm text-white">{formatActivityType(activity.activity_type)}</span>
                        </div>
                        <div className="mb-2">
                            <strong className="text-white">From Address:</strong>
                            <a
                                href={`https://solscan.io/tx/${activity.from_address}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-sm"
                            >
                                {activity.from_address}
                            </a>
                        </div>
                        <div className="mb-2">
                            <strong className="text-white">Value:</strong>
                            <span className="text-sm text-white">{activity.value}</span>
                        </div>
                        <div className="mb-2">
                            <strong className="text-white">Time:</strong>
                            <span className="text-sm text-white">{new Date(activity.time).toLocaleString()}</span>
                        </div>
                        <div className="mb-2">
                            <strong className="text-white">Platform:</strong>
                            <span className="text-sm text-white">{activity.platform.join(", ")}</span>
                        </div>
                    </li>
                ))} */}
            </>

        );
    };

    const formatActivityType = (activityType: string) => {
        const activityTypes: { [key: string]: string } = {
            ACTIVITY_AGG_TOKEN_SWAP: "Aggregated Token Swap",
            ACTIVITY_TOKEN_SWAP: "Token Swap",
            ACTIVITY_TOKEN_ADD_LIQ: "Token Added to Liquidity Pool",
            ACTIVITY_TOKEN_REMOVE_LIQ: "Token Removed from Liquidity Pool",
            ACTIVITY_SPL_TOKEN_STAKE: "Token Staked (SPL)",
            ACTIVITY_SPL_TOKEN_UNSTAKE: "Token Unstaked (SPL)",
            ACTIVITY_SPL_TOKEN_WITHDRAW_STAKE: "Withdrawn Staked Token (SPL)",
            ACTIVITY_SPL_INIT_MINT: "Initial Token Mint (SPL)",
            ACTIVITY_TOKEN_DEPOSIT_VAULT: "Token Deposited to Vault",
        };

        return activityTypes[activityType] || activityType;
    };

    // Function to format numbers with commas
    const formatNumberWithCommas = (number: number) => {
        return new Intl.NumberFormat().format(number);
    };

    if (loading) {
        return (
            <>
                <div className="flex justify-center items-center h-screen bg-gray-900">
                    <div className="text-2xl font-mono text-green-400 animate-pulse tracking-wide">
                        Loading token data...
                    </div>
                </div>
            </>
        );
    }

    if (error) {
        return <div>{error}</div>; // Error screen
    }

    return (
        <div className="flex h-full flex-col bg-[#161616]">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">

                </div>

                <div className="w-full">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <div className="w-full flex items-center">
                                <Image
                                    src={tokenData?.info.imageUrl || imgTyphonToken}
                                    alt={tokenData?.baseToken.symbol || "mytoken"}
                                    width={100}
                                    height={100}
                                    className="mr-4"
                                />
                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight mb-3">{tokenData?.baseToken?.name || "Typhon"}</h2>
                                    <hr />
                                    <div className="flex p-2 items-center">
                                        <span className="text-lg">{tokenData?.baseToken.address.slice(0, 10) || "N/A"}</span>
                                        <button
                                            className="ml-2"
                                            onClick={() => {
                                                navigator.clipboard.writeText(tokenData?.baseToken.address || "");
                                            }}
                                        >
                                            <Image src={imgCopy} alt="copy" width={20} height={20} />
                                        </button>
                                    </div>
                                    <p className="text-sm text-white">Symbol: {tokenData?.baseToken?.symbol || "N/A"}</p>
                                    <p className="text-sm text-white">Price: {tokenData?.priceUsd}</p>
                                    <p className="text-sm text-white">Market Cap: {tokenData?.marketCap ? formatNumberWithCommas(tokenData?.marketCap) : "N/A"}</p>
                                    <p className="text-sm text-white">Price Change (24h): {tokenData?.priceChange?.h24 ? formatNumberWithCommas(tokenData?.priceChange?.h24) : "N/A"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList className="mytabs">
                        <TabsTrigger value="overview">TokenInfo</TabsTrigger>
                        <TabsTrigger value="analytics">PriceHistory</TabsTrigger>
                        <TabsTrigger value="reports">RecentTransaction</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Token Information</CardTitle>
                                <CardDescription>Basic metadata of the selected token.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p><strong>Name:</strong> {tokenData?.baseToken.name || "N/A"}</p>
                                <p><strong>Symbol:</strong> {tokenData?.baseToken.symbol || "N/A"}</p>
                                <p><strong>Price Change (24h):</strong> {tokenData?.priceChange?.h24 || "N/A"}</p>
                                <p><strong>Market Cap:</strong> {tokenData?.marketCap ? formatNumberWithCommas(tokenData?.marketCap) : "N/A"}</p>
                                <p><strong>Liquidity:</strong> {tokenData?.liquidity?.usd ? formatNumberWithCommas(tokenData?.liquidity?.usd) : "N/A"}</p>
                            </CardContent>
                        </Card>

                    </TabsContent>

                    <TabsContent value="analytics">
                        {/* Price History Chart */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Price History</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <iframe
                                        src="https://dexscreener.com/solana/5wNu5QhdpRGrL37ffcd6TMMqZugQgxwafgz477rShtHy"
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allowFullScreen
                                        title="DexScreener Chart"
                                    />
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="reports">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Transactions</CardTitle>
                                <CardDescription>Recent transactions involving this token.</CardDescription>
                            </CardHeader>
                            <CardContent>{renderActivities()}</CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default DetailToken;