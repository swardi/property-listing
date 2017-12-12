import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {Http, HttpModule  } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import {SearchService} from './search.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,   HttpModule,  
    NgbModule.forRoot(),

  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
