import { AfterViewInit, Directive, ElementRef, inject, Input, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealClass = 'reveal';
  @Input() revealDelay = 0;

  private observer!: IntersectionObserver;
  private platformId = inject(PLATFORM_ID);

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.el.nativeElement.classList.add(this.revealClass);
    if (this.revealDelay) {
      this.el.nativeElement.style.transitionDelay = `${this.revealDelay}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('visible');
          this.observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
