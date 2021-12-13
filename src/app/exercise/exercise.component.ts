import { QuestionService } from './../services/question.service';
import { Question } from './../models';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
  providers: [MessageService],
})
export class ExerciseComponent implements OnInit {
  questions: Question[] = [];
  isCollapsed: boolean = true;
  answerSelected: number[] = [];
  isDisplayResult = false;
  markOfTest: number = 0;
  constructor(
    private messageService: MessageService,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.initQuestions();
  }
  initQuestions() {
    this.questionService.getQuestions().subscribe((data) => {
      this.questions = data;
      console.log(data);
    });
  }
  submitAnswer() {
    console.log(this.answerSelected);
    let answerSuccess = 0;
    for (let index = 0; index < this.questions.length; index++) {
      if (this.questions[index].correctAnswer == this.answerSelected[index]) {
        answerSuccess++;
      }
    }
    this.markOfTest = answerSuccess / this.questions.length
    console.log(this.markOfTest)
    this.isDisplayResult = true
  }
}
