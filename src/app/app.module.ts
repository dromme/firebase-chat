import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ChatComponent } from './containers/chat/chat/chat.component';
import { LoginComponent } from './containers/session/login/login.component';
import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { ChatListComponent } from './containers/chat/chat-list/chat-list.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    ChatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    NgZorroAntdModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
