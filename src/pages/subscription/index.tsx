import { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { NEXT_PUBLIC_CREDIT_PURCHASE_WALLET } from '@/config';

// interface SubscriptionPackage {
//   name: string;
//   displayName: string;
//   solAmount: number;
//   creditValue: number;
//   enabledFunctions: string[];
//   description: string;
//   features: string[];
// }

const CreditSubscribe = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [transactionResult, setTransactionResult] = useState<any>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('monthly');
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal control state
  // const [currentPlan, setCurrentPlan] = useState<string>(''); // To highlight the current plan

  // const subscriptionPackages: SubscriptionPackage[] = [
  //   {
  //     name: 'Free',
  //     displayName: 'Free',
  //     solAmount: 0,
  //     creditValue: 0,
  //     enabledFunctions: [],
  //     description: 'This is a free plan that does not require payment. Enjoy basic functionality.',
  //     features: ['Basic functionality'],
  //   },
  //   {
  //     name: 'Basic',
  //     displayName: 'Basic',
  //     solAmount: 0.5,
  //     creditValue: 500,
  //     enabledFunctions: ['functionA', 'functionB'],
  //     description: 'The Basic plan unlocks essential features including function A and function B.',
  //     features: ['functionA', 'functionB'],
  //   },
  //   {
  //     name: 'Premium',
  //     displayName: 'Premium',
  //     solAmount: 1.0,
  //     creditValue: 1000,
  //     enabledFunctions: ['functionA', 'functionB', 'functionC', 'functionD'],
  //     description: 'The Premium plan includes all features, including advanced functionality like function C and function D.',
  //     features: ['functionA', 'functionB', 'functionC', 'functionD'],
  //   },
  // ];

  // const handlePurchase = async (subscriptionPackage: SubscriptionPackage) => {
  //   if (!publicKey) {
  //     alert('Please connect your wallet.');
  //     return;
  //   }

    setIsLoading(true);
    setTransactionResult(null);
    setIsModalOpen(true); // Show modal while processing

  //   try {
  //     let lamports = subscriptionPackage.solAmount * LAMPORTS_PER_SOL;
  //     if (selectedPeriod === '6 months') {
  //       lamports *= 5;
  //     } else if (selectedPeriod === 'yearly') {
  //       lamports *= 10;
  //     }

  //     if (subscriptionPackage.name === 'Free') {
  //       setTransactionResult({
  //         success: true,
  //         message: `You are now using the Free Plan!`
  //       });
  //       setIsLoading(false);
  //       return;
  //     }

  //     const toPublicKey = new PublicKey(NEXT_PUBLIC_CREDIT_PURCHASE_WALLET);

  //     const transaction = new Transaction().add(
  //       SystemProgram.transfer({
  //         fromPubkey: publicKey,
  //         toPubkey: toPublicKey,
  //         lamports: lamports,
  //       })
  //     );

  //     const { blockhash } = await connection.getLatestBlockhash('finalized');
  //     transaction.recentBlockhash = blockhash;
  //     transaction.feePayer = publicKey;

  //     const signedTransaction = await sendTransaction(transaction, connection);

  //     const confirmation = await connection.confirmTransaction(signedTransaction);
  //     if (confirmation.value.err) {
  //       throw new Error('Transaction failed');
  //     }

  //     setTransactionResult({
  //       success: true,
  //       message: `Purchase successful! You are now a ${subscriptionPackage.displayName} member!`
  //     });
  //   } catch (error: any) {
  //     setTransactionResult({
  //       success: false,
  //       message: `Purchase failed: ${error.message || error.toString()}`
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleTabChange = (period: string) => {
  //   setSelectedPeriod(period);
  // };

  // const handlePlanSelect = (planName: string) => {
  //   setCurrentPlan(planName); // Highlight the selected plan
  // };

  return (
    <div className="bg-[#161616] text-white min-h-screen flex flex-col items-center py-6">
      <div className="w-full max-w-4xl p-6">
        <h2 className="text-4xl font-semibold mb-6 text-center">Coming Soon</h2>
        <h3 className="text-2xl font-semibold mb-6 text-center text-gray"><i>Currently All features are free. Subscription will be available from June 1st </i></h3>

        {/* Period Selector as Tabs */}
        <div className="mb-6 flex justify-center space-x-6">
          {/* <Button size="sm" className={`bg-[black] text-thite border-2 border-white ${selectedPeriod === 'monthly' ? 'bg-[#161616] text-white' : 'bg-[#161616] text-gray-400'}`}
            onClick={() => handleTabChange('monthly')}
          >Monthly</Button> */}

          {/* <button className="bg-transparent hover:bg-none border border-[#5ca9d6] px-4 py-2 rounded-lg font-[500] hover:bg-[#5ca9d6] transition duration-150" onClick={() => handleTabChange('monthly')}><span className='text-white'>Monthly</span></button>
          <button className="bg-transparent hover:bg-none border border-[#5ca9d6] px-4 py-2 rounded-lg font-[500] hover:bg-[#5ca9d6] transition duration-150" onClick={() => handleTabChange('6 months')}><span className='text-white'>6 Months</span></button>
          <button className="bg-transparent hover:bg-none border border-[#5ca9d6] px-4 py-2 rounded-lg font-[500] hover:bg-[#5ca9d6] transition duration-150" onClick={() => handleTabChange('Yearly')}><span className='text-white'>Yearly</span></button> */}
        </div>
      </div>

      {/* Modal for Transaction Result */}
      {isModalOpen && transactionResult && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">{transactionResult.success ? 'Success' : 'Error'}</h3>
            <p className="text-gray-400 mb-4">{transactionResult.message}</p>
            {/* <button
              onClick={closeModal}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditSubscribe;
