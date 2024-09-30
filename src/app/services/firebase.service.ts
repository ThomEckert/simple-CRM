import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  getDoc,
  getDocs,
} from '@angular/fire/firestore';
import { doc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})

export class FirebaseService {
  constructor(private firestore: Firestore) {
    this.getUser();
  }

  public async addNewUser(userJson: any): Promise<void> {
    try {
      const userDocRef = doc(collection(this.firestore, 'users'));
      userJson.userId = userDocRef.id;
      await setDoc(userDocRef, userJson);
      await this.getUser();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  public async getUser(): Promise<any[]> {
    try {
      const querySnapshot = await getDocs(collection(this.firestore, 'users'));
      const users: any[] = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  public async getUserById(userId: string): Promise<any> {
    try {
      const userDocRef = doc(this.firestore, `users/${userId}`);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      throw error;
    }
  }
}
