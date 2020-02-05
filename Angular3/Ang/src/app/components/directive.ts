import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[direct]"
})
export class MyDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
