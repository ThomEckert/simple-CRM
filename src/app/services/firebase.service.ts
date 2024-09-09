import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
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
    // console.log(this.getUser());
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

  // public async getUser(): Promise<any> {
  //   try {
  //     const querySnapshot = await getDocs(collection(this.firestore, 'users'));
  //     const users: any[] = [];
  //     querySnapshot.forEach((doc) => {
  //       users.push(doc.data());
  //     });
  //     // console.log('users:',users);
  //   } catch (error) {
  //     console.error('Error fetching user:', error);
  //     throw error;
  //   }
  // }

  public async getUser(): Promise<any[]> {  // Rückgabetyp ist jetzt ein Array von Usern
    try {
      const querySnapshot = await getDocs(collection(this.firestore, 'users'));
      const users: any[] = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data()); // Daten des Dokuments hinzufügen
      });
      return users; // Hier die Benutzer zurückgeben
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Fehler werfen, damit er in der Komponente behandelt werden kann
    }
  }
}
