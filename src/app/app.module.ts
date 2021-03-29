import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComicComponent } from './prueba-comic/prueba-comic.component';
import { ComicService } from './services/comic-service/comic.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponenetsModule } from './components/componenets.module';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponenetsModule
  ],
  providers: [ComicService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
