import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { ChatbotService } from './chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  @Input() botLabel: string = 'Custom Chatbot';
  @Input() sessionId: string = '';
  @Output() customEvent = new EventEmitter<any>();
  displayChat = false;
  apiData = null;

  constructor(private chatbotService: ChatbotService,
              private auth: AuthService) { }

  ngOnInit(): void {
    // Set the Auth token in the service
    this.auth.setAuthorizationToken(this.sessionId);
    // Get the required data from the API
    this.chatbotService.getApiData(this.sessionId).subscribe((data) => {
      this.apiData = data;
      console.log(data);
    });
  }

  buttonClicked() {
    //this.customEvent.emit('Emitting String');
    this.displayChat = !this.displayChat;

    // if (this.apiData) return;
    
    // if (this.displayChat) {
    //   this.chatbotService.getApiData(this.sessionId).subscribe((data) => {
    //     this.apiData = data;
    //     console.log(data);
    //   });
    // }
  }

}
