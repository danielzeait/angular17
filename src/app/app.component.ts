import { Component, EnvironmentInjector, OnInit, inject, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import HomeComponent from './dashboard/pages/home/home.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { SharedService } from './services/shared.service';
import { Subscription } from 'rxjs';
import { LoaderDialogComponent } from '@shared/loader-dialog/loader-dialog.component';
import { LoaderService } from './services/loader.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, LoaderDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'my-dashboard-ng-17';
  loaderService: LoaderService = inject(LoaderService);
  public showLoader: boolean = false;
  constructor(){

  }
  
  ngOnInit(): void {
    this.loaderService.displayLoader.subscribe((value) => {
      this.showLoader = value;
    })
  }

}
