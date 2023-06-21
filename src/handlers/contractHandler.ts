import { Alchemy, Network } from 'alchemy-sdk'
//Import req modules

//Connecting to Arbitrum Mainnet through Alchemy 
const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ARB_MAINNET,
}

export default async function logContractFunctionCalls(topics: string | null) {
    try {
        const alchemy = new Alchemy(config);
        // Querying recent logs using GMX contract, filtering using topic0 (function call in contract)
        let filters = {
            address: "0x489ee077994B6658eAfA855C308275EAd8097C4A",
            fromBlock: await alchemy.core.getBlockNumber() - 5000, 
            toBlock: 'latest',
            topics: [topics],
        }

        const logs = await alchemy.core.getLogs(filters);

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

