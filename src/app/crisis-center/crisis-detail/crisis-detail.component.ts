import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Crisis, CrisisService } from '../crisis.service';

import 'rxjs/add/operator/switchMap';




@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis = null;
  crisisID: number;
  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => 
        this.crisisService.findCrisis(+params["id"]))
      .subscribe(crisis => {
        this.crisis = crisis;
        this.crisisID = crisis.id
      });
  }

  gotoCrises() {
    this.router.navigate(
      ['../', {id: this.crisisID}], 
      {relativeTo: this.route});
  }

   
}
