import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate: Date | null = null;
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    public firebase: FirebaseService,
  ) {}

  public async saveNewUser(): Promise<void> {
    this.loading = true;
    try {
      if (this.birthDate) {
        this.user.birthDate = this.birthDate.getTime();
      } else {
        throw new Error("No birth date provided.");
      }
      // this.user.birthDate = this.birthDate.getTime();
      let userJson = this.user.toJSON();
      await this.firebase.addNewUser(userJson);
    } catch (error) {
      console.error('Error adding user:', error);
    } finally {
      this.loading = false;
      this.dialogRef.close();
    }
  }
}
