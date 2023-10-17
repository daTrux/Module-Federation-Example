import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RemoteTemplateModule } from './remote-template/remote-template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RemoteTemplateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
