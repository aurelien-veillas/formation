import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, concatMap, delay, distinctUntilChanged, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private httpClient: HttpClient) { }

  public getList(): Observable<any> {
    return this.httpClient.get('http://localhost:8100/getList').pipe(
      map((res:any) => res.data),
      concatMap(tache => tache),
      distinctUntilChanged((tache1: any, tache2: any) => tache1.title == tache2.title ),
      catchError( (error) => {
          console.log(error);
          return of([]);
      }
    ));
  }

  public addTache(tache: any):Observable<any> {
    return this.httpClient.post('http://localhost:8100/add', tache).pipe(
      tap(x => console.log("ajout effectué")),
      delay(5000)
    );
  }
}
