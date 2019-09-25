import { Component, OnInit } from '@angular/core';
import { from, of, concat } from 'rxjs';
import { delay, concatMap, tap, finalize } from 'rxjs/operators';
import { md } from '../data/resume.md';
import { style } from '../data/style.css';
import { mdstyle } from '../data/md.style.css';

const INTERVAL = 40;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentStyle = '';
  currentMarkdown = '';
  enableHtml = true;

  ngOnInit(): void {
    const styleSection1$ = from(style)
      .pipe(
        concatMap(char => of(char).pipe(delay(INTERVAL))),
        tap(char => this.currentStyle += char || ' ')
      );
    const markdownSection$ = from(md)
      .pipe(
        concatMap(char => of(char).pipe(delay(INTERVAL))),
        tap(char => this.currentMarkdown += char || ' ')
      );
    const styleSection2$ = from(mdstyle)
      .pipe(
        concatMap(char => of(char).pipe(delay(INTERVAL))),
        tap(char => this.currentStyle += char || ' ')
      );
    concat(styleSection1$, markdownSection$, styleSection2$).subscribe();
  }
}
