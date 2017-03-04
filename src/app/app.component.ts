import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private count: number = 1;
  constructor() {
  }

  @ViewChild('peerAudio') peerAudio: ElementRef;

  peer;
  anotherid;
  mypeerid: BehaviorSubject<string> = new BehaviorSubject<string>('');


  ngOnInit() {
    this.peer = new Peer({ key: 's9hp9bp6p9cnmi' });
    const self = this;
    this.peer.on('open', function (id) {
      self.mypeerid.next(id);
    })

    this.peer.on('connection', function (conn) {
      conn.on('data', function (data) {
        console.log(data);
      });
    });

    const n = <any>navigator;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);

    this.peer.on('call', function (call) {

      n.getUserMedia({ video: false, audio: true }, function (stream) {
        call.answer(stream);
        call.on('stream', function (remotestream) {
        })
      }, function (err) {
        console.log('Failed to get stream', err);
      })
    })
  }

  connect() {
    const conn = this.peer.connect(this.anotherid);
    const self = this;
    conn.on('open', function () {
      conn.send('Message from that id');
      self.audioConnect();
    });
  }

  private audioConnect() {
    const localvar = this.peer;
    const fname = this.anotherid;

    const n = <any>navigator;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
    const self = this;

    n.getUserMedia({ video: false, audio: true }, function (stream) {
      const call = localvar.call(fname, stream);
      call.on('stream', function (remotestream) {
        self.peerAudio.nativeElement.src = (URL).createObjectURL(remotestream);
      })
    }, function (err) {
      console.log('Failed to get stream', err);
    })
  }
}
