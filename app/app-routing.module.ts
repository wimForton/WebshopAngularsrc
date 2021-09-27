import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { ProductpageComponent } from './productpage/productpage.component';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }




// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { CourseContactComponent } from './course-contact/course-contact.component';
// import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
// import { CoursesComponent } from './courses/courses.component';
// import { CourseDetailDeactivateGuard } from './Guards/course-detail-deactivate.guard';
// import { CoursesChildrenActivateGuard } from './Guards/courses-children-activate.guard';
// import { StudentsActivateGuard } from './Guards/students-activate.guard';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { StudentsComponent } from './students/students.component';

const routes: Routes = 
[
  {path:'', redirectTo:'/productpage',pathMatch:'full'},
  {
    path:'productpage', 
    component:ProductpageComponent,
    // canActivate:[
    //   StudentsActivateGuard
    // ],
    // canActivateChild:[
    //   CoursesChildrenActivateGuard
    // ],
    // children:[
    //   {path:'contact', component:CourseContactComponent},
    //   {path:'detail', component:CoursesDetailComponent},
    // ]
  },
  {path:'detailpage/:productCategory/:id', component: DetailpageComponent},
  // {path:'students', component:StudentsComponent, canDeactivate:[CourseDetailDeactivateGuard]},
  // {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingBarrel = [
  ProductpageComponent,
  DetailpageComponent
  // StudentsComponent,
  // CoursesDetailComponent,
  // CourseContactComponent,
  // PageNotFoundComponent
]

// export const guardsBarrel = [
//   StudentsActivateGuard,

// ]