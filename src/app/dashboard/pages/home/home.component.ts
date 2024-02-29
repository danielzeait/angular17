import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { Observable, withLatestFrom,} from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../../../services/shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule,TitleComponent,ReactiveFormsModule],
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit { 

  private shared = inject(SharedService);
  private fb = inject(FormBuilder);
  profileForm!: FormGroup;
  combinedValue$!: Observable<[string, string]> | undefined;

  constructor() {}
  ngOnInit(): void {
  }

  private initFormChanges(): void {
    this.combinedValue$ = this.profileForm.get('lastName')?.valueChanges
      .pipe(
        withLatestFrom(this.profileForm.get('firstName')?.valueChanges as Observable<string>)
      )
  }

  private initForm() {
    this.profileForm = this.fb.group({
      firstName: ['', { nonNullable: true }],
      lastName: ['', { nonNullable: true }],
    });
  }

  incrementValue(){
    this.shared.incrementValue()
  }

  resetValue(){
    this.shared.resetValue();
  }

  

}
