'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link'

export default function QueryTxSetTokenConfig() {
    const [queryFunctionResults, setQFR] = useState<any[]>([]);

    useEffect(() => {
        queryFunction('0x3c5a6e35');
      }, []);
    
      const queryFunction = async (req: String) => {
        const res = ((await fetch(`/api/queryTransactions?method=${req}`)).json());
        setQFR(await res || []);
      }
      if (queryFunctionResults.length > 0) {
        return (
            <main className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">setTokenConfig() Logs</h2>
            <h2 className="text-2xl mb-4">This is querying through Transaction History of the vault contract (0x489ee077994B6658eAfA855C308275EAd8097C4A)</h2>
                <ul className="space-y-4">
                {queryFunctionResults.map((transaction, index) => (
                    <li key={index} className="bg-white p-4 shadow-md">
                        <div>
                        <strong>Transaction Hash: </strong><Link className="text-blue-500 underline" target="_blank" rel="noopener noreferrer" href={`https://arbiscan.io/tx/${transaction.hash}`}>{transaction.hash}</Link>
                        </div>
                        <div>
                        <strong>From:</strong> {transaction.from}
                        </div>
                        <div>
                        <strong>To:</strong> {transaction.to}
                        </div>
                        <div>
                        <strong>Data:</strong> {transaction.data}
                        </div>
                    </li>
                ))}
                </ul>
            </main>
        ) 
    }
    else if (!queryFunctionResults) {
        return (
          <main className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Loading Queries</h2>
            </main>
        )
      }
    
}

