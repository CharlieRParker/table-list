import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-sliding',
  templateUrl: './list-sliding.page.html',
  styleUrls: ['./list-sliding.page.scss'],
})
export class ListSlidingPage {

  isIndeterminate: boolean;
  masterCheck: boolean;
  checkBoxList: any;

  constructor() {
    this.checkBoxList = [
      {
        value: 'Johnny Cage',
        isChecked: false
      }, {
        value: 'Eric Cantona',
        isChecked: false
      }, {
        value: 'Camilo Sexto',
        isChecked: false
      }, {
        value: 'Ana Von Housewolf',
        isChecked: false
      }, {
        value: 'Chino Moreno',
        isChecked: false
      }

    ];
  }
  checkMaster() {
    setTimeout(() => {
      this.checkBoxList.forEach(obj => {
        obj.isChecked = this.masterCheck;
      });
    });
  }

  checkEvent() {
    const totalItems = this.checkBoxList.length;
    let checked = 0;
    this.checkBoxList.map(obj => {
      if (obj.isChecked) { checked++; }
    });
    if (checked > 0 && checked < totalItems) {
      // si un elemento esta marcado pero no todos
      this.isIndeterminate = true;
      this.masterCheck = false;
    // tslint:disable-next-line: triple-equals
    } else if (checked == totalItems) {
      // si todos estan marcados
      this.masterCheck = true;
      this.isIndeterminate = false;
    } else {
      // si ninguno esta marcado
      this.isIndeterminate = false;
      this.masterCheck = false;
    }
  }



}
