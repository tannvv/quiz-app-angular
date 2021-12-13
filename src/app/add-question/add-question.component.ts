import { Question } from './../models';
import { QuestionService } from './../services/question.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss'],
  providers: [MessageService]
})
export class AddQuestionComponent implements OnInit {
  formData: any;
  questions: Question[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
    private messageService:MessageService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initQuestions;
  }

  initForm(): void {
    this.formData = this.formBuilder.group({
      question: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      answerOne: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      answerSecond: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      answerThird: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      answerFour: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      answerCorrect: this.formBuilder.control('', [
        Validators.required,
        Validators.min(1),
        Validators.max(4),
      ]),
    });
  }

  onCreateQuestion(formData: FormGroup): void {
    console.log(formData);
    console.log(formData.controls.question.valid)
    let arrAnswer: string[] = [];
    arrAnswer.push(formData.value.answerOne);
    arrAnswer.push(formData.value.answerSecond);
    arrAnswer.push(formData.value.answerThird);
    arrAnswer.push(formData.value.answerFour);
    const newQuestion: Question = {
      id: undefined,
      question: formData.value.question,
      answers: arrAnswer,
      correctAnswer: +formData.value.answerCorrect,
    };
    console.log(newQuestion);
    this.questionService.addQuestion(newQuestion).subscribe((data) => {
      console.log(data);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Add new question success',
      });
    });
  }
  onCancelQuestion() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: 'Cancel add new question',
    });
    this.router.navigate(['manage-question'])

  }

  validFormData(): boolean {
    return this.formData.valid;
  }

  initQuestions() {
    this.questionService.getQuestions().subscribe((data) => {
      this.questions = data;
    });
  }
}
