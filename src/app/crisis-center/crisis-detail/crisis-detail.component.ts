import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Crisis, CrisisService } from '../crisis.service';
import { DialogService } from '../../dialog.service';

import 'rxjs/add/operator/switchMap';




@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis = null;
  crisisID: number;
  newName: string;
  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService,
    private router: Router,
    private dialogService : DialogService
  ) { }

  ngOnInit() {
   /* this.route.params
      .switchMap((params: Params) => 
        this.crisisService.findCrisis(+params["id"]))
      .subscribe(crisis => {
        this.crisis = crisis;
        this.crisisID = crisis.id;
        this.newName = this.crisis.name;
      });*/

    this.route.data
      .subscribe((data: {crisis: Crisis} )=> {
        this.newName = data.crisis.name;
        this.crisis = data.crisis;
      });
  }

  gotoCrises() {
    this.router.navigate(
      ['../', {id: this.crisisID}], 
      {relativeTo: this.route});
  }

  save() {
    this.crisis.name = this.newName;
    this.gotoCrises();
  }

  canDeactivate(): Promise<boolean> | boolean {
    console.log('ci sono passatoo');
  // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
  if (!this.crisis || this.crisis.name === this.newName) {
    return true;
  }
  // Otherwise ask the user with the dialog service and return its
  // promise which resolves to true or false when the user decides
  return this.dialogService.confirm('Discard changes?');
}


   
}
