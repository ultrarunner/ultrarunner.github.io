import {
    Component,
    ViewContainerRef,
    ComponentFactoryResolver,
    Input,
    Output,
    EventEmitter,
    OnChanges
} from '@angular/core';

import { DashboardComponent } from './dashboard-component';

@Component({
    selector: 'dashboard-component-outlet',
    template: ''
})
export class DashboardComponentOutlet implements DashboardComponent, OnChanges {
    @Input() title: string;
    @Input() end_point: string;
    @Input() count: number;
    @Output() selected = new EventEmitter();
    @Input() type;

    private dynamicInstance: DashboardComponent;

    constructor(private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnChanges(changes) {

        if (changes.type) {
            this.viewContainer.clear();

            // Create Component
            let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
            let componentRef = this.viewContainer.createComponent(factory);
            this.dynamicInstance = componentRef.instance as DashboardComponent;

            // Set up Event-Handlers and delegate to own handlers
            this.dynamicInstance.selected.subscribe(e => this.selected.emit(e));
        }

        // Delegate Properties
        if (changes.title) {
            this.dynamicInstance.title = this.title;
            this.dynamicInstance.end_point = this.end_point;
            this.dynamicInstance.count = this.count;
        }
    }
}
