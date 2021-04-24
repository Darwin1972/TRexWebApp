import {Component,Inject} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import {Machines} from './machines';

@Component({
    selector: 'app-machines',
    templateUrl: './machines.component.html',
    styleUrls: ['./machines.component.css']
})
  

export class MachinesComponent {
    public machines: Machines[] = [];
    private apiURL: string;
 
    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      })
    }
    constructor(private http: HttpClient) {  
        this.apiURL = environment.apiUrl;
    }

    ngOnInit(){
        this.http.get<Machines[]>(this.apiURL + '/api/Machines')
        .subscribe(result => {
            this.machines = result;
        }, error => console.error(error));
    }   
}