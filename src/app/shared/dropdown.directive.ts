// import { Directive, HostListener, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {

//   constructor(private elementRef: ElementRef) { }

//   @HostListener('click') toggleOpen(eventData: Event) {
//     this.elementRef.nativeElement.classList.toggle('open');
//   }

// }


import { Directive, HostListener, ElementRef  , HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

}
