import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "travelist-dbfdd.firebaseapp.com",
      projectId: "travelist-dbfdd",
      storageBucket: "travelist-dbfdd.appspot.com",
      messagingSenderId: "33511167498",
      appId: process.env.API_ID,
      measurementId: "G-NHQ7M82WJ1"
    };
    this.app = initializeApp(this.config);
  }
}
export const cloudService = new CloudService();
