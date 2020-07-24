import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  projectForm:FormGroup;
  constructor(private fb:FormBuilder) { }
  submit()
  {
    console.log(this.projectForm.value);
  }
  get f()
  {
    return this.projectForm.controls;
  }
  projectNameValidator(control:FormControl):Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>
    {
      setTimeout(() => { 
      if(control.value === 'test')
      {
        resolve({'notValidProjectName' : true});
      }else 
      {
        resolve(null);
      }
    },1500);
    });
    return promise;
  }
  ngOnInit(): void {
    this.projectForm = this.fb.group({
      'projectName':['',[Validators.required],this.projectNameValidator],
      'Mail':['',[Validators.required,Validators.email]],
      'projectStatus':['',[Validators.required]]
    });
  }


}
