import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(){
    return axios.get('http://localhost:3000/posts');
  }
}
