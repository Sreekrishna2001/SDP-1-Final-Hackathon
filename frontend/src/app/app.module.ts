import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
<<<<<<< HEAD
<<<<<<< HEAD
import { NewRestaurantComponent } from './pages/new-Restaurant/new-Restaurant.component';
=======
import { NewListComponent } from './pages/new-list/new-list.component';
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
=======
import { NewListComponent } from './pages/new-list/new-list.component';
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WebReqInterceptor } from './web-req.interceptor';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { StatisticsComponent } from './statistics/statistics.component';
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
=======
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    NewRestaurantComponent,
=======
    NewListComponent,
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
=======
    NewListComponent,
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
    NewTaskComponent,
    LoginPageComponent,
    SignupPageComponent,
    EditListComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    EditTaskComponent,
    StatisticsComponent
=======
    EditTaskComponent
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
=======
    EditTaskComponent
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
