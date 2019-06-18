import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegistryService } from '../registry.service';

@Component({
  selector: 'app-step-host',
  templateUrl: './step-host.component.html',
  styleUrls: ['./step-host.component.css']
})
export class StepHostComponent {

  readonly component$: Observable<Type<any>>;

  constructor(private readonly route: ActivatedRoute, private readonly registry: RegistryService) {
    const id$ = this.route.params.pipe(
      map(params => params.stepId as string),
      map(id => parseInt(id, 10))
    );

    this.component$ = id$.pipe(
      map(id => this.registry.getForId(id))
    );
  }

}
