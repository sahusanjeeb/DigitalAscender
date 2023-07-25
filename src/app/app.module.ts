import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@collab/comp-library';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

import { LoaderService } from './shared/services/loader.service';
import { HttpClientModule } from '@angular/common/http';
import { SessionStorageService } from '@collab/comp-library';
import { PromptManagementModule } from './pages/prompt-management/prompt-management.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,

  ],
  imports: [
    UiModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PromptManagementModule

  ],
  providers: [
    LoaderService,
    SessionStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
