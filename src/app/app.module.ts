import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    CustomDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
