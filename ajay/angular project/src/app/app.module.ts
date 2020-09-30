import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

@NgModule({                              
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [                             
  ],
  providers: [  
  
  ],                          
  bootstrap: [AppComponent],
})
export class AppModule { }
