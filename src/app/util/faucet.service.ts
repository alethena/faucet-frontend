import { Injectable } from '@angular/core';
import { Web3Service } from './web3.service';
declare let require: any;

const Faucet_artifacts = require('../../assets/Faucet.json');
const FaucetAddress = '0x000';

@Injectable({
  providedIn: 'root'
})

export class FaucetService {

  constructor(private web3Service: Web3Service) { }

  public async getXCHF(sender) {
    const FaucetAbstraction = await this.web3Service.artifactsToContract(Faucet_artifacts);
    const FaucetInstance = await FaucetAbstraction.at(FaucetAddress);
    const hash = await FaucetInstance.getSomeXCHF.sendTransaction({ from: sender });
    console.log(hash);
  }


}
