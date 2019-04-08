import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChatService } from 'src/app/core/chat/chat.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnChanges {

  chat$: Observable<any>;
  newMsg: string;
  chatId: string;
  @Input() 
  set chatSelected(value) {
    this.chatId = value;
  }
  
  constructor(
    public chatService: ChatService,
    private route: ActivatedRoute,
    public auth: AuthService
  ) { }

  ngOnChanges() {
    // const chatId = this.route.snapshot.paramMap.get('id');
    console.log(this.chatId);
    const source = this.chatService.get(this.chatId);
    this.chat$ = this.chatService.joinUsers(source);

  }

  submit(chatId) {
    this.chatService.sendMessage(chatId, this.newMsg);
    this.newMsg = '';
  }

  trackByCreated(i, msg) {
    return msg.createdAt;
  }
}
