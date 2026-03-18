import { Component, inject, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  data = inject(PortfolioDataService);
  expanded = signal<number | null>(null);

  toggle(index: number): void {
    this.expanded.update(v => v === index ? null : index);
  }
}
