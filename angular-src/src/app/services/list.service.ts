import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {List} from "../models/List";
import {map, tap, catchError} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class ListService {

    constructor(private http: HttpClient) {
    }

    private serverApi = 'http://localhost:3000';

    getAllLists(): Observable<List[]> {
        let URI = `${this.serverApi}/bucketlist/`;
        return this.http.get<List[]>(URI)
            .pipe(
                map(res => <List[]>res.lists)
            );
    }

    addList(list: List) {
        let URI = `${this.serverApi}/bucketlist/`;
        let body = JSON.stringify({title: list.title, description: list.description, category: list.category});
        console.log(body);

        return this.http.post(URI, body, httpOptions);
    }

    deleteList(listId: string): Observable<List> {
        let URI = `${this.serverApi}/bucketlist/${listId}`;
        let headers = new HttpHeaders();

        return this.http.delete<List>(URI, httpOptions);
    }


    private log(message: string) {
        console.log(message);
    }
}
