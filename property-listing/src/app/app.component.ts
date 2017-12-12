import { Component } from '@angular/core'; 

import {SearchService} from "./search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   listings : any[] = [];
    constructor(private searchService: SearchService ) {
    }

    ngOnInit() {
		  this.loadData ();
	}
	loadData () {
		this.searchService.search().then(response => { 
      this.listings = response.json().data.slice(0,10);

      this.listings.forEach(function(listing){
        for(let advertisementAsset in listing.advertisementAssets){
          if(!listing.advertisementAssetsArray) {
            listing.advertisementAssetsArray=[];
           }
          if(listing.advertisementAssets[advertisementAsset].titlePicture){
            listing.advertisementAssetsArray.push(listing.advertisementAssets[advertisementAsset])
          } 
          listing.realestateSummary.space = Math.round(listing.realestateSummary.space);
        } 
      })
        }, error => {});
	}

	 



}
