let Web3 = require("web3");
var Tx = require('ethereumjs-tx');
const HDWalletProvider = require('@truffle/hdwallet-provider');

// const infura = "https://rinkeby.infura.io/v3/eb9503dd95874e53ba4c8098fb37c6ae";
// const contractAddress = "0x7e245d2859F5b8111cBD88b3a6b5e6C843b01467";
// let web3 = new Web3(new Web3.providers.HttpProvider(infura));
// const contract = new web3.eth.Contract( [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"add","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"_withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_messageHash","type":"bytes32"}],"name":"getEthSignedMessageHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"getMessageHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_ethSignedMessageHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"withdraw","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}] ,contractAddress);




// hash = "0x0606a3c9175398345301efec6f132909288c3248208724eb1c8293ba6bdd83c4";





//      function getSign(){


//        // functionhash =  web3.eth.abi.encodeFunctionSignature({
//        //     name: 'transferFrom',
//        //     type: 'function',
//        //     inputs: [
//        //       {
//        //         type: 'address',
//        //         name: 'sender'
//        //       },{
//        //         type: 'address',
//        //         name: 'recipient'
//        //     },{
//        //         type: 'uint256',
//        //         name: 'amount'
//        //     }]
//        // })

// //        functionhash =  web3.eth.abi.encodeFunctionSignature({
// //            name: 'testabi',
// //            type: 'function',
// //            inputs: [
// //              {
// //                type: 'bytes4',
// //                name: 'data'
// //              }]
// //        })
// //
// //
// //        console.log('fh',functionhash)
// //

//     sign = web3.eth.accounts.sign('0xce933794f858f4c9d5dff84daa4606f2f060c0a5c5b4791f8d74bd8f778ef843','f69e40af6d9f545f91e1b39b67902f88841a8b00568e6c563cb1e12504a717bc');
//     sig = sign.signature;
//     console.log(sign);
//     return sig
// }

// getSign()
//     //
//     // let res = "";
//     // async function recover(){
//     //     sign  =  getSign();
//     //     console.log('sign:' , sign);
//     //     try{
//     //    res = await contract.methods.withdraw("0x9f9F60007A7b5585A918E6B9d2e88C3d24839512", 3, 3, sign).call({from : '0x9f9F60007A7b5585A918E6B9d2e88C3d24839512'});
//     //    console.log("res:", res);
//     //     }catch(e){
//     //         console.log('error here',e)
//     //     }
//     //
//     // }
//     // recover();
//     //
//     // async function getMessageHash(){
//     //     hashres = await contract.methods.getMessageHash("0x9f9F60007A7b5585A918E6B9d2e88C3d24839512",3,3).call({from : '0x9f9F60007A7b5585A918E6B9d2e88C3d24839512'})
//     //     console.log('hashresult:',hashres);
//     // }
//     //
//     // getMessageHash()

    const account1 = '0x9f9F60007A7b5585A918E6B9d2e88C3d24839512';
    const privateKey1 = Buffer.from('f69e40af6d9f545f91e1b39b67902f88841a8b00568e6c563cb1e12504a717bc', 'hex');
    const endpoint = "https://polygon-mumbai.g.alchemy.com/v2/mamxSK4D6c4cH9OuGJYt-tF4dFgcxbYB";
    const web3 = new Web3(new Web3.providers.HttpProvider(endpoint));

    const contractAdd = "0x90004e28979153bE3a58B7Ce4AE3254436B3d93f";
    const contractAbi = [{ "inputs": [{ "internalType": "string", "name": "Name", "type": "string" }, { "internalType": "string", "name": "Symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "_burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "_mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "_transfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "_messageHash", "type": "bytes32" }], "name": "getEthSignedMessageHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "getMessageHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "matchSign", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "_ethSignedMessageHash", "type": "bytes32" }, { "internalType": "bytes", "name": "_signature", "type": "bytes" }], "name": "recoverSigner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "bytes", "name": "sig", "type": "bytes" }], "name": "splitSignature", "outputs": [{ "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }];
    const contract = new web3.eth.Contract(contractAbi, contractAdd);

    let myData = contract.methods.transferFrom("0x64f1e0a8377060DBfBFE54C4d2C94644774b608e", account1, 1).encodeABI();
  
  
     web3.eth.getTransactionCount(account1, (err, txCount) => {
        // Build the transaction
        const txObject = {
            nonce:    web3.utils.toHex(txCount),
            to: contractAdd,
             value: web3.utils.toHex(web3.utils.toWei('0', 'gwei')),
            chainId: 80001,
            data: myData
        }
         
        const tx = new Tx(txObject);
        tx.sign(privateKey1);

        
         const serializedTx = tx.serialize();
         const raw = '0x' + serializedTx.toString('hex');
         console.log('tx:',tx)

        async function sign (){

        const ans = await web3.eth.sendSignedTransaction(tx, (err, txHash) => {
         })

        console.log('ans',txHash)
    }
      sign()
        })

