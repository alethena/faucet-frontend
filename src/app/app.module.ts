import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilModule } from '../app/util/util.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Web3Service } from './util/web3.service';
import {PortalModule} from '@angular/cdk/portal';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatToolbarModule,
  MatSnackBar,
  // MatSnackBarContainer,
  MatSnackBarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FaucetComponent } from './faucet/faucet.component';
import { MessageComponent, ShowhowComponent } from './faucet/faucet.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FaucetModule } from './faucet/faucet.module';

@NgModule({
  declarations: [
    AppComponent,
    // FaucetComponent,
    // MatSnackBarContainer,
    MessageComponent,
    ShowhowComponent
  ],
  entryComponents: [
    // MatSnackBarContainer,
    MessageComponent,
    ShowhowComponent,],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    CommonModule,
    PortalModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatToolbarModule,
    MatSnackBarModule,
    FaucetModule,
    // MatSnackBarContainer,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [Web3Service, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
