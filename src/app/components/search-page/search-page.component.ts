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
  fetched: boolean = false;
  land: any;

  constructor(
    private landService: LandService
  ) { }

  ngOnInit(): void {
  }

  showValues() {
    console.log("loading: " + this.loading);
    console.log("fetched: " + this.fetched);
  }

  isObject(item: any): boolean {
    return typeof item === "object";
  }

  onSubmit() {
    if (!this.landID) {
      console.log('input is empty');
      return
    }

    if (this.loading === true) return;
    this.loading = true;
    this.fetched = false;

    this.landService
      .fetchLand(this.landID)
      .subscribe(
        (land) => {
          this.land = land;
          console.log(land);
        },
        error => {
          console.error(error);
          this.loading = false;
          this.fetched = true;
        },
        () => {
          console.log("end");
          this.loading = false;
          this.fetched = true;
        }
      )

  }
}
