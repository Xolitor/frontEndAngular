import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from  '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AssignmentsComponent } from './assignement/assignement.component';
import { RenduDirective } from './shared/rendu.directive';
import { AssignmentDetailComponent } from './assignement/assignment-detail/AssignmentDetailComponent';
import { AddAssignmentComponent } from './assignement/add-assignment/add-assignment.component';
import { AssignmentsService } from './shared/assignments.service';
import { EditAssignmentComponent } from './assignement/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormLoginComponent } from './assignement/form-login/form-login.component';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {path: '', component:AssignmentsComponent},
  {path: 'home', component:AssignmentsComponent},
  {path: 'add', component:AddAssignmentComponent},
  {path: 'assignment/:id', component:AssignmentDetailComponent},
  {path: 'assignment/:id/edit', component:EditAssignmentComponent,
  canActivate: [authGuard]},
  {path: 'login', component:FormLoginComponent},
]
@NgModule({

  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    MatSlideToggleModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [AssignmentsService],
  bootstrap: [AppComponent]
})


export class AppModule { }
