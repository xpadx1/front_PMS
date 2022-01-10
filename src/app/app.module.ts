import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './todos/to-dos.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TooltipDirective } from './shared/tooltip.directive';
import { MainComponent } from './main/main.component';
import { MiddleTitleComponent } from './middle-title/middle-title.component';
import { BoardComponent } from './board/board.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ErrorUrlComponent } from './error-url/error-url.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardTaskComponent } from './board-task/board-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    ToDoItemComponent,
    EditTodoComponent,
    TooltipDirective,
    MainComponent,
    MiddleTitleComponent,
    BoardComponent,
    LoginPageComponent,
    ErrorUrlComponent,
    RegistrationComponent,
    BoardTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [BoardComponent, LoginPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
