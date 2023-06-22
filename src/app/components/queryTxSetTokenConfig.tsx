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
                        <strong>Transaction Hash: </strong><Link className="text-blue-500 underline" target="_blank" rel="noopener noreferrer" href={`https://arbiscan.io/tx/${transaction[0].hash}`}>{transaction[0].hash}</Link>
                        </div>
                        <div>
                        <strong>From:</strong> {transaction[0].from}
                        </div>
                        <div>
                        <strong>To:</strong> {transaction[0].to}
                        </div>
                        <div>
                        <strong >Encoded Data:</strong>
                        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
                          {transaction[0].data}
                        </pre>

                        </div>
                        <div>
                        <strong>Decoded Raw JSON:</strong>{transaction[1]}
                        </div>
                        <div>
                        <strong className='text-xl'>Parsed Decoded Data</strong>
                        </div>
                        <div>
                        {transaction[2].method}
                          (
                          {transaction[2].types[0] + transaction[2].names[0]}, 
                          {transaction[2].types[1] + transaction[2].names[1]},
                          {transaction[2].types[2] + transaction[2].names[2]},
                          {transaction[2].types[3] + transaction[2].names[3]},
                          {transaction[2].types[4] + transaction[2].names[4]},
                          {transaction[2].types[5] + transaction[2].names[5]},
                          {transaction[2].types[6] + transaction[2].names[6]}
                          )
                        </div>
                        <div>
                        <table>
                          <thead>
                              <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Data</th>
                              </tr>
                            </thead>
                            <tbody>
                                <tr>
                                  <td>{transaction[2].names[0]}</td>
                                  <td>{transaction[2].types[0]}</td>
                                  <td><Link className="text-blue-500 underline" target="_blank" rel="noopener noreferrer" href={`https://arbiscan.io/address/0x${transaction[2].inputs[0]}`}>0x{transaction[2].inputs[0]}</Link></td>
                                </tr>
                                <tr>
                                  <td>{transaction[2].names[1]}</td>
                                  <td>{transaction[2].types[1]}</td>
                                  <td>{parseInt(transaction[2].inputs[1].hex, 16)}</td>
                                </tr>
                                <tr>
                                  <td>{transaction[2].names[2]}</td>
                                  <td>{transaction[2].types[2]}</td>
                                  <td>{parseInt(transaction[2].inputs[2].hex, 16)}</td>
                                </tr>
                                <tr>
                                  <td>{transaction[2].names[3]}</td>
                                  <td>{transaction[2].types[3]}</td>
                                  <td>{parseInt(transaction[2].inputs[3].hex, 16)}</td>
                                </tr>
                                <tr>
                                  <td>{transaction[2].names[4]}</td>
                                  <td>{transaction[2].types[4]}</td>
                                  <td>{parseInt(transaction[2].inputs[4].hex, 16)}</td>
                                </tr>
                                <tr>
                                  <td>{transaction[2].names[5]}</td>
                                  <td>{transaction[2].types[5]}</td>
                                  <td>{transaction[2].inputs[5].toString()}</td>
                                </tr>
                                <tr>
                                  <td>{transaction[2].names[6]}</td>
                                  <td>{transaction[2].types[6]}</td>
                                  <td>{transaction[2].inputs[6].toString()}</td>
                                </tr>
                            </tbody>
                          </table>
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

