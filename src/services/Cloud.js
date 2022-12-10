import {initializeApp} from "firebase/app"

export class CloudService {
    constructor(){
        this.config = {
            apiKey: process.env.API_KEY,
            authDomain: "online-cinema-b26aa.firebaseapp.com",
            projectId: "online-cinema-b26aa",
            storageBucket: "online-cinema-b26aa.appspot.com",
            messagingSenderId: "988789619794",
            appId: process.env.API_ID,
            measurementId: "G-NZ1HXKG698"
        }
        this.app = initializeApp(this.config)
    }
} 
export const cloudService = new CloudService()