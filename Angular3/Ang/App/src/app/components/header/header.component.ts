import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  login = "";
  @Output() onChanged = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  logIn() {
    this.login = "Seva";
    this.onChanged.emit(true);
  }

  logOut() {
    this.login = "";
    this.onChanged.emit(false);
  }
}
