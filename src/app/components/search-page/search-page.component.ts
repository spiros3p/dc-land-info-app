import { Component, OnInit } from '@angular/core';
import { LandService } from 'src/app/services/land.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  landID!: string;
  loading: boolean = false;

  constructor(
    private landService: LandService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if ( !this.landID ) {
      console.log('input is empty');
      return
    }
    if (this.loading === true) return;
    console.log(this.landID);
    this.loading = true;
  }
}
