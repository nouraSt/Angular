import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serversCreationStatus="no server was created"

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

}
