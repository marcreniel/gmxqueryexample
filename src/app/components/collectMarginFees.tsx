'use client';

import { useEffect, useState } from 'react';

export default function CollectMarginFees() {
    const [queryFunctionResults, setQFR] = useState();

    useEffect(() => {
        queryFunction('0x5d0c0019d3d45fadeb74eff9d2c9924d146d000ac6bcf3c28bf0ac3c9baa011a');
      }, []);
    
      const queryFunction = async (req: String) => {
        const res = ((await fetch(`/api/queryContract?topic=${req}`)).json());
        setQFR(await res); 
      }
    if (queryFunctionResults) {
        return (
            <main className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">CollectMarginFees() Queries</h2>
                <ul className="space-y-4">
                {queryFunctionResults.map((log, index) => (
                    <li key={index} className="bg-white p-4 shadow-md">
                        <div>
                        <strong>Transaction Hash:</strong> {log.transactionHash}
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

