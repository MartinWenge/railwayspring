import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { WorkItem } from './workitem.model';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class WorkitemsService {


  constructor(private http: HttpClient) {}

  private getListUrl: string = "http://localhost:8080/workitem/getlist?list=4,7,19";

  getListOfWorkItems(): Observable<WorkItem[]> {
    return this.http.get<WorkItem[]>(this.getListUrl, httpOptions)
  }
}
