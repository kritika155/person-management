import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data={username:"",password:""};
  login(){
    if((this.data.username =="")&&(this.data.password==""))
    {
      alert("please fill");
    }
    else if (this.data.username ==this.data.password) {
       this.router.navigate(['/student']); 
       return false;
    } else {
        alert('Please enter correct username or password!');
        return false;
    } 
  }
  constructor(private router :Router) { }

  ngOnInit() {
  }

}
