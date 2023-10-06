import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appDateInput]',
  })

export class DateInputDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log("S:" + this.el.nativeElement.selectionStart
      + " E:" + this.el.nativeElement.selectionEnd
    );
  }

  @HostListener('selectstart', ['$event'])
  onSelectStart(event: KeyboardEvent): void {
    //event.preventDefault();
    console.log("onSelectStart called");
    console.log("S:" + this.el.nativeElement.selectionStart
      + " E:" + this.el.nativeElement.selectionEnd
    );
  }
  @HostListener('select', ['$event'])
  onSelect(event: KeyboardEvent): void {
    //event.preventDefault();
    console.log("onSelect called");
    console.log("S:" + this.el.nativeElement.selectionStart
      + " E:" + this.el.nativeElement.selectionEnd
    );
  }
  @HostListener('selectionchange', ['$event'])
  onSelectionChange(event: KeyboardEvent): void {
    //event.preventDefault();
    console.log("onSelectionChange called");
    console.log("S:" + this.el.nativeElement.selectionStart
      + " E:" + this.el.nativeElement.selectionEnd
    );
  }
}
