<.......------Abank Token Distribution---------..........> 


The following code will help to distribute the adbank tokens --->

Environment for running the Code-

1  Any os(macOs, ubuntu)[Try to use ubuntu]
2. RAM (min 8gb)
3. Memory (50GB space free)


Follow the Steps -

--------> (For Ubuntu, you can follow the instructions)

a.sudo apt-get install software-properties-common
b.sudo add-apt-repository -y ppa:ethereum/ethereum
c.sudo apt-get update
d.sudo apt-get install ethereum

//-----------------------------------------------------------------------------------------------//

If you're just upgrade geth from a previous version, you can just run

sudo apt install geth


------>(For older releases on Mac OSX, you can use Homebrew to install from scratch:)

a.brew install ethereum

and again if you are upgrading just geth

b.brew install geth

//-----------------------------------------------------------------------------------------------//

------>How to start Sync for rinkeby network(Testnet Sync)

Just write Command

geth --rinkeby --rpc --rpcaddr="localhost" --rpcapi="eth,personal,miner,web3" --rpccorsdomain *


Something like this will be displayed


navneet@navneet:~$ geth --rinkeby --rpc --rpcaddr="localhost" --rpcapi="eth,personal,miner,web3" --rpccorsdomain *
INFO [01-24|22:37:58] Starting peer-to-peer node               instance=Geth/v1.7.3-stable-4bb3c89d/linux-amd64/go1.9
INFO [01-24|22:37:58] Allocated cache and file handles         database=/home/navneet/.ethereum/rinkeby/geth/chaindata cache=128 handles=1024
INFO [01-24|22:38:00] Initialised chain configuration          config="{ChainID: 4 Homestead: 1 DAO: <nil> DAOSupport: true EIP150: 2 EIP155: 3 EIP158: 3 Byzantium: 1035301 Engine: clique}"
INFO [01-24|22:38:00] Initialising Ethereum protocol           versions="[63 62]" network=4
INFO [01-24|22:38:00] Loaded most recent local header          number=1643673 hash=24a219…816ce1 td=3056349
INFO [01-24|22:38:00] Loaded most recent local full block      number=1643673 hash=24a219…816ce1 td=3056349
INFO [01-24|22:38:00] Loaded most recent local fast block      number=1643673 hash=24a219…816ce1 td=3056349
INFO [01-24|22:38:00] Loaded local transaction journal         transactions=8 dropped=0
INFO [01-24|22:38:00] Regenerated local transaction journal    transactions=8 accounts=1
WARN [01-24|22:38:00] Blockchain not empty, fast sync disabled 
INFO [01-24|22:38:00] Starting P2P networking 
INFO [01-24|22:38:02] Mapped network port                      proto=udp extport=30303 intport=30303 interface="UPNP IGDv1-IP1"
INFO [01-24|22:38:03] UDP listener up                          self=enode://6d7651a562a62879c34f1ec3dbef7df5a834fb6885ad40463fe975b8114fc32d20b919f6ef363b8775fd9c18db0d95a490b74c6dde4964fb47ec98fbd12c066a@10.60.73.112:30303
INFO [01-24|22:38:03] RLPx listener up                         self=enode://6d7651a562a62879c34f1ec3dbef7df5a834fb6885ad40463fe975b8114fc32d20b919f6ef363b8775fd9c18db0d95a490b74c6dde4964fb47ec98fbd12c066a@10.60.73.112:30303
INFO [01-24|22:38:03] IPC endpoint opened: /home/navneet/.ethereum/rinkeby/geth.ipc 
INFO [01-24|22:38:03] Mapped network port                      proto=tcp extport=30303 intport=30303 interface="UPNP IGDv1-IP1"
INFO [01-24|22:38:04] HTTP endpoint opened: http://localhost:8545 
INFO [01-24|22:38:33] Block synchronisation started 
INFO [01-24|22:38:40] Imported new chain segment               blocks=2 txs=10 mgas=2.576 elapsed=1.575s mgasps=1.635 number=1643675 hash=52d919…c4d6d4




---->How to start Sync for Main network

Just write Command

geth 

------> For further problems refer to ---------->https://gist.github.com/cryptogoth/10a98e8078cfd69f7ca892ddbdcf26bc

//---------------------------------------------------------------------------------------------------//

---------------> Install Visual Studio Code From Official site

a. https://code.visualstudio.com/



-----------------> Open the code with visual studio code 


//---------------------------------------------------------------------------------------------//

Download and Install nodejs from official site

a. https://nodejs.org/en/download/



//---------------------------------------------------------------------------------//

1.

check the webipc file in the code the following code will be written 

var Web3 = require('web3');
var net = require('net');

var client = new net.Socket();

if (typeof web3 !== 'undefined') 
{
	web3 = new Web3(web3.currentProvider);
} 
else {
	web3 = new Web3(new Web3.providers.IpcProvider('/home/navneet/.ethereum/rinkeby/geth.ipc', client)); // for serverss
	 
}

module.exports = web3;


You just have to change the path -------> /home/navneet/.ethereum/rinkeby/geth.ipc <----------------------- mine is this for the geth.ipc file 

b .The code contains file content.json that contains address and amount to transfer in array of json  

   Eg.[
  {
    "address":"0x73F7Ced8cc9D27DC426210c32fc6d0a40f941eE1",
    "amount": 0.7
   
  },
  {
    "address":"0x0e356Ea698751bbed15dbd975ebD0d845191938E",
    "amount": 0.5 
  }
     ]

c. The code runs catches all the address and start sending the respected amount of tokens in that address 

d. There is a second file that saves all  the transaction hash with the address and amount that is transferred


//----------------------------------------------------------------------------------//
-------------------------> How to run the code 


a. Open the terminal with shortcut (ctrl+(~`)) button. 
b. run npm install.
c. Go to your browser and open localhost:2000.
d. A button will be displayed.
e. CLick on that button and the transactions will be started.


Inside file test.txt we will be able to see this----------->

{
  "address": "0xea437B57E0b0f7f76053E4D75fB264Ee22960300",
  "value": 0.5,
  "txid": "0x1f75b06ac740df734dabec6e9d227522d52f3d490f40de72f5b597ce13b1d53f"
}


//-----------------------------------------------------------------------------------//


For futher queries mail on - navneetprocs1.6@fmail.com
















 
