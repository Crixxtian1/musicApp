import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio2',
  templateUrl: './inicio2.page.html',
  styleUrls: ['./inicio2.page.scss'],
})
export class Inicio2Page{

  showInicio2 = false;
  selectedOption: string | undefined;

  toggleInicio2() {
    this.showInicio2 = !this.showInicio2;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.showInicio2 = false;
  }
}


