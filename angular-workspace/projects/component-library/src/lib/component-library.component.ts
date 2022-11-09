import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-component-library',
  template: `
    <p>
      <my-component first="jony" last="matos"></my-component>
    </p>
  `,
  styles: [
  ]
})
export class ComponentLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
