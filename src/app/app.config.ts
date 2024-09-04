import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "web-pokemon-8e11c",
        appId: "1:877383656899:web:1be1a9c4a43ee183298976",
        databaseURL: "https://web-pokemon-8e11c-default-rtdb.firebaseio.com",
        storageBucket: "web-pokemon-8e11c.appspot.com",
        apiKey: "AIzaSyCdGa3mqnez8z4AZpBW2AD1-b8tWL3wlBo",
        authDomain: "web-pokemon-8e11c.firebaseapp.com",
        messagingSenderId: "877383656899",
        measurementId: "G-YFGMJTKN3C"
      })
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ]
};
