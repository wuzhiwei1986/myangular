import { Component, OnInit , ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'ecp-collapse-list',
  templateUrl: './collapse-list.component.html',
  styleUrls: ['./collapse-list.component.css']
})
export class CollapseListComponent implements OnInit {
  // 历史展开
  hisShrinkCss = '';
  hisShrinkhtml = '';
  // 要展开tags
  titleArry = [];
  contentArry = [];
  // 栏目伸缩
  shrink(hover) {
    const self = this;
    const hoverItem = self.renderer.nextSibling(hover.srcElement);
    self.titleArry = self.el.nativeElement.querySelectorAll('.screen-item .module-sub-title');
    self.contentArry = self.el.nativeElement.querySelectorAll('.screen-item .module-item-content');
    if (self.hisShrinkhtml === hover.srcElement.innerHTML && self.hisShrinkCss === 'module-sub-title shrink') {
      self.renderer.addClass(hoverItem, 'none');
      self.renderer.removeClass(hover.srcElement, 'shrink');
    } else {
      for (let i = 0; i < self.contentArry.length; i++) {
        self.renderer.addClass(self.contentArry[i], 'none');
        self.renderer.removeClass(self.titleArry[i], 'shrink');
      }
      self.renderer.removeClass(hoverItem, 'none');
      self.renderer.addClass(hover.srcElement, 'shrink');
    }
    self.hisShrinkCss = hover.srcElement.className;
    self.hisShrinkhtml = hover.srcElement.innerHTML;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

}
