import { Component } from '@angular/core';
import { TemplateFormComponent } from './template-form/template-form.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/person'; // προστέθηκε το ManyPerson για καταχώρηση στο γενικό πεδίο
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [TemplateFormComponent, SimpleDatatableComponent, PersonTableComponent],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {
  currentPerson: EPerson | undefined;
  // persons: EPerson[] = [];
  // persons = ManyPerson; // για λόγους καταχώρησης στο γενικό πεδίο

  onPerson(person: EPerson) {
    console.log("From Parent>>>>", person);
    this.currentPerson = person;
    // this.persons.push(person);
    ManyPerson.push(person); // για λόγους καταχώρησης στο γενικό πεδίο
    console.log("CurrentPerson>>>", this.currentPerson)
    // console.log("Persons>>>", this.persons);
  }

}
