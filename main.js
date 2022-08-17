const {Blockchain, transactions} = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('c299756cf8f7f13b80d2ad9b5a8a7ab50b12887051897acc0e7d2c6c029dab7e');
const myWalletAddress = myKey.getPublic('hex');

let millzCoin = new Blockchain();

const tx1 = new transactions(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
millzCoin.addTransaction(tx1);

console.log('\n Starting The Mining...');
millzCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of Muse is', millzCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', millzCoin.isChainValid());