import {Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';



@Component({
  selector: 'app-ecp-tabset',
  templateUrl: './ecp-tabset.component.html',
  styleUrls: ['./ecp-tabset.component.css']
})
export class EcpTabsetComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  newDivHeight=1000;
  scrollTopInfo;
  isLoading = false;
  sTop ;

  divHeight;
  sHeight;
  test() {
    const slef=this;
    slef.sTop = this.myScrollContainer.nativeElement.scrollTop;
    slef.divHeight = this.myScrollContainer.nativeElement.clientHeight;
    slef.sHeight = this.myScrollContainer.nativeElement.scrollHeight;
    slef.scrollTopInfo = this.myScrollContainer.nativeElement.scrollTop;
    // 加载数据

         if(slef.sTop+slef.divHeight==slef.sHeight){
           slef.isLoading=true;
           alert('到底了,数据加截中');
           setTimeout(function () {
             slef.newDivHeight+=500;
           },1000)
         }else{
           slef.isLoading=false;
         }


  }

  toBottom() {
    this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  constructor() {
  }

  ngOnInit() {


  }



}
