import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { cloudService } from "./Cloud";

class Storage {
  constructor() {
    this.storage = getStorage(cloudService.app);
  }


  uploadAvatar(file) {
    const avatarRef = ref(this.storage, `/avatars/${file.name}`);
    return uploadBytes(avatarRef, file);
  }

  getDownloadURL(ref) {
    return getDownloadURL(ref);
  }

}

export const storageService = new Storage();
