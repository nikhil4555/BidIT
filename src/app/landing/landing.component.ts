import { Component, ElementRef, HostListener, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  // isVisible = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //     this.isVisible = window.pageYOffset > 100;
  // }

  // scrollToTop() {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
  //     });
  // }
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  
  counters = [
    { target: 555, currentValue: 0, text: 'Cars Sold' },
    { target: 898, currentValue: 0, text: 'Cars Auctioned' },
    { target: 789, currentValue: 0, text: 'Cars Bought' }
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.counters.forEach(counter => this.startCounting(counter));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.aboutSection.nativeElement);
  }

  startCounting(counter: { target: number; currentValue: number; text: string }): void {
    const speed = 500; // Speed of the count
    const increment = counter.target / speed;

    const updateCount = () => {
      if (counter.currentValue < counter.target) {
        counter.currentValue = Math.ceil(counter.currentValue + increment);
        setTimeout(updateCount, 1);
      } else {
        counter.currentValue = counter.target;
      }
    };

    updateCount();
  }
}
