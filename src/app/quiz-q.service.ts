import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {enableProdMode} from '@angular/core';

enableProdMode();


@Injectable({
  providedIn: 'root'
})
export class QuizQService {
  readonly rootUrl = 'http://localhost:61954';
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;
  constructor(private http: HttpClient) { }
  getQuestions() {
    return this.http.get(this.rootUrl +'/api/Questions');
  
  }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }
  getAnswers() {
    var body = this.qns.map(x => x.QnID);
    return this.http.post(this.rootUrl + '/api/Answers', body);
  }
  

  
  submitScore() {
    var body = JSON.parse(localStorage.getItem('participant'));
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    return this.http.post(this.rootUrl + "/api/UpdateOutput", body);
  }


}
  