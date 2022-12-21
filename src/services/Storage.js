import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { cloudService } from "./Cloud";

class Storage {
  constructor() {
    this.storage = getStorage(cloudService.app);
  }


  uploadAvatar(file) {
    const photoRef = ref(this.storage, `/avatars/${file.name}`);
    return uploadBytes(photoRef, file);
  }
  
  uploadPhotoOnRoute(file) {
    const photosRef = ref(this.storage, `/photo_on_route/${file.name}`);
    return uploadBytes(photosRef, file);
  }

  uploadRoute(file, id) {
    const Ref = ref(this.storage, `/${id}/${file.name}`);
    return uploadBytes(Ref, file);
  }

  getAllFiles(){
    const photosRef = ref(this.storage, `/photo_on_route`);
    return listAll(photosRef).then((res)=>{
      res.items.forEach((itemRef) => {
        console.log(itemRef);
      })
    })
  }

  getDownloadURL(ref) {
    return getDownloadURL(ref);
  }

}

export const storageService = new Storage();
