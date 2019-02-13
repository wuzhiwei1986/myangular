import { EventEmitter, OnInit } from '@angular/core';
export declare class DropDownMenuComponent implements OnInit {
    changeOpen: Boolean;
    menusList: Array<any>;
    currentSys: string;
    navHomeUrl: EventEmitter<{}>;
    navUrl: EventEmitter<{}>;
    navHome(): void;
    navSub(id: any): void;
    constructor();
    ngOnInit(): void;
}
