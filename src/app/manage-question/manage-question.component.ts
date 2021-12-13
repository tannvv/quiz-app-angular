import { QuestionService } from './../services/question.service';
import { Question } from './../models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-manage-question',
  templateUrl: './manage-question.component.html',
  styleUrls: ['./manage-question.component.scss'],
  providers : [MessageService,ConfirmationService]
})
export class ManageQuestionComponent implements OnInit {
  questions: Question[] = [];
  isDisplayDetail = false;
  questionSelected: Question = {} as Question;
  constructor(
    private questionService: QuestionService,
    private router: Router,
    private confirmationService : ConfirmationService,
    private messageService : MessageService
  ) {}

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((data) => {
      this.questions = data;
      console.log(data);
    });
  }

  onViewDetail(id: any): void {
    this.questionService.getQuestion(id).subscribe((data) => {
      this.questionSelected = data;
      this.isDisplayDetail = true;
    });
  }
  onEdit(id: any): void {
    console.log('Detail view', id);
    this.router.navigate(['update-question/'+id])
  }
  onDelete(question: Question): void {
    this.confirmationService.confirm({
      message : "Are you sure to delete this question ?",
      accept : () => {
        this.questionService
        .deleteQuestion(question)
        .subscribe((data) => {
          console.log('delete arr')
          const index = this.questions.findIndex((ques) => ques.id == question.id);
          this.questions.splice(index, 1);
        });
      }
    })
  }
  openFormCreate(){
    this.router.navigate(['add-question'])
  }
}
