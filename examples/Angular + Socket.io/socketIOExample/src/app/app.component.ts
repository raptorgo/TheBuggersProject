import { Component } from '@angular/core';
import { ChatService } from './services/chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private chat: ChatService){ }
  
    ngOnInit() {
      this.chat.messages.subscribe(msg => {
        console.log(msg);
      })
    }
  
    sendMessage() {
      this.chat.sendMsg("Test Message");
    }
}
