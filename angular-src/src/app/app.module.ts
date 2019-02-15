import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AddListComponent} from './add-list/add-list.component';
import {ViewListComponent} from './view-list/view-list.component';
import {ListService} from "./services/list.service";

@NgModule({
    declarations: [
        AppComponent,

        AddListComponent,
        ViewListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [ListService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
