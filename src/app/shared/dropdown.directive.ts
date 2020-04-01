import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener("document:click", ['$event']) openDrowndown(event: Event) {
    let part = this.element.nativeElement.querySelector('.dropdown-menu');
    if (part.classList.contains("show") || (this.element.nativeElement.contains(event.target) === false)) {
      this.renderer.removeClass(part, "show")
    } else {
      this.renderer.addClass(part, "show")
    }
  }
}
