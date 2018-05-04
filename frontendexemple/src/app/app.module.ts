import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DialogComponent} from './dialog/dialog.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import {DialogExempleComponent} from './dialog-exemple/dialog-exemple.component';
import {SensorDialogComponent} from './sensor-dialog/sensor-dialog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {InfoDialogComponent} from './info-dialog/info-dialog.component';
import {ReportComponent} from './report/report.component';
import {CardsComponent} from './cards/cards.component';


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

const appRoutes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'prefix' },
  {path: 'user', component: DashboardComponent},
  {path: 'user/modifica-profilo', component: ModifyProfileComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogExempleComponent,
    SensorDialogComponent,
    InfoDialogComponent,
    ReportComponent,
    CardsComponent,
    ModifyProfileComponent,
    DashboardComponent,
    AdminComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        useHash: true
      } // <-- debugging purposes only
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
    MatExpansionModule
  ],
  providers: [],
  entryComponents: [DialogComponent, DialogExempleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
