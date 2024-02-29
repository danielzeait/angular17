import { HttpInterceptorFn } from "@angular/common/http";
import { delay, finalize } from "rxjs/operators";
import { LoaderService } from "../services/loader.service";
import { inject } from "@angular/core";


export const LoaderInterceptor: HttpInterceptorFn = (req, next) => {
    const loaderService: LoaderService = inject(LoaderService);
    let totalRequests = 0;
    totalRequests++;
    loaderService.showLoader();
    return next(req).pipe(
        delay(1000),
        finalize(() => {
            totalRequests--;
            if (totalRequests == 0) {
                loaderService.hideLoader();
            }
        })
    );
}