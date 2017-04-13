import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Dashboard } from './dashboard/dashboard';
import { DashboardComponentRss } from './dashboard/dashboard-component-rss';
import { DashboardComponentOutlet } from './dashboard/dashboard-component-outlet';

import { AppComponent } from './app.component';

// import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedService } from './feed.service';
import { DialogService} from './shared/simple-dialog/dialog.service';

// shared
import { StripHtmlTagsPipe } from './pipe/strip-html-tags.pipe';
import { SimpleDialogComponent } from './shared/simple-dialog/simple-dialog.component';

@NgModule({

  declarations: [
    AppComponent,
    Dashboard,
    DashboardComponentOutlet,
    DashboardComponentRss,
    //FeedCardComponent,
    StripHtmlTagsPipe,
    SimpleDialogComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule
  ],

  providers: [
    FeedService,
    DialogService
  ],

  bootstrap: [
    AppComponent
  ],

  entryComponents: [
      DashboardComponentRss,
      SimpleDialogComponent
  ]
})
export class AppModule { }
