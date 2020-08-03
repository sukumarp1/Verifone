import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http'
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { CoreModule } from '../core/core.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AutoCompleteModule,
    ButtonModule,
    DialogModule,
    CoreModule,
    RadioButtonModule,
    TabMenuModule,
    InputTextModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
