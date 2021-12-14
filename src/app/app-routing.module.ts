import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { ManageQuestionComponent } from './manage-question/manage-question.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailQuestionComponent } from './detail-question/detail-question.component';

const routes: Routes = [
  { path: 'add-question', component: AddQuestionComponent,canActivate :[LoginGuard]  },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'manage-question', component: ManageQuestionComponent, canActivate :[LoginGuard] },
  { path: 'detail-question/:id', component: DetailQuestionComponent, canActivate:[LoginGuard] },
  { path: 'update-question/:id', component: UpdateQuestionComponent,canActivate :[LoginGuard]  },
  { path: 'login', component: LoginComponent },
  { path: '', component: ExerciseComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
