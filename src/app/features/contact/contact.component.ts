import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  data = inject(PortfolioDataService);

  form = { name: '', email: '', message: '' };
  submitted = signal(false);

  submit(): void {
    const subject = encodeURIComponent(`Portfolio contact from ${this.form.name}`);
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\n\n${this.form.message}`
    );
    window.location.href = `mailto:${this.data.email}?subject=${subject}&body=${body}`;
    this.submitted.set(true);
    this.form = { name: '', email: '', message: '' };
    setTimeout(() => this.submitted.set(false), 4000);
  }
}
