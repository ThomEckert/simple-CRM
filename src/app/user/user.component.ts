import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { FirebaseService } from '../services/firebase.service';
import { onSnapshot } from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule, RouterLink, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {

  users: any[] = [];
  isLoading: boolean = false;

  constructor(public dialog: MatDialog, public firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.loadUsers();      
  }

  openAddUserDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  async loadUsers() {
    this.isLoading = true;
    try {
      this.users = await this.firebaseService.getUser();
      console.log('Users:', this.users);      
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
