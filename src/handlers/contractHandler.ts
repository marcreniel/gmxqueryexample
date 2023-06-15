// @ts-nocheck

//Import req modules
const ethers = require('ethers');
const fs = require('fs');

//Connecting to Arbitrum Mainnet through Alchemy 
const alchemy = `https://arb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;
const contractAddress = '0x489ee077994B6658eAfA855C308275EAd8097C4A';

export async function logContractFunctionCalls(topics) {
    const provider = new ethers.JsonRpcProvider(alchemy);
    try {
        // Querying recent logs using GMX contract, filtering using topic0 (function call in contract)
        const logs = await provider.getLogs({
            address: contractAddress,
            topics: [topics],
            fromBlock: await provider.getBlockNumber() - 5000, 
            toBlock: 'latest', 
        });

        // Splits log into individual JSON 
        const logArrayJSON = logs.map((log) => {
            return {
                transactionHash: log.transactionHash,
                blockNumber: log.blockNumber,
                data: log.data,
                topics: log.topics,
            };
            }).reverse();
        
        return logArrayJSON;
    } catch (err) {
        console.log(err)
    }
}

