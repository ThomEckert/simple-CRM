import { Component } from '@angular/core';
import {
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../../models/user.class';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogClose,
    MatDialogModule
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss',
})
export class DialogEditAddressComponent {
  loading: boolean = false;
  user!: User;

  constructor(
    public dialogRef: MatDialogRef<DialogEditAddressComponent>,
    public firebase: FirebaseService
  ) {}

  public async updateAddress(): Promise<void> {
    // this.loading = true;
    // try {
    //   let userJson = this.user.toJSON();
    //   await this.firebase.addNewUser(userJson);
    // } catch (error) {
    //   console.error('Error adding user:', error);
    // } finally {
    //   this.loading = false;
    // }
  }
}
