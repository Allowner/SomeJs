/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { EditComponent } from "./edit.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";

describe("EditComponent", () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [EditComponent, HeaderComponent, FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should submit", async () => {
    spyOn(component, "navigateToMain");

    component.onSubmit();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.navigateToMain).toHaveBeenCalled();
    });
  });

  it("should submit else", async () => {
    spyOn(component, "navigateToMain");

    component.existed = false;
    component.onSubmit();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.navigateToMain).toHaveBeenCalled();
    });
  });
});
