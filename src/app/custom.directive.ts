import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';


@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  constructor(private tref: TemplateRef<any>, private vref: ViewContainerRef) { }

  @Input() set appCustom(condition) {
    condition ? this.vref.clear : this.vref.createEmbeddedView(this.tref);
  }



}
