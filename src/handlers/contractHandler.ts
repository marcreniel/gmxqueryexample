//Import req modules
import { Alchemy, Network } from 'alchemy-sdk'

//Connecting to Arbitrum Mainnet through Alchemy 
const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ARB_MAINNET,
}

const vaultAddress = "0x489ee077994B6658eAfA855C308275EAd8097C4A";

export async function logContractFunctionCalls(topics: string | null) {
    try {
        const alchemy = new Alchemy(config);
        // Querying recent logs using GMX contract, filtering using topic0 (function call in contract)
        let filters = {
            address: vaultAddress,
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

export async function queryTransactionsByMethod(method: string | null) {
    try {
        const queryArray = []
        
        const alchemy = new Alchemy(config);
            // @ts-expect-error
            const data = await alchemy.core.getAssetTransfers({
            fromBlock: "0x37713",
            toBlock: "latest",
            fromAddress: "0x5F799f365Fa8A2B60ac0429C48B153cA5a6f0Cf8",
            toAddress: "0x489ee077994B6658eAfA855C308275EAd8097C4A",
            category: ["external"],
            order: "asc",
            withMetadata: false,
            excludeZeroValue: false,
            maxCount: "0x3e8"
          });

        const transfers = data.transfers;

        for (const transfer of transfers) {
            const hash: string = transfer.hash;
            const res = await alchemy.core.getTransaction(hash)
            if(method === res?.data.slice(0, method?.length)){
                queryArray.push(res);
            }
          }
        
        return queryArray;
    } catch (err) {
        console.log(err)
    }

}

