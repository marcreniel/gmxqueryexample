'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link'

export default function IncreaseGuaranteedUsdQueries() {
  const [queryFunctionResults, setQFR] = useState<any[]>([]);

    useEffect(() => {
        queryFunction('0xd9d4761f75e0d0103b5cbeab941eeb443d7a56a35b5baf2a0787c03f03f4e474');
      }, []);
    
      const queryFunction = async (req: String) => {
        const res = ((await fetch(`/api/queryContract?topic=${req}`)).json());
        setQFR(await res || []);
      }
    if (queryFunctionResults) {
        return (
            <main className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">IncreaseGuaranteedUsd() Queries</h2>
                <ul className="space-y-4">
                {queryFunctionResults.map((log, index) => (
                    <li key={index} className="bg-white p-4 shadow-md">
                        <div>
                        <strong>Transaction Hash: </strong><Link className="text-blue-500 underline" target="_blank" rel="noopener noreferrer" href={`https://arbiscan.io/tx/${log.transactionHash}`}>{log.transactionHash}</Link>
                        </div>
                        <div>
                        <strong>Block Number:</strong> {log.blockNumber}
                        </div>
                        <div>
                        <strong>Data:</strong> {log.data}
                        </div>
                        <div>
                        <strong>Topics:</strong> {log.topics.join(', ')}
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

