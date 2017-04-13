import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DashboardComponent } from './dashboard-component';
import { FeedService } from '../feed.service';
import { FeedInfo } from '../model/feed-info';
import { FeedEntry } from '../model/feed-entry';

import { DialogService } from '../shared/simple-dialog/dialog.service';

@Component({
  selector: 'component-rss',
  template: `
      <md-card>
        <md-card-header *ngIf="items.length">
          <md-card-title>{{feed.title}} <font color="red">|</font> {{feed.author}}</md-card-title>
          <md-card-subtitle>{{feed.description}} </md-card-subtitle>
        </md-card-header>
        <md-card-content *ngIf="!items.length">
          <md-spinner style="margin-bottom: 10px;"></md-spinner>              
          Loading data from... {{end_point}}
        </md-card-content>
        <md-card-content *ngIf="items.length">
          <md-list-item *ngFor="let item of items">
            <button md-icon-button (click)="openDialog(item.title, item.description)">
              <md-icon>info</md-icon>
            </button>
            {{item.title}}
          </md-list-item>
        </md-card-content>
        <md-card-actions style="text-align: right;">
          <button md-mini-fab (click)='onOpenLink()' mdTooltip="Open in New Window" mdTooltipPosition="above">
            <md-icon>open_in_new</md-icon>
          </button>
          <button md-mini-fab (click)='onPullData()' mdTooltip="Refresh" mdTooltipPosition="above">
            <md-icon>refresh</md-icon>
          </button>
        </md-card-actions>
      </md-card>
      `
})

export class DashboardComponentRss implements DashboardComponent {

  private feed: any = {};
  private items: any = [];

  @Input() title: string;
  @Input() end_point: string;
  @Input() count: number;

  @Output() selected = new EventEmitter();

  constructor(
    private feedService: FeedService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.onPullData();
  }

  onPullData() {
    this.feedService.getFeedContent(this.end_point)
      .delay(1000)
      .subscribe(
      result => {
        this.feed = result.feed,
          this.items = result.items.filter((item, index) => { return index < this.count; });
      },
      error => console.log(error)
      );
  }

  openDialog(title: string, message: string) {
    console.log(message);
    this.dialogService.confirm(title, message);
  }

  onSelected() {
    this.selected.emit(this);
  }

  onOpenLink() {
    window.open(this.end_point, '_blank');
  }
}
