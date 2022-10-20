import { _contractAbi } from "./contractabi";
import { ExecuteDto } from "./dtos/execute.dto";
import { ScheduleDto } from "./dtos/schedule.dto";
let Web3 = require('web3');

export class Blockchain{

    adminccount = '0x9f9F60007A7b5585A918E6B9d2e88C3d24839512';
    adminprivateKey = '0xf69e40af6d9f545f91e1b39b67902f88841a8b00568e6c563cb1e12504a717bc';

    proposeraccount = '0x64f1e0a8377060DBfBFE54C4d2C94644774b608e';
    proposerprivatekey = '460f1f78af6965f25cd2dd04a56b22ab07a9baf24de9dbf2075644ee28f3c200';

    executoraccount = '0xFC595A81E04BEBe3707966eD55F1d434858A0D0F';
    executorprivatekey =  'c08cfbe514cb63b0302b2820d15dc22cee35c932a918cb181636082c9886f916';

    contractAdd = "0x90004e28979153bE3a58B7Ce4AE3254436B3d93f";
    contractAbi = _contractAbi;
    endpoint = "https://goerli.infura.io/v3/657e1f4a9a5d4e4697ac0aac52c17a9b"
    web3 = new Web3(new Web3.providers.HttpProvider(this.endpoint));
    contract = new this.web3.eth.Contract(this.contractAbi, this.contractAdd);

    async schedule(scheduleDto: ScheduleDto):Promise<any>{
       const {target, value, data, predecessor, salt, delay} = scheduleDto;
       const tdata = this.contract.methods.schedule(target, value, data, predecessor, salt, delay).encodeABI();
       let txCount = await this.web3.eth.getTransactionCount(this.proposeraccount);

       
       const txObject = {
        nonce:   this.web3.utils.toHex(txCount),
        to: this.contractAdd,
         value: this.web3.utils.toHex(this.web3.utils.toWei('0', 'gwei')),
        chainId: 5,
        data: tdata,
        gas: 300000,
    }
    let signedTransaction = await this.web3.eth.accounts.signTransaction(txObject, this.proposerprivatekey);
    var res = await  this.web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
    return res.transactionHash;
    }

    async execute(executeDto: ExecuteDto):Promise<any>{
        const {target, value, payload, predecessor, salt} = executeDto;
        const tdata = this.contract.methods.execute(target, value, payload, predecessor, salt).encodeABI();
        let txCount = await this.web3.eth.getTransactionCount(this.executoraccount);
        
        const txObject = {
         nonce:   this.web3.utils.toHex(txCount),
         to: this.contractAdd,
          value: this.web3.utils.toHex(this.web3.utils.toWei('0', 'gwei')),
         chainId: 5,
         data: tdata,
         gas: 300000,
     }
 
     let signedTransaction = await this.web3.eth.accounts.signTransaction(txObject, this.executorprivatekey);
     let res = await  this.web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
     return res.transactionHash;
     }

     async cancel(id):Promise<any>{
        const idinput = id.id;
        console.log('idinput',idinput);
        const tdata = this.contract.methods.cancel(idinput).encodeABI();
        let txCount = await this.web3.eth.getTransactionCount(this.proposeraccount);
        
        const txObject = {
         nonce:   this.web3.utils.toHex(txCount),
         to: this.contractAdd,
          value: this.web3.utils.toHex(this.web3.utils.toWei('0', 'gwei')),
         chainId: 5,
         data: tdata,
         gas: 300000,
     }
 
     let signedTransaction = await this.web3.eth.accounts.signTransaction(txObject, this.proposerprivatekey);
     let res = await  this.web3.eth.sendSignedTransaction(signedTransaction.rawTransaction)
     return res.transactionHash;
     }
}