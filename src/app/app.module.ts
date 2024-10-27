import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';
import { PasswordDisplayComponent } from './components/password-display/password-display.component';
import { PasswordActionsComponent } from './components/password-actions/password-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordGeneratorComponent,
    PasswordDisplayComponent,
    PasswordActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
