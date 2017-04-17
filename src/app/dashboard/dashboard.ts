import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DashboardComponentRss } from "./dashboard-component-rss";
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';

@Component({
    selector: 'dashboard',
    template: `
        <masonry style="margin:0 auto;">
            <dashboard-component-outlet *ngFor="let info of componentInfos"
                    [type]="info.type" 
                    [title]="info.title" 
                    [end_point]="info.end_point"
                    [count]="info.count"
                    (selected)="select($event)">
              </dashboard-component-outlet>
        </masonry>
        <div class="col-sm-12">&nbsp;</div>

        <div *ngIf="selectedComponent" class="col-sm-12">
            <b>Selected: </b> {{ selectedComponent.title }} | {{ selectedComponent.end_point }} | {{ selectedComponent.count }}
        </div>
    `
})

export class Dashboard implements AfterViewInit{
    @ViewChild(AngularMasonry) masonry: AngularMasonry;

    options: MasonryOptions = {
        transitionDuration: '0.35'
        //fitWidth: true
    };

    ngAfterViewInit() {
        this.masonry.layoutComplete.subscribe(() => {
            console.log('layout');
        });
    }

    private componentInfos = [
        {
            type: DashboardComponentRss,
            title: '1st Component - Freakonomics',
            end_point: 'http://feeds2.feedburner.com/freakonomicsradio',
            count: 6
        },
        {
            type: DashboardComponentRss,
            title: '2nd Component - Channel 9',
            end_point: 'https://channel9.msdn.com/all/rss',
            count: 8
        },
        {
            type: DashboardComponentRss,
            title: '3rd Component - Ted Talks',
            end_point: 'https://www.ted.com/talks/rss',
            count: 10
        },
        {
            type: DashboardComponentRss,
            title: '4th Component - Adventures in Angular',
            end_point: 'https://feeds.feedwrench.com/AdventuresInAngular.rss',
            count: 10
        }
    ];

    selectedComponent: Dashboard;

    select(selected) {
        this.selectedComponent = selected;
    }
}