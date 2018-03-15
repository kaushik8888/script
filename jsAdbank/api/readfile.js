var fs = require("fs"); //Used for file read and write
var async = require('async') // to handle all the address one by one 
var jsonfile = require('jsonfile')
var webrpc = require('../webrpc.js');
var webipc = require('../webipc.js');
var Contract_ABI = require('../build/contracts/pinns.json'); //contract ABI for token
var ContractObj = web3.eth.contract(Contract_ABI).at("0xa6220acf53aa1ab647a091eb5826b449717eb700"); // making a object for contract (Use the owner address from which the contract is deployed)
// var finalAmt= ''

module.exports = {

    startSend: function(req, res, next) {

        console.log('start') // Transactions Started

        var obj;

        fs.readFile('./content.json', 'utf8', function(err, data) { //read the file with all the address and account 
            if (err) throw err;
            obj = JSON.parse(data) // Pasing the data from the file
console.log('hhhhhhhhhhh', obj)
            async.forEachOf(obj, function(value, key, callback) { // Using each data in the obj for further transaction
            //   finalAmt=finalAmt+value.amount
                if (web3.isAddress(value.address) && value.address) {
                    web3.personal.unlockAccount("0x4FA575511ED8025D7c7c6E60BcbFcaDe06e1A622", "yaswjbhe123", (err, unlocked) => { //Unlock account using passPhrase

                        if (err) return res.send({
                            status: false,
                            message: "Unlocking the owner address failed",
                            data: err
                        });
                        if (!unlocked || unlocked == '') return res.send({
                            status: false,
                            message: "Error Occured",
                            data: 'err'
                        });
                        if (unlocked) {
                            // var amt = (value.amount * 1132)/1.5;
                            console.log('kkkjkjkjkjk', value.address)
                            ContractObj.claimTokensICO(value.address,  {
                                    from: "0x4FA575511ED8025D7c7c6E60BcbFcaDe06e1A622",
                                    gas: 210000,
                                    gasPrice: 40000000000
                                }, //all the details regaurding the transaction
                                (error, txid) => {
                                    //console.log('sendTransaction',txid,error)
                                    if (error) return res.send({
                                        status: false,
                                        message: "Error in Transaction"
                                    }); //If any transaction error comes this will be the response and all the further transactions will be stopped
                                    if (txid) {
                                        console.log('pppppppp',txid)
                                        var datas = {
                                          
                                            address: value.address,
                                            txid: txid

                                        };


                                        fs.appendFile("/home/devgenesis/Desktop/adbankTokenDist/jsAdbank/test.txt", JSON.stringify(datas, null, 2) + '\n', function(err) { //writing file to test.txt
                                            if (err) throw err;
                                            console.log('IS WRITTEN')
                                        });

                                    }
                                });
                        }
                    });
                }



            })
       
        });

    }

}