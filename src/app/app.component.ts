import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import HomeComponent from './dashboard/pages/home/home.component';
import { LoaderDialogComponent } from '@shared/loader-dialog/loader-dialog.component';
import { LoaderService } from './services/loader.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, LoaderDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit, AfterContentChecked{
  title = 'my-dashboard-ng-17';
  loaderService: LoaderService = inject(LoaderService);
  changeDetector = inject(ChangeDetectorRef);
  public showLoader:boolean = false;
  
  ngOnInit(): void {
    this.loaderService.displayLoader.subscribe((value) => {
      this.showLoader = value;
    })
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
