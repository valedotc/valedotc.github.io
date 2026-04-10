import { Component, HostListener, inject, OnInit, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  data = inject(PortfolioDataService);
  private platformId = inject(PLATFORM_ID);

  scrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('');

  private sections: string[] = [];

  ngOnInit(): void {
    this.sections = this.data.navItems.map(n => n.fragment);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 50);
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    for (const id of [...this.sections].reverse()) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        this.activeSection.set(id);
        return;
      }
    }
    this.activeSection.set('');
  }

  scrollTo(fragment: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.menuOpen.set(false);
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }
}
