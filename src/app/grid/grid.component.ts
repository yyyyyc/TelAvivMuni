import { Component, OnInit } from '@angular/core';
import { DatasrvService } from '../services/datasrv.service'

enum State {
  Init, 
  HasResults, 
  NoResults, 
  Loading
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  selectedCountry: string = "";
  countries: any;
  state: State = State.Init;
  public StateType = State;

  constructor(private dataService : DatasrvService) { }

  ngOnInit(): void {
    this.state = State.Init;
   }

   getCountries(countryName: string) {
    //if (countryName.length > 1)
    {
     this.state = State.Loading;
     this.dataService.getCountries(countryName)
     .subscribe(
       res => {
        this.countries = res;
        this.state = (this.countries.length>0)?State.HasResults:State.NoResults;
     });
    } 
   }

   selectCountry (countryName: string) {
    this.selectedCountry = countryName;
    this.state = State.NoResults
 }   
}
