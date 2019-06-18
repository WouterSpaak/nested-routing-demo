import { Injectable, Type } from '@angular/core';
import { StepOneComponent } from './step-one/step-one.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepTwoComponent } from './step-two/step-two.component';

export class StepComponent<T> {
  constructor(private readonly id: T, private readonly component: Type<any>) { }

  matches(id: T) {
    return id === this.id;
  }

  getComponent() {
    return this.component;
  }
}

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
  private readonly cache = [
    new StepComponent(1, StepOneComponent),
    new StepComponent(2, StepTwoComponent),
    new StepComponent(3, StepThreeComponent)
  ];

  getForId(id: number) {
    return this.cache.find(step => step.matches(id)).getComponent();
  }
}
