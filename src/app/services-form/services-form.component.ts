import { MathService } from './../math.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.css']
})
export class ServicesFormComponent implements OnInit {
  addResult;
  substractResult;
  multiplyResult;
  constructor(private mathService: MathService) { }

  ngOnInit() {
  }

  onAdd(formValue) {
    this.addResult = this.mathService.add(formValue.valueA, formValue.valueB);
  }

  onSubstract(formValue) {
    this.substractResult = this.mathService.substract(formValue.valueA, formValue.valueB);
  }

  onMultiply(formValue) {
    this.multiplyResult = this.mathService.multiply(formValue.valueA, formValue.valueB);
  }

  onSubmit(formValue) {
    this.mathService.add(formValue.valueA, formValue.valueB);
    this.addResult = this.mathService.getAddValue();
    this.substractResult = this.mathService.substract(formValue.valueA, formValue.valueB);
    this.multiplyResult = this.mathService.multiply(formValue.valueA, formValue.valueB);
  }
}
