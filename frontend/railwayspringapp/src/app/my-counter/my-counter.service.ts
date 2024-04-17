import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";

export interface simpleNumber {
    counter: number;
}

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({providedIn: 'root'})
export class MyCounterService{
    constructor(private http: HttpClient){}

    private addOneUrl: string = "http://localhost:8080/addone";

    backendAddOne(currentValue: simpleNumber): Observable<number> {
        console.log("hello from service: ", currentValue);
        return this.http.post<simpleNumber>(this.addOneUrl, currentValue, httpOptions)
        .pipe(
            map( response => { return (response as any).count}),
            catchError( error => { return throwError(() => new Error("Bad request in MyCounterService - backendAddOne: ", error))})
        )
    }
}

