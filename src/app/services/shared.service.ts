import { Injectable, } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class SharedService {

    value$ = new BehaviorSubject<number>(0);

    incrementValue() {
        this.value$.next(this.value$.getValue() + 1);
    }

    resetValue() {
        this.value$.next(0);
    }

    getValue() : Observable<number>{
        return this.value$.asObservable();
    }
}
