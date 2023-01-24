import { Component } from '@angular/core';
import { Developer } from '../developer.model';

@Component({
  selector: 'app-develloper',
  templateUrl: './develloper.component.html',
  styleUrls: ['./develloper.component.css']
})
export class DevelloperComponent {
  
  model = new Developer("Jean","Aymare",99,"male","Barbapapa",[]);
name: string = "Doigt";
logo: string = "DTQ";


}

  


