import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { provideRouter } from '@angular/router';
import routeConfig from './routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    AppRoutingModule
  ],
  providers: [provideRouter(routeConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
