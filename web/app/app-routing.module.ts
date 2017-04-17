import {Routes, RouterModule} from "@angular/router";
import {FileNotFoundComponent} from "./filenotfound/file-not-found-component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [

  {path: '**', component: FileNotFoundComponent}


];

@NgModule({
   imports: [
   RouterModule.forRoot(appRoutes)
   ],
   exports: [
   RouterModule
   ]
})
export class AppRoutingModule {

}
