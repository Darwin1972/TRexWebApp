import {Component,Inject} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import {Machine} from './machine';

@Component({
    selector: 'app-machine',
    templateUrl: './machine.component.html',
    styleUrls: ['./machine.component.css']
})
  

export class MachineComponent {
    public machines: Machine[] = [];

    // Define API
    apiURL = 'https://localhost:49155';

    
    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      })
    }

    constructor(private http: HttpClient) { }

        ngOnInit(){
            this.http.get<Machine[]>(this.apiURL + '/WeatherForecast')
            .subscribe(result => {
                this.machines = result;
            }, error => console.error(error));
        }    
}