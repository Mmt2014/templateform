import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  genders:any[]=['male','female']
  constructor(){

  }
  ngOnInit(): void {
    
  }

}
