import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import 'hammerjs';
import { DialogExempleComponent } from './dialog-exemple/dialog-exemple.component';
import { HomeComponent } from './home/home.component';
import { HometabComponent } from './hometab/hometab.component';
import { ContattiComponent } from './contatti/contatti.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogExempleComponent,
    HomeComponent,
    HometabComponent,
    ContattiComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyCkZkB8edB9Wgps3ypIsNBnLD8u1eTM2ws'
    }),

    // Material
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    // Flex-layout
    FlexLayoutModule,
    MatStepperModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents: [DialogComponent, DialogExempleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
