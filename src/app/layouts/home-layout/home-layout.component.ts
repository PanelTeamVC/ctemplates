// import { Component, OnInit } from '@angular/core';
import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeComponent implements OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, '2-columns');
    this.renderer.setAttribute(document.body, 'data-col', '2-columns');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, '2-columns');
  }

}
