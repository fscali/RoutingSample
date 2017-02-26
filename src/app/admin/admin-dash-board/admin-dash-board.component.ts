import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {
  sessionId: Observable<String>;
  token: Observable<String>

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sessionId = this.route.queryParams
                    .map(params => params['session_id'] || 'None');

    this.token = this.route.fragment
                    .map(fragment => fragment || 'None');
  }

}
