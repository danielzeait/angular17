import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector:'user-list',
  standalone: true,
  imports: [CommonModule,TitleComponent],
  providers:[UserService],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export default class UsersComponent {
  private userService = inject(UserService);
  users: any = [];
  
  constructor() { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

}
