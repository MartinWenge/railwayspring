import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions} from "@ngrx/effects";
import { Observable, map, switchMap, take } from "rxjs";
import { Store } from "@ngrx/store";
import { incrementOnBackend, setCounterAction } from "./counter.actions"
import { MyCounterService, simpleNumber } from "./my-counter.service";

@Injectable()
export class CounterBackendEffects {
    public counter$ = createEffect(
        () => this.actions.pipe(
            ofType(incrementOnBackend),
            switchMap((action: any) => {
                const state = getState(this.store);
                console.log("hello from effect: ", state);
                return this.service.backendAddOne(state).pipe(
                    map(
                        (result) =>{
                            console.log(result);
                           return setCounterAction({counter: result});
                        }
                    )
                )
            })
        )
    )

    constructor(
        private actions: Actions,
        private service: MyCounterService,
        private store: Store<simpleNumber>
    ) {}
}

export const getState = function (store: Store<simpleNumber>): simpleNumber {
    let state: simpleNumber = {} as any;
    store.select((_state: simpleNumber) => _state)
        .pipe(take(1))
        .subscribe(values => state = values);
    return state;
};