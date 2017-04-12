import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ul>
		<li *ngFor="let person of data">
		   {{person.id}} - {{person.first_name}}
		</li>
	     </ul>`
})
export class AppComponent {

    private data;

    constructor(private http:Http){
    }

    ngOnInit(){
        this.getData();
    }

    getData(){
        this.http.get('http://localhost/angular2/service.php')
            .subscribe(res => this.data = res.json());
    }
}
