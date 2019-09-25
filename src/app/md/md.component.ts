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
  currentmd: string;

  get result(): string | SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(Markdown.markdown.toHTML(this.markdown));
  }

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    setInterval(() => {
      if (this.currentmd !== this.markdown) {
        const mdPre = document.getElementById('work-text');
        mdPre.scrollTop = mdPre.scrollHeight;
        console.log(mdPre.scrollTop);
        console.log(mdPre.scrollHeight);
        this.currentmd = this.markdown;
      }
    }, 600);
  }

}
