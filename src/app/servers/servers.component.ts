import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serversCreationStatus="no server was created";
  serverName="hi";
  serverCreated=false;
  serverList=['server1','server2'];

  constructor() { 
    setTimeout(
      ()=>{
        this.allowNewServers = true;
      }, 2000
    );
  }

  ngOnInit(): void {
  }

  onCreateServer(){
   this.serverCreated = true;
   this.serverList.push(this.serverName);
   this.serversCreationStatus = 'server was created' + this.serverName;

  }
  onUpdateServerName(event:Event){
    this.serverName =(<HTMLInputElement> event.target).value;
  }

}
