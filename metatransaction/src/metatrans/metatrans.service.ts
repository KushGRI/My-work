import { Injectable } from '@nestjs/common';
import { SignDataDto } from './dtos/signData.dto';
let Web3 = require('web3');

@Injectable()
export class MetatransService {

    async withdraw(signDataDto: SignDataDto): Promise<any>{

        const { to, amount, nounce, sign } = signDataDto;
        const infura = "https://rinkeby.infura.io/v3/eb9503dd95874e53ba4c8098fb37c6ae";
        const contractAddress = "0x7e245d2859F5b8111cBD88b3a6b5e6C843b01467";
        const web3 = new Web3(new Web3.providers.HttpProvider(infura));
        const contract = new web3.eth.Contract( [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"add","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"_withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_messageHash","type":"bytes32"}],"name":"getEthSignedMessageHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"getMessageHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_ethSignedMessageHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"recoverSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_nonce","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"withdraw","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}] ,contractAddress)
        
        try{
        const ans = await contract.methods.withdraw(to, amount, nounce, sign).call({from : '0x9f9F60007A7b5585A918E6B9d2e88C3d24839512'});
        return ans;
        }catch(e){
            console.log('error in  method,:',e)
            return e;
        }
    }
}
