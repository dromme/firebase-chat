import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { ChatComponent } from './containers/chat/chat/chat.component';
import { LoginComponent } from './containers/session/login/login.component';
import { ChatListComponent } from './containers/chat/chat-list/chat-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'chats/:id', component: ChatComponent },
  { path: 'chats', component: ChatListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
