import { Component, OnInit } from "@angular/core";
import { News } from "src/app/model/newsModel";
import { NewsService } from "src/app/services/newsService";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  model;
  public idControl: FormControl = new FormControl("");
  public sourceControl: FormControl = new FormControl("");
  public titleControl: FormControl = new FormControl("", [Validators.required]);
  public descriptionControl: FormControl = new FormControl("", [
    Validators.required
  ]);
  public contentControl: FormControl = new FormControl("", [
    Validators.required
  ]);
  public urlToImageControl: FormControl = new FormControl("", [
    Validators.required
  ]);
  public publishedAtControl: FormControl = new FormControl("", [
    Validators.required
  ]);
  public authorControl: FormControl = new FormControl("", [
    Validators.required
  ]);
  public urlControl: FormControl = new FormControl("", [Validators.required]);
  public userFormGroup: FormGroup = new FormGroup({
    id: this.idControl,
    source: this.sourceControl,
    title: this.titleControl,
    description: this.descriptionControl,
    content: this.contentControl,
    urlToImage: this.urlToImageControl,
    publishedAt: this.publishedAtControl,
    author: this.authorControl,
    url: this.urlControl
  });

  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    if (!this.router.url.includes("create")) {
      this.existed = true;
      this.route.params.subscribe(p => {
        this.newsService.getNewsById(p["id"]).subscribe(item => {
          this.idControl.setValue(item.id);
          this.sourceControl.setValue(item.source);
          this.titleControl.setValue(item.title);
          this.descriptionControl.setValue(item.description);
          this.contentControl.setValue(item.content);
          this.urlToImageControl.setValue(item.urlToImage);
          this.publishedAtControl.setValue(item.publishedAt);
          this.authorControl.setValue(item.author);
          this.urlControl.setValue(item.url);
        });
      });
    } else {
      this.existed = false;
      this.idControl.setValue(0);
      this.sourceControl.setValue({ id: null, name: "me" });
    }
  }

  onSubmit() {
    if (this.existed) {
      this.newsService
        .updateNews(this.userFormGroup.value)
        .subscribe(c => this.navigateToMain());
    } else {
      alert(JSON.stringify(this.userFormGroup.value));
      console.log(JSON.stringify(this.userFormGroup.value));
      this.newsService
        .addNews(this.userFormGroup.value)
        .subscribe(c => this.navigateToMain());
    }
  }

  onDelete() {
    this.newsService.deleteNews(this.model.id);
  }

  navigateToMain() {
    this.router.navigate([""]);
  }
}
