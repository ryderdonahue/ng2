webpackJsonp([1,4],{401:function(t,e){function i(t){throw new Error("Cannot find module '"+t+"'.")}i.keys=function(){return[]},i.resolve=i,t.exports=i,i.id=401},402:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(490),o=i(1),r=i(512),a=i(511);r.a.production&&i.i(o.a)(),i.i(n.a)().bootstrapModule(a.a)},510:function(t,e,i){"use strict";var n=i(1);i.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o([i.i(n.U)({selector:"app-root",template:i(671),styles:[i(667)]}),r("design:paramtypes",[])],t)}()},511:function(t,e,i){"use strict";var n=i(217),o=i(1),r=i(480),a=i(486),s=i(510),c=i(513),d=i(514),l=i(515);i.d(e,"a",function(){return u});var f=this&&this.__decorate||function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(){}return t=f([i.i(o.b)({declarations:[s.a,c.a,d.a,l.a],imports:[n.a,r.a,a.a],providers:[],bootstrap:[s.a]}),p("design:paramtypes",[])],t)}()},512:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={production:!0}},513:function(t,e,i){"use strict";var n=i(1),o=i(371);i.n(o);i.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ref=t,this.writing=!0,this.chars="電脳 計算機 電子計算機 端末 電算 電算機"}return t.prototype.ngOnInit=function(){var t=this;this.displayText="電",this.effectsText=" ",this.textString?this.DrawText():this.textStringObs&&this.textStringObs.subscribe(function(e){t.displayText="電",t.effectsText=" ",t.textString=e,t.DrawText()})},t.prototype.DrawText=function(){var t=this;this.displayText.length<=this.textString.length?(this.effectsText=this.effectsText.slice(0,this.effectsText.length-1),this.displayText.length>1&&(this.effectsText+=this.displayText[this.displayText.length-2]),this.effectsText+=this.chars[this.displayText.length%this.chars.length],this.displayText=this.displayText.slice(0,this.displayText.length-1),this.displayText+=this.textString[this.displayText.length],this.displayText+=this.chars[this.displayText.length%this.chars.length],setTimeout(function(){t.DrawText()},Math.max(90-this.displayText.length*this.speed*3,1))):(this.displayText=this.displayText.slice(0,this.displayText.length-1),this.effectsText=this.displayText,this.writing=!1),this.ref.detectChanges()},t.prototype.DrawTextObs=function(){var t=this;this.displayText.length<=this.textStringObs.value.length?(this.effectsText=this.effectsText.slice(0,this.effectsText.length-1),this.displayText.length>1&&(this.effectsText+=this.displayText[this.displayText.length-2]),this.effectsText+=this.chars[this.displayText.length%this.chars.length],this.displayText=this.displayText.slice(0,this.displayText.length-1),this.displayText+=this.textStringObs.value[this.displayText.length],this.displayText+=this.chars[this.displayText.length%this.chars.length],setTimeout(function(){t.DrawText()},Math.max(90-this.displayText.length*this.speed*3,1))):(this.displayText=this.displayText.slice(0,this.displayText.length-1),this.effectsText=this.displayText,this.writing=!1),this.ref.detectChanges()},r([i.i(n.w)(),a("design:type",String)],t.prototype,"textString",void 0),r([i.i(n.w)(),a("design:type","function"==typeof(e=void 0!==o.BehaviorSubject&&o.BehaviorSubject)&&e||Object)],t.prototype,"textStringObs",void 0),r([i.i(n.w)(),a("design:type",Number)],t.prototype,"speed",void 0),t=r([i.i(n.U)({selector:"graphic-text",template:i(672),styles:[i(668)]}),a("design:paramtypes",["function"==typeof(s=void 0!==n.t&&n.t)&&s||Object])],t);var e,s}()},514:function(t,e,i){"use strict";var n=i(1),o=i(371);i.n(o);i.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ref=t,this.myAudioLevelObs=new o.BehaviorSubject(0),this.foreignAudioLevelObs=new o.BehaviorSubject(0),this.foreignId=new o.BehaviorSubject(""),this.mypeerid=new o.BehaviorSubject(""),this.connected=!1}return t.prototype.ngOnInit=function(){var t=this;this.myAudioLevelObs.subscribe(function(e){t.myAudioLevel=e,console.log("myAudio: "+e),t.ref.detectChanges()}),this.foreignAudioLevelObs.subscribe(function(e){t.foreignAudioLevel=e,console.log("theirAudio: "+e),t.ref.detectChanges()}),this.peer=new Peer({key:"s9hp9bp6p9cnmi"});var e=this;this.peer.on("open",function(t){e.mypeerid.next(t)}),this.peer.on("connection",function(t){t.on("data",function(t){console.log(t)})});var i=navigator;i.getUserMedia=i.getUserMedia||i.webkitGetUserMedia||i.mozGetUserMedia||i.msGetUserMedia,this.peer.on("call",function(t){e.foreignId.next(t.peer),i.getUserMedia({video:!1,audio:!0},function(i){e.visualizeStream(i,e.myAudioLevelObs),t.answer(i),t.on("stream",function(t){e.visualizeStream(t,e.foreignAudioLevelObs),e.connected=!0,e.peerAudio.nativeElement.src=URL.createObjectURL(t)})},function(t){console.log("Failed to get stream",t)})})},t.prototype.connect=function(){this.foreignId.next(this.foreignIdInput);var t=this;this.peer.connect(this.foreignIdInput).on("open",function(){t.audioConnect()})},t.prototype.audioConnect=function(){var t=this,e=navigator;e.getUserMedia=e.getUserMedia||e.webkitGetUserMedia||e.mozGetUserMedia||e.msGetUserMedia,e.getUserMedia({video:!1,audio:!0},function(e){t.visualizeStream(e,t.myAudioLevelObs),t.peer.call(t.foreignIdInput,e).on("stream",function(e){t.visualizeStream(e,t.foreignAudioLevelObs),t.connected=!0,t.peerAudio.nativeElement.src=URL.createObjectURL(e)})},function(t){console.log("Failed to get stream",t)})},t.prototype.visualizeStream=function(t,e){var i=new AudioContext,n=i.createAnalyser(),o=i.createMediaStreamSource(t),r=i.createScriptProcessor(2048,1,1);n.smoothingTimeConstant=.3,n.fftSize=1024,o.connect(n),n.connect(r),r.connect(i.destination),r.onaudioprocess=function(){var t=new Uint8Array(n.frequencyBinCount);n.getByteFrequencyData(t);for(var i=0,o=t.length,r=0;r<o;r++)i+=t[r];var a=i/o;e.next(a)}},r([i.i(n.V)("peerAudio"),a("design:type","function"==typeof(e=void 0!==n.C&&n.C)&&e||Object)],t.prototype,"peerAudio",void 0),t=r([i.i(n.U)({selector:"peer-audio",template:i(673),styles:[i(669)]}),a("design:paramtypes",["function"==typeof(s=void 0!==n.t&&n.t)&&s||Object])],t);var e,s}()},515:function(t,e,i){"use strict";var n=i(1);i.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=o([i.i(n.U)({selector:"spacer",template:i(674),styles:[i(670)]}),r("design:paramtypes",[])],t)}()},667:function(t,e){t.exports=".host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%}div{font-family:sans-serif;font-size:32px}.item{width:200px;height:22px}input{background:#000;border:1px solid #fff;color:#fff;text-align:center;padding:5px;margin:10px}"},668:function(t,e){t.exports=".graphic-text{font-size:18px;font-family:monospace;text-align:center;position:absolute;width:100%}.no-select{cursor:none}.effect-text{-webkit-animation-name:blurText;animation-name:blurText;-webkit-animation-duration:90ms;animation-duration:90ms;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.effect-done,.effect-text{-webkit-filter:blur(5px);filter:blur(5px)}.effect-done{-webkit-animation-duration:.2s;animation-duration:.2s}"},669:function(t,e){t.exports=".host{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%}div{font-family:sans-serif;font-size:32px}.item{width:200px;height:22px}input{background:#000;text-align:center;margin:10px}button,input{border:1px solid #fff;color:#fff;padding:5px}button{background:none}button:hover{color:#23ac7c;border-color:#23ac7c;border-width:1px;-webkit-transition:color .1s,border-color 50ms;transition:color .1s,border-color 50ms}.audio{height:2px;margin-top:10px;margin-bottom:10px}.myAudio{background:#23ac7c;box-shadow:0 0 10px 2px #23ac7c}.theirAudio{background:#f83956;box-shadow:0 0 10px 2px #f83956}"},670:function(t,e){t.exports=".spacer{margin-top:15px;margin-bottom:15px;background:#fff;-webkit-animation-name:grow;animation-name:grow;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;height:1px;width:200px}@-webkit-keyframes grow{0%{width:0}to{width:200px}}@keyframes grow{0%{width:0}to{width:200px}}"},671:function(t,e){t.exports='<div class="host">\r\n  <peer-audio></peer-audio>\r\n</div>'},672:function(t,e){t.exports='<div class="relative">\r\n  <div class="graphic-text no-select">\r\n    {{displayText}}\r\n  </div>\r\n  <div [ngClass]="{\'effect-text\': writing, \'effect-done\': !writing }" class="graphic-text">\r\n    {{effectsText}}\r\n  </div>\r\n</div>\r\n'},673:function(t,e){t.exports='<div class="host">\r\n  <!--<graphic-text class="welcome" [textString]="\'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\'" [speed]=3></graphic-text>-->\r\n  <!--<graphic-text *ngIf="!mypeerid.value" class="item" [textString]="\'Acquiring PeerId:\'" [speed]=3></graphic-text>-->\r\n  <graphic-text *ngIf="mypeerid.value" class="item" [textString]="\'PeerId:\'" [speed]=3></graphic-text>\r\n  <graphic-text class="item" [textStringObs]="mypeerid"></graphic-text>\r\n  <div class="myAudio audio" [ngStyle]="{\'width\': myAudioLevel + \'px\'}">\r\n  </div>\r\n\r\n  <div *ngIf="!connected">\r\n    <input type="text" [(ngModel)]="foreignIdInput" placeholder="peerId">\r\n    <button (click)="connect()">connect</button>\r\n  </div>\r\n  <audio #peerAudio autoplay id="peerAudio"></audio>\r\n  <spacer *ngIf="connected"></spacer>\r\n  <graphic-text *ngIf="connected" class="item" [textString]="\'Foreign PeerId:\'"></graphic-text>\r\n  <graphic-text *ngIf="connected" class="item" [textStringObs]="foreignId"></graphic-text>\r\n  <div class="theirAudio audio" [ngStyle]="{\'width\': foreignAudioLevel +\'px\'}">\r\n  </div>\r\n</div>'},674:function(t,e){t.exports='<div class="spacer"></div>'},948:function(t,e,i){t.exports=i(402)}},[948]);