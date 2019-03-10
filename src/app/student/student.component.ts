import { Component, OnInit } from '@angular/core';
import { Student} from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
student:Student;
students;

resetStudent(){
  this.student={
     id:0,
     firstName:'',
     lastName:'',
     email:'roy@gmail.com',
     phone:'09038187690'
  }
}
onLogout(){
  
    this.router.navigate(['/login']); 
    
}
deleteAll(){
  this.students=[];
}
deleteStudent(id){
  var List=[];
  for(var i=0;i<this.students.length;i++)
  {
if(id!=(this.students[i].id))
{
  List.push(this.students[i]);
}
  }
  this.students=List;
}
updateStudent(){
  var update=false;
  if(this.student.id==0)
  {
    this.student.id=this.students.length+1;
  }
  for(var i=0;i<this.students.length;i++)
  {
    if(this.student.id==this.students[i].id)
    {
      update=true;
      this.students[i]=this.student;
      break;
    }
  }
  if(!update)
  {
    this.students.push(this.student);
  }
  this.resetStudent();

}
add(){
  this.student.id=this.students.length+1;
  this.students.push(this.student);
  this.resetStudent();
}

selectStudent(student){
  this.student=student;
}
  constructor(private router :Router) { }

  ngOnInit() {
    this.resetStudent();
     this.students=[
       {id:1,firstName:'Kritika',lastName:'Roy',email:'roykritika00@gmail.com',phone:'09038187690'},
       {id:2,firstName:'Ashish',lastName:'Roy',email:'royashish00@gmail.com',phone:'09038187690'}
      ];
  }

}
