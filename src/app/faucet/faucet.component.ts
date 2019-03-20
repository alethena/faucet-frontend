import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../util/web3.service';
import { FaucetService } from '../util/faucet.service';
import { MatSnackBar } from '@angular/material';
import { delay } from 'q';


@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.css']
})

export class FaucetComponent implements OnInit {

  selectedAddress = '0x';

  constructor(
    private web3Service: Web3Service,
    private faucetService: FaucetService,
    private matSnackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.web3Service.bootstrapWeb3();
    window.addEventListener('load', (event) => {
    });
    setInterval(() => this.refreshAccounts(), 100);
  }

  async refreshAccounts() {
    const adresses = await this.web3Service.getAccounts();
    this.selectedAddress = adresses[0];
  }

  async XCHFCall() {
    const network = await this.web3Service.web3.eth.net.getNetworkType();
    if (network !== 'rinkeby') {
      console.log(this.matSnackBar);
      console.log('IDIOT');
      this.matSnackBar.openFromComponent(MessageComponent, { duration: 6000, verticalPosition: 'top' });

    } else {
      const answ = await this.faucetService.getXCHF(this.selectedAddress);
      console.log(answ);
    }
  }

  async ShowHow() {
    this.matSnackBar.openFromComponent(ShowhowComponent, { duration: 10000, verticalPosition: 'top' });
  }

}

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.html',
  styles: [],
})
export class MessageComponent {}

@Component({
  selector: 'app-showhow-component',
  templateUrl: './showhow-component.html',
  styles: ['./showhow-component.css'],
})
export class ShowhowComponent {}
