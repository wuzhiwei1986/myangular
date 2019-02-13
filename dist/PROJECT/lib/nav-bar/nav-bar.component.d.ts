import { OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
export declare class NavBarComponent implements OnInit {
    private router;
    customScaling: boolean;
    ecpStyle: object;
    menuList: Array<any>;
    goTo: EventEmitter<{}>;
    menuStatus: string;
    hoverId: number;
    selectId: number;
    thisMenuId: number;
    hisHover: number;
    constructor(router: Router);
    ngOnInit(): void;
    hoverMenu(id: any): void;
    selectMenu(id: any): void;
    cleanSel(): void;
    on(): void;
    off(): void;
    showChildMenu(i: any): "none" | "block";
    selectedApp(uri: any, hoverId: any): boolean;
}
