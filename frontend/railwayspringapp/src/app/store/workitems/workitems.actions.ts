import { createAction, props } from "@ngrx/store";
import { WorkItem } from "./workitems.model";

export const select = createAction('[Workitems Component] Select Workitem', props<{ item: WorkItem }>());
export const deselect = createAction('[Workitems Component] Deselect Workitem', props<{ item: WorkItem }>());
export const toggleSelection = createAction('[Workitems Component] Toggle Selection', props<{ item: WorkItem }>())
export const reset = createAction('[Workitems Component] Reset');