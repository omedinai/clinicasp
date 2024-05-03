import { RouterModule, Routes } from "@angular/router";
import { ResumencitaComponent } from "./public/resumencita/resumencita.component";
import { HistocitasComponent } from "./public/histocitas/histocitas.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: "resumencita", component: ResumencitaComponent},
    {path: "histocitas", component: HistocitasComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}