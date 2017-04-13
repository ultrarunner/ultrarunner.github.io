import { Component } from '@angular/core';
import { DashboardComponentRss } from "./dashboard-component-rss";
//import {DashboardComponentB} from "./dashboard-component-nyt";

@Component({
    selector: 'dashboard',
    template: `
        <div fxLayout="row" fxLayoutAlign="space-around" fxLayoutWrap="wrap">    
            <div *ngFor="let info of componentInfos" 
                fxFlex="100" 
                fxFlex.gt-xs="49.5" 
                fxFlex.gt-sm="33" 
                fxFlex.gt-md="25" style="margin-bottom: 5px;">
                <dashboard-component-outlet
                    [type]="info.type" 
                    [title]="info.title" 
                    [end_point]="info.end_point"
                    [count]="info.count"
                    (selected)="select($event)">
                </dashboard-component-outlet>
            </div>
        </div>
        <div class="col-sm-12">&nbsp;</div>

        <div *ngIf="selectedComponent" class="col-sm-12">
            <b>Selected: </b> {{ selectedComponent.title }} | {{ selectedComponent.end_point }} | {{ selectedComponent.count }}
        </div>
    `
})

export class Dashboard {

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