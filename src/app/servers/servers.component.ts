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
   this.serversCreationStatus = 'server was created';

  }
  onUpdateServerName(event:Event){
    this.serverName =(<HTMLInputElement> event.target).value;
  }

}
