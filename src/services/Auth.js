import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
  } from "firebase/auth";

  import { cloudService } from "./Cloud";
  
  export class AuthService {
    constructor() {
      this.auth = getAuth(cloudService.app);
      this._user = null;
      this.provider = new GoogleAuthProvider()
    }
  
    set user(user) {
      this._user = user;
    }
  
    get user() {
      return this._user;
    }
  
    init() {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(
          this.auth,
          (user) => {
            resolve(user);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }
  
    signUp(email, password) {
      return createUserWithEmailAndPassword(this.auth, email, password);
    }
  
    signOut() {
      return signOut(this.auth);
    }
  
    signIn(email, password) {
      return signInWithEmailAndPassword(this.auth, email, password);
    }

    signInWithGoogle(){
      return signInWithPopup(this.auth, this.provider)
    }
  }
  
  export const authService = new AuthService();
  