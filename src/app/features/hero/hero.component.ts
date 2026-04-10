import { Component, inject, OnInit, OnDestroy, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  data = inject(PortfolioDataService);
  private platformId = inject(PLATFORM_ID);

  // Initial value shown in prerendered HTML / before typing animation starts
  displayedText = signal('Computer Engineering Student');
  private roles = [
    'Computer Engineering Student',
    'Cybersecurity Researcher',
    'Embedded Systems Developer',
    'Angular Developer',
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.displayedText.set('');
      this.type();
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private type(): void {
    const current = this.roles[this.roleIndex];

    if (!this.deleting) {
      this.displayedText.set(current.slice(0, ++this.charIndex));
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.displayedText.set(current.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    this.timer = setTimeout(() => this.type(), this.deleting ? 55 : 80);
  }

  scrollTo(fragment: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
