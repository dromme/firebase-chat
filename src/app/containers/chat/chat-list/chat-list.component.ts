import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/core/chat/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  isChatOpen = false;
  selectedChat: string;
  chats$: Observable<any>;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    // this.promise = this.chatService.create();
  }

  getChats(){
    this.chats$ = this.chatService.getChats();
  }

  openChat(id){
    this.isChatOpen = false;
    
    this.selectedChat = id;
    console.log(this.selectedChat);
    this.isChatOpen = true;
  }

}
