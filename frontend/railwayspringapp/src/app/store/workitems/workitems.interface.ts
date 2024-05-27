import { WorkItem } from "./workitems.model";

export interface WorkitemStateInterface {
    workitems: WorkItem[];
    error: string | null;
    isLoading: boolean;
}