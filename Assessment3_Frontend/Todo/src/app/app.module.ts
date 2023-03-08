import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { FindComponent } from './find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    FindComponent
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
