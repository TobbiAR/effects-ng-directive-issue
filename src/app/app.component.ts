import {Component} from '@angular/core';
import {Actions, useDirectiveEffects} from '@ngneat/effects-ng';
import {test1, Test1Effect} from 'src/app/test.effect';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    hostDirectives: [useDirectiveEffects(Test1Effect)]
})
export class AppComponent {
    title = 'effects-ng-directive';

    constructor(private readonly actions: Actions) {
    }

    triggerAction(): void {
        this.actions.dispatch(test1())
    }
}
