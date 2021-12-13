import { Question } from './../models';
import { QuestionService } from './../services/question.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.scss']
})
export class DetailQuestionComponent implements OnInit {
  id : number = 0
  questionSelected : Question = {} as Question
  constructor(private questionService : QuestionService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : Params)=>{
      this.id = +params.get('id')
      console.log(this.id)
    })
    this.questionService.getQuestion(this.id+'')
          .subscribe(data => {
            this.questionSelected = data
          })
  }

}
