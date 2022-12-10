import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";

  import { cloudService } from "./Cloud";
  
  export class AuthService {
    constructor() {
      this.auth = getAuth(cloudService.app);
      this.user = null;

    }
  
    set user(user){
      this._user = user
    }

    get user(){
      return this._user;
    }

    init(){
        return new Promise((resolve,reject) => {
          onAuthStateChanged(user,this.auth,()=>{
            resolve(user)
          },
          (error) => {
            reject(error)
          }
          )
        })
      }
    

    signUp(email, password) {
      return createUserWithEmailAndPassword(this.auth, email, password);
    }

    signOut(){
      return signOut(this.user)
    }
  }
  
  export const authService = new AuthService()
  