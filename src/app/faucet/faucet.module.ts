import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaucetComponent } from './faucet.component';
import { UtilModule } from '../util/util.module';
import { RouterModule } from '@angular/router';
// import { Web3Service } from '../util/web3.service';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  // MatSnackBarModule, 
  MatSnackBar
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    // MatSnackBarModule,
    RouterModule,
    UtilModule,
    // Web3Service
  ],
  providers: [
    MatSnackBar,
    // Web3Service
  ],
  declarations: [FaucetComponent],
  exports: [FaucetComponent]
})
export class FaucetModule { }
