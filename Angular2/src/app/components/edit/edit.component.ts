import { Component, OnInit } from "@angular/core";
import { NewsModel } from "app/model/newsModel";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  lastId = 30;
  model = new NewsModel(
    0,
    true,
    { id: null, name: "me" },
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
  constructor() {}

  ngOnInit() {}
}
