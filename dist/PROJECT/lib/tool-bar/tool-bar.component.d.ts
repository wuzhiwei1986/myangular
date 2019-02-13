import { EventEmitter, OnInit } from '@angular/core';
export declare class ToolBarComponent implements OnInit {
    customX: any;
    customY: any;
    ecpStyle: object;
    selectId: EventEmitter<string>;
    click(url: any): void;
    menuJSON: {
        'name': string;
        'url': string;
        'chird': ({
            'name': string;
            'url': string;
            'isSwitch': boolean;
        } | {
            'name': string;
            'url': string;
            'isSwitch'?: undefined;
        })[];
    }[];
    hoverId: number;
    thisMenuId: number;
    menuSel(i: any): void;
    showSubMenu(i: any): void;
    constructor();
    ngOnInit(): void;
}
