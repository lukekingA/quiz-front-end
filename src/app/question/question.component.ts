import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question = '';

  post(question) {
    const sentQuestion = new Question(question);
    this.api.postQuestion(sentQuestion);
    console.log(question);
  }

  constructor(private api: ApiService) {}

  ngOnInit() {}
}
