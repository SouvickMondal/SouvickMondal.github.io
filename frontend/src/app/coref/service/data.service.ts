import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

    private BASE_URL: String = "http://b20849a1.ngrok.io";
    constructor(private _route: Router, private _http: HttpClient) { }

    downvote(id: any) {
        return this._http.get(`${this.BASE_URL}/api/downvote/${id}`);
    }
    upvote(id: any) {
        return this._http.get(`${this.BASE_URL}/api/upvote/${id}`);
    }
    postComment(commentBoxData: String) {
        return this._http.post(`${this.BASE_URL}/api/postComment`, {text: commentBoxData});
    }
    fetchComments(): any {
        return this._http.get(`${this.BASE_URL}/api/fetchComments`);
    }
}