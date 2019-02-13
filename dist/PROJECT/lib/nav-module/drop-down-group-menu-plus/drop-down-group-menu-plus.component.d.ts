import { EventEmitter, OnInit } from '@angular/core';
export declare class DropDownGroupMenuPlusComponent implements OnInit {
    changeOpen: Boolean;
    menusList: Array<any>;
    currentSys: string;
    navHomeUrl: EventEmitter<{}>;
    navUrl: EventEmitter<{}>;
    menuMap: {};
    desk: any[];
    navHome(): void;
    navSub(id: any): void;
    constructor();
    ngOnInit(): void;
}
