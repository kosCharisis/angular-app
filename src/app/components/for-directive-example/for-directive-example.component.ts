import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users:Person[] = [
    {
    givenName: "name2",
    surName: "surname2",
    address: "address2",
    email: "name2@aueb.gr",
    age: 40
    },
    {
      "givenName": "Stephen",
      "surName": "Campbell",
      "email": "s.w.campbell@aol.com",
      "age": 30,
      "address": "Iola"
    },
    {
      "givenName": "Amelia",
      "surName": "Clark",
      "email": "a_clark@live.com",
      "age": 26,
      "address": "Louisville"
    },
    {
      "givenName": "Stephen",
      "surName": "Powell",
      "email": "stephenalanpowell@hotmail.com",
      "age": 58,
      "address": "Henderson"
    },
    {
      "givenName": "Joshua",
      "surName": "Barnes",
      "email": "joshua_barnes@gmail.com",
      "age": 20,
      "address": "Cosby"
    },
    {
      "givenName": "Thomas",
      "surName": "Henderson",
      "email": "t_d@ymail.com",
      "age": 20,
      "address": "Silver Star"
    },
    {
      "givenName": "Kevin",
      "surName": "Washington",
      "email": "k_j_washington@live.com",
      "age": 33,
      "address": "Philadelphia"
    },
    {
      "givenName": "Benjamin",
      "surName": "Young",
      "email": "benjamin_g_young53@yahoo.com",
      "age": 51,
      "address": "Hermosa Beach"
    },
    {
      "givenName": "John",
      "surName": "Campbell",
      "email": "j.campbell@gmail.com",
      "age": 27,
      "address": "Mertztown"
    },
    {
      "givenName": "Laura",
      "surName": "Campbell",
      "email": "laura.campbell9@aol.com",
      "age": 69,
      "address": "Dormansville"
    },
    {
      "givenName": "Anna",
      "surName": "Edwards",
      "email": "annaedwards@live.com",
      "age": 22,
      "address": "Cambridge"
    }
  ]

}
