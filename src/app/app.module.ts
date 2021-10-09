import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { DeleteBtnComponent } from './components/delete-btn/delete-btn.component';
import { TimePipe } from './time.pipe';
import { HighlightquoteDirective } from './highlightquote.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    QuoteComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    DeleteBtnComponent,
    TimePipe,
    HighlightquoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
