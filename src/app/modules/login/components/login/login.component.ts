import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata:FormGroup;
  loading:boolean = false;
  label:string = 'Entrar';
  icon:string = '';
  show_error = false;
  constructor(private fb: FormBuilder, private auth:AuthService,private router: Router) {
      this.formdata = this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required],
      });
   }

  ngOnInit() {
  }

  login(){
    if (this.formdata.invalid) {
      return;
    }

    const credentials = this.formdata.value;
    // this.label = '';
    this.icon = 'fas fa-circle-notch fa-spin';
    this.loading = true;

    this.auth.login(credentials).subscribe(
      (response)=>{
        if (response.ok) {
          this.router.navigateByUrl('/home');
        }else{
          this.icon = '';
          this.loading = false;
          this.label = 'Entrar';
          this.show_error = true;
        }
        this.icon = '';
        this.loading = false;
        this.label = 'Entrar';
      }
    )   
  }

}
