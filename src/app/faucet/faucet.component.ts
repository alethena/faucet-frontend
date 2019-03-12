import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../util/web3.service';
import { FaucetService } from '../util/faucet.service';

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.css'],
  providers: [Web3Service, FaucetService]
})

export class FaucetComponent implements OnInit {

  selectedAddress = '0x';

  constructor(private web3Service: Web3Service, private faucetService: FaucetService) { }

  async ngOnInit() {
    this.web3Service.bootstrapWeb3();
    setInterval(() => this.refreshAccounts(), 100);

  }

  async refreshAccounts() {
    const adresses = await this.web3Service.getAccounts();
    this.selectedAddress = adresses[0];
  }

  async XCHFCall() {
    await this.faucetService.getXCHF(this.selectedAddress);
  }

}
