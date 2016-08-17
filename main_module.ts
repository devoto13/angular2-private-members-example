import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, ApplicationRef } from '@angular/core';

@Component({
    selector: 'hello-app',
    template: `<div class="greeting">{{greeting}} <span red>world</span>!</div>
  <button class="changeButton" (click)="changeGreeting()">change greeting</button>`
})
export class MyComponent {
    greeting: string = 'Hello';

    changeGreeting(): void {
        this.greeting = 'howdy';
    }
}

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ MyComponent ],
    entryComponents: [ MyComponent ],
    bootstrap: [ MyComponent ]
})
export class MainModule {
}
