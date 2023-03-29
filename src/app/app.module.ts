import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UavInterfaceComponent } from './uav-interface/uav-interface.component';
import { HeaderComponent } from './header/header.component';
import { UavVideoFeedComponent } from './uav-interface/uav-video-feed/uav-video-feed.component';
import { UavCommandsComponent } from './uav-interface/uav-commands/uav-commands.component';
import { UavStatusComponent } from './uav-interface/uav-status/uav-status.component';
import { UavSelectorComponent } from './uav-interface/uav-selector/uav-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    UavInterfaceComponent,
    HeaderComponent,
    UavVideoFeedComponent,
    UavCommandsComponent,
    UavStatusComponent,
    UavSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
