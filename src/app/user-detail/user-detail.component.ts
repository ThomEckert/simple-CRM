import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent implements OnInit {
  userID = '';
  userDetail: any = [];
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public firebaseService: FirebaseService
  ) {}

  async ngOnInit(): Promise<void> {
    this.userID = this.route.snapshot.paramMap.get('id') || '';
    console.log('User ID:', this.userID);
    await this.loadUserData();
  }

  async loadUserData() {
    if (!this.userID) {
      console.error('No user ID provided');
      return;
    }
    this.isLoading = true;
    try {
      this.userDetail = await this.firebaseService.getUserById(this.userID);
      console.log('User:', this.userDetail);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      this.isLoading = false;
    }
  }

  openAddressDialog() {
    console.log('Open address dialog');
  }
}
