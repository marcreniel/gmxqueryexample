'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link'

export default function SwapQueries() {
  const [queryFunctionResults, setQFR] = useState<any[]>([]);

    useEffect(() => {
        queryFunction('0x0874b2d545cb271cdbda4e093020c452328b24af12382ed62c4d00f5c26709db');
      }, []);
    
      const queryFunction = async (req: String) => {
        const res = ((await fetch(`/api/queryContract?topic=${req}`)).json());
        setQFR(await res || []);
      }
      if (queryFunctionResults.length > 0) {
        return (
            <main className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Swap() Queries</h2>
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

