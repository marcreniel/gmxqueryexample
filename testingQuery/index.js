const ethers = require('ethers');
const fs = require('fs');

const alchemy = 'https://arb-mainnet.g.alchemy.com/v2/EtYwZ8wPjfeHD1oFwFOqoIsjt8tSvs_a';
const contractAddress = '0x489ee077994B6658eAfA855C308275EAd8097C4A';
const parsedABI = JSON.parse(fs.readFileSync("abi.json"));

async function getContractInfo() {
    try {
      // Create ethers.js provider using Infura
      const provider = new ethers.JsonRpcProvider(alchemy);
  
      // Create an instance of the GMX contract
      const contract = new ethers.Contract(contractAddress, parsedABI, provider);
      const blockNumber = await provider.getBlockNumber();

      console.log('Latest block number:', blockNumber);

      // Query variables or call functions of the GMX contract
      const data = await contract.FUNDING_RATE_PRECISION();
      const data2 = await contract.BASIS_POINTS_DIVISOR();
      console.log(data, data2)

      const filter = contract.filters.Swap();
      console.log(filter)

      contract.on(filter, (event) => {
        const blockNumber = event.blockNumber;
        const transactionHash = event.transactionHash;
      
        console.log("Block number:", blockNumber);
        console.log("Transaction hash:", transactionHash);
      });
  
  
    } catch (err) {
        console.log(err)
    }
}

getContractInfo();
