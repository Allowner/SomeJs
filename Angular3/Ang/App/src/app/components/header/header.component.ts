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

  ngOnInit() {
    if (localStorage.length != 0) {
      this.login = localStorage.getItem("login");
    }
  }

  logIn() {
    this.login = "Seva";
    localStorage.setItem("login", "Seva");
    this.onChanged.emit(true);
  }

  logOut() {
    this.login = "";
    localStorage.clear();
    this.onChanged.emit(false);
  }
}
