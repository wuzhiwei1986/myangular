import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {


  tableList = [
    {
      id: '1',
      title: '流量计【004557】200流速超过10m³'

    },
    {
      id: '2',
      title: '【00DX34557】200流速超过10m³'

    },
    {
      id: '3',
      title: '流量计【00DX34557】200流超过10m³'

    },
    {
      id: '4',
      title: '流量计【00DX4557】流速超过10m³'

    },
    {
      id: '5',
      title: '流量200流速计【20流速】200流速超过10m³'

    },
    {
      id: '6',
      title: '200流速流量计【00D557】200流速超过10m³'

    },
    {
      id: '7',
      title: '流量计200流速【00D57】200流速超过10m³'

    },
    {
      id: '8',
      title: '流量计【00DX34557】200流速超过10m³'

    },
    {
      id: '9',
      title: '200流量计【00DX34557】200流过10m³'

    },
    {
      id: '10',
      title: '流量计【00DX34557】200流速超过10m³'

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
