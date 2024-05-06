import { Component, ViewChild } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import { WorkItem } from './workitem.model';
import { WorkitemsService } from './workitems.service';

const workitemData: WorkItem[] = [
  {id: 1, name: 'Workitem Mockup 1', description: 'Workitem Mockup 1 description', status: 'active'},
  {id: 2, name: 'Workitem Mockup 2', description: 'Workitem Mockup 2 description', status: 'active'}
]

@Component({
  selector: 'app-workitems',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './workitems.component.html',
  styleUrl: './workitems.component.css'
})
export class WorkitemsComponent {
  @ViewChild(MatTable) table!: MatTable<WorkItem>;

  constructor(private workitemsService: WorkitemsService) {}

  ngOnInit() {
    this.workitemsService.getListOfWorkItems().subscribe((workitems) => {
      if(workitems.length > 0){
        this.dataSource = workitems;
        this.table.renderRows();
      }
    })
    
  }

  displayedColumns: string[] = ['Name', 'Description'];
  clickedRows = new Set<WorkItem>();
  dataSource = workitemData;
}
