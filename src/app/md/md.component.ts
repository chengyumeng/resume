import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Markdown from 'markdown';
@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.css']
})
export class MdComponent implements OnInit {
  @Input() markdown: string;
  currentmd : string;

  get result(): string | SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(Markdown.markdown.toHTML(this.markdown));
  }

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    setInterval(() => {
      if (this.currentmd !== this.markdown) {
        const myDiv = document.getElementById('work-text');
        myDiv.scrollTop = myDiv.scrollHeight;
        this.currentmd = this.markdown;
      }
    }, 600);
  }

}
