import { Component, OnInit } from "@angular/core";
import { NewsModel } from "app/model/newsModel";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  sources = [
    "Youtube.com",
    "CNN",
    "ABC News",
    "The Verge",
    "CNBC",
    "Ghacks.net",
    "Theguardian.com",
    "Reuters",
    "The Next Web",
    "Fox News",
    "The Washington Post",
    "Yahoo.com",
    "Investing.com",
    "NFL News"
  ];
  articles = [];
  constructor() {}

  ngOnInit() {}

  addItems(newItems: NewsModel[]) {
    this.articles = this.articles.concat(newItems);
    console.log(this.articles);
  }
}
