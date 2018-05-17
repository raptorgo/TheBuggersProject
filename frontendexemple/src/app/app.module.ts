import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import {SensorDialogComponent} from './sensor-dialog/sensor-dialog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {InfoDialogComponent} from './info-dialog/info-dialog.component';
import {ReportComponent} from './report/report.component';


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
  MatToolbarModule, MatButtonToggle, MatButtonToggleModule, MatButtonToggleGroup, MatAccordion
} from '@angular/material';
import {ModifyProfileComponent} from './modify-profile/modify-profile.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import {SortablejsModule} from 'angular-sortablejs';

const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user/modifica-profilo', component: ModifyProfileComponent},
  {path: 'admin', component: AdminComponent}
];
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { MachineDialogComponent } from './machine-dialog/machine-dialog.component';
import {SocketService} from './services/socket.service';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

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
    ModifyProfileComponent,
    DashboardComponent,
    AdminComponent,
    MachineDialogComponent,
    ProfileSettingsComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // useHash: true
      }
    ),
    ChartsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

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
    MatButtonToggleModule,
    MatExpansionModule,
    SortablejsModule.forRoot({ animation: 500 }),
    SortablejsModule
  ],
  providers: [
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
