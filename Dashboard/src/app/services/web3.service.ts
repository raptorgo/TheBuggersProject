import {Injectable} from '@angular/core';
import * as Web3 from 'web3';
declare let Web3: any;
declare let window: any;

const tokenABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_data",
        "type": "uint256"
      },
      {
        "name": "_id",
        "type": "uint8"
      },
      {
        "name": "_value",
        "type": "string"
      }
    ],
    "name": "saveValue",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "name": "segnalazioni",
    "outputs": [
      {
        "name": "data",
        "type": "uint256"
      },
      {
        "name": "id",
        "type": "uint8"
      },
      {
        "name": "value",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

@Injectable()
export class Web3Service {
  private _tokenContract: any
  private _tokenContractAddress: string = "0x8cdaf0cd259887258bc13a92c0a6da92698644c0";

  private _web3: any;

  init() {
    return new Promise((resolve, reject) => {
      if (typeof window.web3 !== 'undefined') {
        console.log("Metemask");
        this._web3 = new Web3(window.web3.currentProvider);
      } else {
        console.log("ALtro");
        this._web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.101.50:9545'));
        /*try {
          this._web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.101.30:9545'));
        } catch (error) {
          console.log('non c\'è ');
          reject()
          return
        }*/
      }
      this._tokenContract = this._web3.eth.contract(tokenABI).at(this._tokenContractAddress);
      this._web3.eth.defaultAccount = this._web3.eth.accounts[0]

      resolve();
    })

  }

  public async storeHash(valore: any) {
    console.dir(valore)
    return new Promise((resolve, reject) => {
      this._tokenContract.saveValue(Date.parse(valore.timestamp) / 1000, 5, valore.value, {gas: 900000}, (err, res) => {
        if (err) {
          console.log(err)
          reject(err)
        } else {
          resolve(res)
        }
      })
    });
  }

  public async aaa() {
    return new Promise((resolve, reject) => {
      this._web3.eth.sendTransaction({
        from: this._web3.eth.accounts[0],
        to: this._web3.eth.accounts[1],
        value: this._web3.toWei(1, 'ether'),
      }, function (err, transactionHash) {
        if(err)
          reject(err);
        else
          resolve(transactionHash);
      });
    })
  }

  public async searchHash(hash: string) {
    console.log(`I'm looking for ${hash}`)
    return new Promise((resolve, reject) => {
      this._tokenContract.searchHash(hash, (err, res) => {
        if (err) {
          reject(err)
        } else {
          console.log(res)
          resolve(res)
        }
      })
    }) as Promise<any>;
  }
}
