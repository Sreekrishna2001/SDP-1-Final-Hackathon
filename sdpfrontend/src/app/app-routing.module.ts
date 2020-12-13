import { AdminPageComponent } from './admin-page/admin-page.component';
import { AboutusComponent } from "./aboutus/aboutus.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { ReviewComponent } from "./review/review.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TaskViewComponent } from "./pages/task-view/task-view.component";
import { NewRestaurantComponent } from "./pages/new-Restaurant/new-Restaurant.component";
import { NewTaskComponent } from "./pages/new-task/new-task.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { SignupPageComponent } from "./pages/signup-page/signup-page.component";
import { EditListComponent } from "./pages/edit-list/edit-list.component";
// import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { HomeComponent } from "./home/home.component";
import { ViewdetailsComponent } from "./viewdetails/viewdetails.component";
import { BookingComponent } from "./booking/booking.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "home", component: HomeComponent },
  { path: "review", component: ReviewComponent },
  { path: "viewdetails/:name", component: ViewdetailsComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "new-list", component: NewRestaurantComponent },
  { path: "edit-list/:listId", component: EditListComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "statistics", component: StatisticsComponent },
  { path: "lists", component: TaskViewComponent },
  { path: "lists/:listId", component: TaskViewComponent },
  { path: "lists/:listId/new-task", component: NewTaskComponent },
  { path: "booking", component: BookingComponent },
  {path:"admin", component:AdminPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
