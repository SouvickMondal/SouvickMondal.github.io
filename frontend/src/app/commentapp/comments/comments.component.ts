import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/coref/service/data.service';
import { AuthService } from 'src/app/coref/service/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comments = [];
  commentBoxData: String;
  constructor(private _dataService: DataService,private _authService: AuthService) { }

  ngOnInit() {
    this.loadDashboard();
  }
  loadDashboard() {
    this._dataService.fetchComments().subscribe(res => {
      this.comments = res["comments"];
    });
  }

  postComment() {
    
    this._dataService.postComment(this.commentBoxData).subscribe(res => {
    }, err => {
      console.log(err);
    }, () => {
      this.loadDashboard();
    });

  }
  upvote(id) {
    this._dataService.upvote(id).subscribe(res => {
    }, err => {
      console.log(err);
    }, () => {
      this.loadDashboard();
    });;
  }
  downvote(id) {
    this._dataService.downvote(id).subscribe(res => {
    }, err => {
      console.log(err);
    }, () => {
      this.loadDashboard();
    });;
  }
  myId(){
    return this._authService.gettoken();
  }
}
