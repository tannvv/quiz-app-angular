import { Question } from './../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  REST_API_SERVER = 'http://localhost:3000'
  httpOptions = {
    headers : new HttpHeaders({
      'Content-type' : "application/json"
    })
  }
  constructor(private http:HttpClient) { }

  addQuestion(question : Question):Observable<Question>{
      const url = `${this.REST_API_SERVER}/questions`
      return this.http.post<Question>(url, question,this.httpOptions)
  }
  getQuestions():Observable<Question[]>{
    const url = `${this.REST_API_SERVER}/questions`
    return this.http.get<Question[]>(url,this.httpOptions)
  }
  getQuestion(id : string):Observable<Question>{
    const url = `${this.REST_API_SERVER}/questions/${id}`
    return this.http.get<Question>(url,this.httpOptions)
  }

  updateQuestion(question : Question):Observable<Question>{
    const url = `${this.REST_API_SERVER}/questions/${question.id}`
    return this.http.put<Question>(url,question,this.httpOptions)
  }
  deleteQuestion(question : Question | string){
    const id = typeof question == 'string' ? question : question.id
    const url = `${this.REST_API_SERVER}/questions/${id}`
    return this.http.delete<Question>(url, this.httpOptions)
  }
}
