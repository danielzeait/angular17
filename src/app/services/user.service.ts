import { EventEmitter, Injectable, Output, signal } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";
import { BehaviorSubject, Observable, Subject, concatWith } from "rxjs";

interface User {
    id:number;
    title:string;
    completed:boolean;
  }

@Injectable({
    providedIn:'root',
})
export class UserService {
    newSignal = signal(0);
    @Output() updated = new EventEmitter<number>();
    public value$:BehaviorSubject<number> = new BehaviorSubject<number>(0);
	options: any;
	token: any;
	requestHeaders: any;
    constructor(private http: HttpClient) {}
    
    public getRequestHeaders() {
        this.requestHeaders = new HttpHeaders().set('Accept', 'application/json')
        this.requestHeaders = new HttpHeaders().set('Content-Type', 'application/json')
        this.options = {
            headers: this.requestHeaders
        }
        return this.options;
    }

    public getAllUsers(): Observable<any> {
        let url = `${environment.api_url}/users`;
        return this.http.get<any>(url,this.getRequestHeaders()).pipe();
    }

    getTodos(): Observable<User>{
        const obs1 = this.http.get<User>('http://jsonplaceholder.typicode.com/todos/1');
        const obs2 = this.http.get<User>('http://jsonplaceholder.typicode.com/todos/2');
        return obs1.pipe(
          concatWith(obs2) 
        );
    }

    addNotification(value:number){ 
        this.value$.next(value);
        this.updated.emit(value);
        this.newSignal.update(() => value);
    }

    getNotification() : Observable<number>{
        return this.value$.asObservable();
    }
}
