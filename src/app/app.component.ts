import { Component, EnvironmentInjector, OnInit, inject, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import HomeComponent from './dashboard/pages/home/home.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { SharedService } from './services/shared.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'my-dashboard-ng-17';
  result:any;
  constructor(){

  }
  
  ngOnInit(): void {}

}
