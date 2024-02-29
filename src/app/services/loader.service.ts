import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    @Output() displayLoader: EventEmitter<boolean> = new EventEmitter<boolean>();

    showLoader() {
        this.displayLoader.emit(true);
    }

    hideLoader() {
        this.displayLoader.emit(false);
    }

}