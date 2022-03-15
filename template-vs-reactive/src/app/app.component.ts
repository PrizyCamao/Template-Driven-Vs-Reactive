import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-vs-reactive';

  public mainForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.mainForm = this.fb.group({
      user_name: ['', Validators.required],
      first_name: ['',Validators.required],
      last_name: ['',Validators.required],
      email: ['',Validators.required],
      address: this.fb.group({
        street: ['',Validators.required],
        city: ['',Validators.required],
        state: ['',Validators.required],
        zip: ['',Validators.required]
      }),
      favorite_color: ['',Validators.required],
      favorite_food: ['',Validators.required],
      favorite_season: ['',Validators.required],
      favorite_episode: ['',Validators.required]
    })
  }

}
