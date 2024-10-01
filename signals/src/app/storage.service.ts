import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  save(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data))
  }
  load(key: string): Todo[] | null {
    const data = localStorage.getItem(key)
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.log(error)
        return []
      }
    }
    return null
  }
}
