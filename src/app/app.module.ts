import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { provideRouter } from '@angular/router';
import routeConfig from './routes';
import { RandomComponent } from './random/random.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideRouter(routeConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
