import { LocalizedString } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user={username:'',email:'',selectedQuestion:'pet',address:'',gender:'',question:''}
  @ViewChild('form') form:any=NgForm;
  selectedQuestion:string="pet";
  showUserData:boolean=false;
  genders=['male' , 'female'];
  selectedGender= 'female'
  title = 'templateform';
  


  onSubmit(){
    console.log("Form submitted",this.form)
    
    this.user.username=this.form.value.userData.username;
    this.user.email=this.form.value.userData.email;
    this.user.address=this.form.value.userData.address;
    this.user.gender=this.form.value.userData.gender;
    this.user.question=this.form.value.userData.question;
    this.showUserData=true;
    this.onReset();
  }
  onSuggest(){
 this.form.setValue({gender:'male',address:'',question:'teacher',userData:{
  username:'default',email:''}
 })
  }
  onReset(){
    this.form.reset()
  }
}
//patchvalue