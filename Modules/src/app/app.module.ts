import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { CustomPreloadingStrategy } from './CustomPreloadingStrategy';
import { AuthGuardService } from './can-load';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    // AdminModule, //lazy loading
    // **匹配符必须放在最后
    AppRoutingModule,
  ],
  providers: [CustomPreloadingStrategy, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
