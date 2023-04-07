import {actionsFactory, createEffect, ofType} from '@ngneat/effects';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs';

export const testActions = actionsFactory('test');
export const test1 = testActions.create('Test1')

@Injectable({providedIn: 'root'})
export class Test1Effect {
  testEffect$ = createEffect(actions => actions.pipe(
    ofType(test1),
    tap(() => {
      console.log('test1 effect triggered!')
    })
  ));
}
