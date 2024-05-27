import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const incrementOnBackend = createAction('[Counter Component] IncrementOnBackend');
export const setCounterAction = createAction('[Counter Component] SetCounter', props<{counter: number}>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');