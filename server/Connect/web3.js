const Web3 = require('web3');
const Contract = require('web3-eth-contract');
require("dotenv").config();

const web3=new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/b03f802e554f441786b51c437837bfe4'));
try{
    const nft_contract=new Contract(process.env.ABI,process.env.ADDRESS);
}catch(e){
    console.log(e)
}

module.exports={
    web3
}