import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private dbName = 'aiImageLibrary';

  async saveImage(image: any) {
    const db = await this.openDB();
    const tx = db.transaction('images', 'readwrite');
    tx.objectStore('images').add(image);
  }

  async getImages(): Promise<any[]> {
    const db = await this.openDB();
    const tx = db.transaction('images', 'readonly');
    const store = tx.objectStore('images');
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  private openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = () => {
        request.result.createObjectStore('images', { keyPath: 'id' });
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject();
    });
  }
}