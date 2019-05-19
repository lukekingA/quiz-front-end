import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postQuestion(question: Question) {
    this.http
      .post('https://localhost:44380/api/Question', question)
      .subscribe(res => {
        console.log(res);
      });
  }

  constructor(private http: HttpClient) {}
}
