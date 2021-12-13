import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { QuestionService } from './../services/question.service';
import { Question } from './../models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.scss'],
  providers : [MessageService]
})
export class UpdateQuestionComponent implements OnInit {
  formData : FormGroup = {} as FormGroup
  questionSelected : Question = {} as Question
  constructor(private questionService:QuestionService,
      private messageService : MessageService,
      private router : Router,
      private formBuilder : FormBuilder,
      private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.initQuestion()
    this.initForm()
  }

  onUpdateQuestion(formData: FormGroup): void {
    console.log(formData);
    console.log(formData.controls.question.valid)
    let arrAnswer: string[] = [];
    arrAnswer.push(formData.value.answerOne);
    arrAnswer.push(formData.value.answerSecond);
    arrAnswer.push(formData.value.answerThird);
    arrAnswer.push(formData.value.answerFour);
    const newQuestion: Question = {
      id: this.questionSelected.id,
      question: formData.value.question,
      answers: arrAnswer,
      correctAnswer: +formData.value.answerCorrect,
    };
    console.log(newQuestion);
    this.questionService.updateQuestion(newQuestion).subscribe((data) => {
      console.log(data);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Update question success',
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

  initForm(): void {
    console.log(this.questionSelected)
    this.formData = this.formBuilder.group({
      question: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      answerOne: this.formBuilder.control('1', [
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
    setTimeout(() => {
      this.formData.controls["question"].setValue(this.questionSelected.question);
      this.formData.controls["answerOne"].setValue(this.questionSelected.answers[0]);
      this.formData.controls["answerSecond"].setValue(this.questionSelected.answers[1]);
      this.formData.controls["answerThird"].setValue(this.questionSelected.answers[2]);
      this.formData.controls["answerFour"].setValue(this.questionSelected.answers[3]);
      this.formData.controls["answerCorrect"].setValue(this.questionSelected.correctAnswer);
    }, 2000);
  }
  initQuestion():void{
    this.route.paramMap.subscribe(params => {
        const id = params.get('id') as string
        this.questionService.getQuestion(id)
          .subscribe(data => {
            this.questionSelected = data
            console.log('init question',data)
          })
    })
  }
}
