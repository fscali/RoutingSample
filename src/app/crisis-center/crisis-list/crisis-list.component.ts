import { Component, OnInit } from '@angular/core';
import { Crisis, CrisisService } from '../crisis.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises: Crisis[];
  private idSelected: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crisisService: CrisisService
  ) { }

  ngOnInit() {
    this.crises = this.crisisService.getCrises();
  }
  isSelected(c: Crisis): boolean {
    return c.id === this.idSelected;
  }

  onSelect(c: Crisis): void {
    this.idSelected = c.id;
    this.router.navigate([c.id], {relativeTo: this.route});
  }



}
