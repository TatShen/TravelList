import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { cloudService } from "./Cloud";

class Storage {
  constructor() {
    this.storage = getStorage(cloudService.app);
  }


  uploadPhoto(file) {
    const photoRef = ref(this.storage, `/photos/${file.name}`);
    return uploadBytes(photoRef, file);
  }

  getDownloadURL(ref) {
    return getDownloadURL(ref);
  }

}

export const storageService = new Storage();
