import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
<<<<<<< HEAD
import { NewRestaurantComponent } from './pages/new-Restaurant/new-Restaurant.component';
=======
import { NewListComponent } from './pages/new-list/new-list.component';
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
<<<<<<< HEAD
  { path: 'new-list', component: NewRestaurantComponent },
=======
  { path: 'new-list', component: NewListComponent },
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
  { path: 'edit-list/:listId', component: EditListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'lists', component: TaskViewComponent },
  { path: 'lists/:listId', component: TaskViewComponent },
  { path: 'lists/:listId/new-task', component: NewTaskComponent },
  { path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
