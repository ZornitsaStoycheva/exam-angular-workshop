import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

type voidArr = () => void;

@Directive({
  selector: '[appHighlightBooksList]'
})
export class HighlightBooksListDirective implements OnInit, OnDestroy{
  unsubFromEventArr :voidArr[] = [];

  constructor(private elRef: ElementRef, private render: Renderer2) { }
  
  ngOnInit(): void {
    const mouseEnterHandler = this.render.listen(this.elRef.nativeElement, 'mouseenter', this.mouseEnterHangler.bind(this));

    const mouseLeaveHandler = this.render.listen(this.elRef.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this));

    this.unsubFromEventArr.push(mouseEnterHandler);
    this.unsubFromEventArr.push(mouseLeaveHandler);
  }

  mouseEnterHangler(e: MouseEvent): void {
    this.render.addClass(this.elRef.nativeElement, 'highlight-books-list');
  }

  mouseLeaveHandler(e: MouseEvent): void {
    this.render.removeClass(this.elRef.nativeElement, 'highlight-books-list');
  }

  ngOnDestroy(): void {
    this.unsubFromEventArr.forEach((eventFn) => eventFn());
  }
}
