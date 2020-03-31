import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener("click") openDrowndown(event: Event){
      let part = this.element.nativeElement.querySelector('.dropdown-menu');
    if (part.classList.contains("show")) {

      this.renderer.removeClass(part, "show")
    } else {
      this.renderer.addClass(part, "show")
    }

  }



}
