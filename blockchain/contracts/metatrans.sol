// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;


contract gasLessPool {

    mapping (address => uint256) balances;
    address public owner;
    

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
     
    function withdraw(
        address _to,
        uint _amount,
        uint _nonce,
        bytes memory signature
    ) public view onlyOwner returns(address){
        bytes32 messageHash = getMessageHash(_to, _amount, _nonce);
        bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);

        address signer = recoverSigner(ethSignedMessageHash, signature) ;

        return(signer);
        
    }


    function _deposit (address add,uint256 amount) internal {
        require(amount >0, "invalide amount");
        balances[add] += amount;
    }  

    
    function _withdraw (address add,uint256 amount) public onlyOwner {
        require(amount >0, "invalide amount");
        balances[add] -= amount;
        payable(add).transfer(amount);
    }  
    

    // for withdraw
    function getMessageHash(
        address _to,
        uint _amount,
        uint _nonce
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_to, _amount,  _nonce));
    }

    function getEthSignedMessageHash(bytes32 _messageHash)
        public
        pure
        returns (bytes32)
    {
        return
            keccak256(
                abi.encodePacked("\x19Ethereum Signed Message:\n32", _messageHash)
            );
    }   

 
  

    function recoverSigner(bytes32 _ethSignedMessageHash, bytes memory _signature)
        public
        pure
        returns (address)
    {
        (uint8 v, bytes32 r, bytes32 s) = splitSignature(_signature);

        return ecrecover(_ethSignedMessageHash, v, r, s);
    }

    function splitSignature(bytes memory sig)
        public
        pure
        returns (
            uint8 v ,
            bytes32 r,
            bytes32 s
        )
    {
        require(sig.length == 65, "invalid signature length");

        assembly {
  

            // first 32 bytes, after the length prefix
            r := mload(add(sig, 32))
            // second 32 bytes
            s := mload(add(sig, 64))
            // final byte (first byte of the next 32 bytes)
            v := byte(0, mload(add(sig, 96)))
        }
            return(v,r,s);
    }
}
