const Contract = require('web3-eth-contract');
const abi =require("./abi.json");

require("dotenv").config();

try{
    const nft_contract=new Contract(abi,process.env.ADDRESS);
    nft_contract.setProvider('https://goerli.infura.io/v3/b03f802e554f441786b51c437837bfe4');
    
    module.exports={
        nft_contract
    }
}catch(e){
    console.log(e)
}

