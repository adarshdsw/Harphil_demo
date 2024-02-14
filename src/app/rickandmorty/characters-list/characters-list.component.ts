import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {

  characters: any = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  // Function to get characters list
  getCharacters() {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe({
      // Subscribe server response
      next: (response: any) => {
        if (response && response.results && response.results.length) {
          this.characters = response.results;
        } else {
          this.characters = [];
        }
        console.log('this.characters ', this.characters);
      },
      // Handling server error
      error: (error) => {
        console.log('error ', error);
      }
    });
  }

  // Navigate to character detail page
  characterDetail(id:any){
    this.router.navigate(['characters/'+id]);
  }

}
