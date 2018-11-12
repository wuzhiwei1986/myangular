import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-consumption-analysis',
  templateUrl: './water-consumption-analysis.component.html',
  styleUrls: ['./water-consumption-analysis.component.css']
})
export class WaterConsumptionAnalysisComponent implements OnInit {
  isVisibleTop = false;
  isVisibleMiddle = false;

  showModalTop(): void {
    this.isVisibleTop = true;
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkTop(): void {
    console.log('点击了确定');
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
