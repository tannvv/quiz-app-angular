import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SplitterModule} from 'primeng/splitter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ListboxModule} from 'primeng/listbox';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuItem} from 'primeng/api';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule} from 'primeng/button'
import {HttpClientModule} from '@angular/common/http'
import {ToastModule} from 'primeng/toast';
import { ExerciseComponent } from './exercise/exercise.component';
import {RadioButtonModule} from 'primeng/radiobutton'
import {DialogModule} from 'primeng/dialog';

import {PanelModule} from 'primeng/panel';
import { UpdateQuestionComponent } from './update-question/update-question.component';
import { ManageQuestionComponent } from './manage-question/manage-question.component';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
import { DetailQuestionComponent } from './detail-question/detail-question.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionComponent,
    ExerciseComponent,
    UpdateQuestionComponent,
    ManageQuestionComponent,
    DetailQuestionComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    SlideMenuModule,
    ListboxModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    PanelModule,
    RadioButtonModule,
    FormsModule,
    DialogModule,
    DataViewModule,
    TableModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
