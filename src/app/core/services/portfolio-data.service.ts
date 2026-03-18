import { Injectable } from '@angular/core';
import {
  Education,
  Experience,
  Language,
  NavItem,
  SkillCategory,
  SocialLink,
} from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly name = 'Valerio Cancemi';
  readonly tagline = 'Computer Engineering Student & Developer';
  readonly subtitle =
    'Building from bare metal to the browser — embedded systems, cybersecurity, and modern web.';
  readonly email = 'valerio.cancemi04@gmail.com';
  readonly location = 'Trento, Italy';

  readonly navItems: NavItem[] = [
    { label: 'About', fragment: 'about' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Skills', fragment: 'skills' },
    { label: 'Contact', fragment: 'contact' },
  ];

  readonly socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/valedotc', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/valeriocancemi/', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:valerio.cancemi04@gmail.com', icon: 'mail' },
  ];

  readonly education: Education[] = [
    {
      institution: 'University of Trento',
      degree: 'B.S. in Computer, Communications, and Electronic Engineering',
      track: 'Computer Engineering',
      period: 'September 2023 – Present',
      current: true,
    },
  ];

  readonly experiences: Experience[] = [
    {
      company: 'Fondazione Bruno Kessler (FBK)',
      role: 'Cybersecurity Researcher — Internship',
      location: 'Trento, TN',
      period: 'March 2026 – July 2026',
      current: true,
      description: [
        'Researched memory-based attack fingerprinting in browser WebAssembly (WASM), focusing on linear memory inspection and malicious pattern detection (cryptojacking, malware obfuscation).',
        'Analyzed WebAssembly linear memory layout and JS–WASM interoperability via WebAssembly.Memory API to identify recognizable fingerprints of malicious behavior at runtime.',
        'Developed a prototype for real-time WASM memory monitoring using the Chrome DevTools Protocol and browser extension APIs.',
        'Built a dataset of memory fingerprints from known attack patterns, evaluating detection effectiveness through false positive/negative analysis.',
        'Conducted dynamic binary analysis of WASM modules using tools such as wabt and instrumented browser runtimes.',
      ],
      tags: [
        'WebAssembly',
        'Cybersecurity',
        'Chrome DevTools Protocol',
        'wabt',
        'Browser Security',
      ],
    },
    {
      company: 'E-Agle Trento Racing Team',
      role: 'Embedded Developer',
      location: 'Trento, TN',
      period: 'October 2024 – Present',
      current: true,
      description: [
        'Developed and maintained firmware for STM32 microcontrollers, focusing on low-voltage battery management systems and sensor data acquisition.',
        'Designed CAN bus protocol serialization/deserialization libraries for embedded applications.',
        'Worked with RTOS, STM32CubeMX, and C to optimize firmware development and hardware interaction.',
        'Used Git for version control and collaborative development within a multidisciplinary team.',
      ],
      tags: ['STM32', 'C/C++', 'CAN-BUS', 'RTOS', 'Embedded Systems', 'STM32CubeMX'],
    },
    {
      company: 'Factory Mind',
      role: 'Angular Developer — Internship',
      location: 'Trento, TN',
      period: 'September 2025 – December 2025',
      description: [
        'Developed web application features using Angular within a modern front-end stack.',
        'Integrated DevExtreme UI components to build responsive and maintainable user interfaces.',
        'Implemented application internationalization (i18n) to support multiple languages and markets.',
        'Collaborated in a remote development environment using Git.',
        'Wrote technical documentation and performed testing to ensure code quality and reliability.',
      ],
      tags: ['Angular', 'TypeScript', 'DevExtreme', 'i18n', 'Git'],
    },
    {
      company: 'Linescode',
      role: 'Java Developer — Internship',
      location: 'Mazara del Vallo, TP',
      period: 'July 2021 – August 2021',
      description: [
        'Completed training in object-oriented programming (OOP) with Java, focusing on Spring Boot for back-end development.',
        'Gained hands-on experience with home banking software, working on back-end system management.',
        'Worked with databases to understand data handling in financial applications.',
      ],
      tags: ['Java', 'Spring Boot', 'OOP', 'MySQL'],
    },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      icon: 'code',
      skills: [
        { name: 'C/C++', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'Rust', level: 50 },
        { name: 'Lua', level: 50 },
      ],
    },
    {
      name: 'Web & Frameworks',
      icon: 'globe',
      skills: [
        { name: 'Angular', level: 80 },
        { name: 'Node.js', level: 65 },
        { name: 'Spring Boot', level: 60 },
        { name: 'WebAssembly', level: 70 },
      ],
    },
    {
      name: 'Embedded & Protocols',
      icon: 'cpu',
      skills: [
        { name: 'STM32 / RTOS', level: 80 },
        { name: 'CAN-BUS', level: 75 },
        { name: 'SPI / I2C', level: 70 },
        { name: 'REST APIs', level: 75 },
      ],
    },
    {
      name: 'Tools & Databases',
      icon: 'tool',
      skills: [
        { name: 'PlatformIO', level: 95 },
        { name: 'Git', level: 85 },
        { name: 'PostgreSQL / MySQL', level: 65 },
        { name: 'STM32CubeMX', level: 75 },
      ],
    },
  ];

  readonly languages: Language[] = [
    { name: 'Italian', level: 'Native', flag: '🇮🇹' },
    { name: 'English', level: 'Professional', flag: '🇬🇧' },
  ];
}
