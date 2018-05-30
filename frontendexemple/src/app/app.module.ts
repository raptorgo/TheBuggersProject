import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import {SensorDialogComponent} from './sensor-dialog/sensor-dialog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {InfoDialogComponent} from './info-dialog/info-dialog.component';
import {ReportComponent} from './report/report.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import {SortablejsModule} from 'angular-sortablejs';
import {ProfileSettingsComponent} from './profile-settings/profile-settings.component';
import { MachineDialogComponent } from './machine-dialog/machine-dialog.component';
import {SocketService} from './services/socket.service';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';

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
  MatToolbarModule, MatButtonToggle, MatButtonToggleModule, MatButtonToggleGroup, MatAccordion,
} from '@angular/material';

const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/modifica-profilo', component: ProfileSettingsComponent},
  {path: 'admin', component: AdminComponent}
];
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import {ApiService} from './services/api.service';
import { HomeComponent } from './tab/tab.component';
import { HometabComponent } from './chiSiamo/chiSiamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ChangeDataComponent } from './change-data/change-data.component';

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y"
    });
    return mc;
  }
}


@NgModule({
  declarations: [
    AppComponent,
    SensorDialogComponent,
    InfoDialogComponent,
    ReportComponent,
    DashboardComponent,
    AdminComponent,
    MachineDialogComponent,
    ProfileSettingsComponent,
    HomeComponent,
    HometabComponent,
    ContattiComponent,
    FirstPageComponent,
    ChangeDataComponent

  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // useHash: true
      }
    ),
    MatInputModule,
    ChartsModule,
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
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonToggleModule,
    // Flex-layout
    FlexLayoutModule,
    MatButtonToggleModule,
    MatExpansionModule,
    SortablejsModule.forRoot({ animation: 500 }),
    SortablejsModule,
    Ng2GoogleChartsModule
  ],
  providers: [
    ApiService,
    SocketService,
    {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig,
  }
  ],
  entryComponents: [MachineDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
