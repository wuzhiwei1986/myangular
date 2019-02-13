import { EventEmitter, OnInit } from '@angular/core';
export declare class AlarmComponent implements OnInit {
    isShow: boolean;
    alarmList: Array<string>;
    alarmTotal: number;
    alarmTitle: string;
    viewAll: EventEmitter<{}>;
    viewMore(): void;
    constructor();
    ngOnInit(): void;
}
