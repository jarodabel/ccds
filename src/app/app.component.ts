import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyALFUjcDkp21gBhP4IyT2gkD347JRritw8',
      authDomain: 'cc-diapers.firebaseapp.com',
      projectId: 'cc-diapers',
      storageBucket: 'cc-diapers.appspot.com',
      messagingSenderId: '805424601952',
      appId: '1:805424601952:web:e79dfa1327dd934745dc05',
      measurementId: 'G-FE41QSBGQT',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    this.userService.googleProvider();
  }
}
