import { createReducer, on } from "@ngrx/store";
import { WorkitemStateInterface } from "./workitems.interface";
import * as workitemActions from './workitems.actions';

export const initialState: WorkitemStateInterface = {
    workitems: [],
    error: null,
    isLoading: false
}

export const workitemStateReducers = createReducer(initialState,
    on(workitemActions.select, (state, action) => ({...state, workitems: state.workitems.concat(action.item)})),
    on(workitemActions.deselect, (state, action) => ({...state, workitems: state.workitems.filter(item => item !== action.item)})),
    on(workitemActions.toggleSelection, (state, action) => ({...state, workitems: state.workitems.filter(item => item == action.item).length > 0 ? state.workitems.filter(item => item !== action.item) : state.workitems.concat(action.item)})),
    on(workitemActions.reset, (state) => initialState),
);