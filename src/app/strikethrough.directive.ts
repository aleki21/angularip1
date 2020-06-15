import { Directive, ElementRef, Input , HostListener } from '@angular/core';
import { Quotes } from './quotes'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quote:Quotes;

}