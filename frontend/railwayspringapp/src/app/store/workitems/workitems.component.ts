import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { WorkItem } from './workitems.model';
import { WorkitemsService } from './workitems.service';
import { Store } from '@ngrx/store';
import { reset, toggleSelection } from './workitems.actions';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable, filter, map } from 'rxjs';
import { WorkitemStateInterface } from './workitems.interface';

const workitemData: WorkItem[] = [
  { id: 1, name: 'Workitem Mockup 1', description: 'Workitem Mockup 1 description', status: 'active' },
  { id: 2, name: 'Workitem Mockup 2', description: 'Workitem Mockup 2 description', status: 'active' }
]

@Component({
  selector: 'app-workitems',
  standalone: true,
  imports: [MatTableModule, MatListModule, AsyncPipe, NgFor, NgIf],
  templateUrl: './workitems.component.html',
  styleUrl: './workitems.component.css'
})
export class WorkitemsComponent implements OnInit{
  @ViewChild(MatTable) table!: MatTable<WorkItem>;

  workitemArray$: Observable<WorkItem[]>;

  constructor(
    private store: Store<{ workitemState: WorkitemStateInterface }>,
    private workitemsService: WorkitemsService
  ) {
    this.workitemArray$ = this.store.select(state => state.workitemState.workitems);
  }

  ngOnInit() {
    this.workitemsService.getListOfWorkItems().subscribe((workitems) => {
      if (workitems.length > 0) {
        this.dataSource = workitems;
      }
    })
  }

  displayedColumns: string[] = ['Name', 'Description'];
  dataSource = workitemData;

  toggleRow(row: WorkItem) {
    console.log("toggleRow", row);
    this.store.dispatch(toggleSelection({ item: row }));
  }

  resetWorkitems() {
    this.store.dispatch(reset());
  }
}
