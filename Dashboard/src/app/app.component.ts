import {Component} from '@angular/core';
import {MatIconRegistry, MatDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import {SocketService} from './services/socket.service';
import {Subject} from 'rxjs/Subject';
import {ApiService} from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin;
  sectors: Object;
  users: Object;

  selectedUser: Object;
  isDarkTheme = false;
  isCandyTheme = false;
  isCostumazies = false;
  sort = false;
  messages: Subject<any>;

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }
  aperto = false;
  top() {
    this.aperto= false;
    alert('ciao');
  }
  constructor(private wsService: SocketService, private api: ApiService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog) {
    this.wsService.initSocket();
    // On 'Welcome' message we print 'A USER ENTERED'
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
    api.getCompanySectors(1).subscribe((data) => {
      this.users = data;
      this.selectedUser = this.users[0];
    });
    // panel.closeAll();
  }
  themeColor;
  backupThemeColor;
  setColor(color) {
    if (color === 'dark' && this.isDarkTheme) {
      this.themeColor = '';
    } else if (color === 'dark') {
      this.themeColor = this.backupThemeColor;
    } else {
      this.backupThemeColor = color;
      this.themeColor = color;
    }
  }
  checkColor () {
    if (this.isDarkTheme) {

    }
  }
  toggle() {
    if (this.isCostumazies) {
      this.isCostumazies = false;
    } else {
      this.isCostumazies = true;
    }
  }
  toggleSort() {
    if(this.sort) {
      this.sort = false;
    } else {
      this.sort = true;
    }
  }

  checkClass(): string {
    if (!this.isDarkTheme) {
      return "darkBtn";
    }
    return "nDarkBtn";
  }
  selectedBtn = "home";
}
