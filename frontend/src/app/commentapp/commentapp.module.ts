import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CommentappModule { }
