import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-consumption-analysis-popup',
  templateUrl: './water-consumption-analysis-popup.component.html',
  styleUrls: ['./water-consumption-analysis-popup.component.css']
})
export class WaterConsumptionAnalysisPopupComponent implements OnInit {

  isVisibleMiddle = false;

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }


  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }


  /**/

  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
