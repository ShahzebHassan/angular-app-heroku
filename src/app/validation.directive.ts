import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValidation]'
})
export class ValidationDirective {

  @Input()
  public min!: number;

  @Input()
  public max!: number;

  constructor(private ref: ElementRef) { }
  @HostListener("input", ["$event"])
  public onInput(e: InputEvent): void {
    console.log(e);
    let val = parseInt(this.ref.nativeElement.value);
    if (val >= this.max)
      this.ref.nativeElement.value = this.max.toString();
    else if (val <= this.min)
      this.ref.nativeElement.value = this.min.toString();
  }
}

