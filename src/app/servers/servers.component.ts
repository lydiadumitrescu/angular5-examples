import { Component, OnInit } from '@angular/core';

@Component({
  // selector on id is not supported
  // selector: 'app-servers', // dom element
  // selector: '[app-servers]',// attribute
  selector: '.app-servers',// class
  // template: `
  //   <app-server></app-server>  
  //   <app-server></app-server>`,
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  name = "Lydia";
  allowNewServer = false;
  serverCreationStatus = "no server was created";
  serverName = "TestServer";

  serverCreated = false;

  servers = ['TestServer', 'TestServer2']



  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created = ' + this.serverName;

  }

  onUpdateServerName(event:any){
    console.log(event);
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  displaySecret = false;
  logClicks = [];

  logClick(evt){
    console.log(this.logClicks);
    this.logClicks.push(evt.timeStamp);
  }
  getLogColor(index){
    console.log(index)
    return index >= 5 ? 'lightblue' : '';
  }
}
