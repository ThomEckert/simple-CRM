import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
        apiKey: 'AIzaSyDRkjaz4nwtuZZfJRxqP_iREsjC3vQduVs',
        authDomain: 'simple-crm-8aee5.firebaseapp.com',
        projectId: 'simple-crm-8aee5',
        storageBucket: 'simple-crm-8aee5.appspot.com',
        messagingSenderId: '38932207217',
        appId: '1:38932207217:web:a4b79c9512b8a937ba2dd0',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
