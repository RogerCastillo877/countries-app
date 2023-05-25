import { Component } from '@angular/core';
import { Region } from '../../interfaces/region';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByRegion(region: string) {
    this.countriesService.searchRegion(region)
      .subscribe(countries => {
        this.countries = countries;
      })
  }
}
