import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { Finanzamt } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getFinanzamt(): Observable<Finanzamt> {
    return of({
      name: "First",
      nr: "1234",
      subFinanzamt: {
        name: "Second",
        nr: "4321"
      }
    });
  }
}
