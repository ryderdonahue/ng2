import { OnInit, Component, Input, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'graphic-text',
  templateUrl: './graphicText.component.html',
  styleUrls: ['./graphicText.component.css']
})
export class GraphicText implements OnInit {
  @Input() textString: string;
  @Input() textStringObs: BehaviorSubject<string>;
  @Input() speed: number;
  timer: NodeJS.Timer;
  public displayText: string;
  public effectsText: string;
  public writing: boolean = true;
  private chars = '電脳 計算機 電子計算機 端末 電算 電算機';
  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.displayText = '電';
    this.effectsText = ' ';

    if (this.textString) {
      this.DrawText();
    } else if (this.textStringObs) {
      this.textStringObs.subscribe(str => {
        this.displayText = '電';
        this.effectsText = ' ';
        this.textString = str;
        this.DrawText();
      });
    }
  }

  private DrawText() {
    if (this.displayText.length <= this.textString.length) {
      // 電脳 計算機 電子計算機 端末 電算 電算機
      //add correct character
      // if (this.displayText.length > 0) {
      this.effectsText = this.effectsText.slice(0, this.effectsText.length - 1);
      if (this.displayText.length > 1) {
        this.effectsText += this.displayText[this.displayText.length - 2];
      }
      this.effectsText += this.chars[this.displayText.length % this.chars.length];
      // this.effectsText += this.textString[this.displayText.length];

      this.displayText = this.displayText.slice(0, this.displayText.length - 1);
      this.displayText += this.textString[this.displayText.length];
      this.displayText += this.chars[this.displayText.length % this.chars.length];
      // }
      // add kanji 
      setTimeout(() => { this.DrawText() }, Math.max(90 - this.displayText.length * this.speed * 3, 1));
    } else {
      this.displayText = this.displayText.slice(0, this.displayText.length - 1);
      this.effectsText = this.displayText;
      this.writing = false;
      // clearInterval(this.timer);
    }
    this.ref.detectChanges();
  }

  private DrawTextObs() {
    if (this.displayText.length <= this.textStringObs.value.length) {
      // 電脳 計算機 電子計算機 端末 電算 電算機
      //add correct character
      // if (this.displayText.length > 0) {
      this.effectsText = this.effectsText.slice(0, this.effectsText.length - 1);
      if (this.displayText.length > 1) {
        this.effectsText += this.displayText[this.displayText.length - 2];
      }
      this.effectsText += this.chars[this.displayText.length % this.chars.length];
      // this.effectsText += this.textString[this.displayText.length];

      this.displayText = this.displayText.slice(0, this.displayText.length - 1);
      this.displayText += this.textStringObs.value[this.displayText.length];
      this.displayText += this.chars[this.displayText.length % this.chars.length];
      // }
      // add kanji 
      setTimeout(() => { this.DrawText() }, Math.max(90 - this.displayText.length * this.speed * 3, 1));
    } else {
      this.displayText = this.displayText.slice(0, this.displayText.length - 1);
      this.effectsText = this.displayText;
      this.writing = false;
      // clearInterval(this.timer);
    }
    this.ref.detectChanges();
  }
}