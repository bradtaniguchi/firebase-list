import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from './service/loading-bar.service';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent implements OnInit {
  showLoading: boolean
  constructor(private loadingBarService: LoadingBarService) { }

  ngOnInit() {
    this.loadingBarService.getShowLoadingBar()
      .subscribe(show => {
        this.showLoading = show;
      });
  }

}
