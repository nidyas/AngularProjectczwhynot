import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-form-reclamation',
  templateUrl: './form-reclamation.component.html',
  styleUrls: ['./form-reclamation.component.css']
})
export class FormReclamationComponent implements OnInit {
public FormRec:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.FormRec = new FormGroup(
      {
      
        desc:new FormControl('',[Validators.required ])
      }
    )
  }
  addRec(){
      console.log("test")
  }
}
