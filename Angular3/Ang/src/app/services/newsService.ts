import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { News } from "../model/newsModel";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  private url = "http://localhost:3000/news";

  constructor(private http: HttpClient) {}

  getNews(source: string, num: number): Observable<Array<News>> {
    return this.http.get<Array<News>>(this.url + `/${source}/skip/${num}`);
  }

  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(this.url + `/${id}`);
  }

  addNews(news: News): Observable<News> {
    console.log(news);
    return this.http.post<News>(`${this.url}`, news);
  }

  updateNews(news: News): Observable<News> {
    return this.http.put<News>(`${this.url}/${news.id}`, news);
  }

  deleteNews(id: number): Observable<News> {
    return this.http.delete<News>(`${this.url}/${id}`);
  }
}
