import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {

  characterId: any;
  characterDetail: any;

  constructor(private activeRouter: ActivatedRoute, private http: HttpClient) {
    // Fetch Id from url 
    this.activeRouter.params.subscribe((param: any) => {
      this.characterId = param['id'];
    })
    console.log('this.characterId ', this.characterId);
  }

  ngOnInit(): void {
    this.getCharacterDetail(this.characterId);
  }

  // Fetch specific character detail by id
  getCharacterDetail(id: any) {
    this.http.get('https://rickandmortyapi.com/api/character/' + id).subscribe({
      next: (response: any) => {
        console.log('response ', response);
        if (response) {
          this.characterDetail = response;
        }
      },
      error: (error) => {
        console.log('error ', error);
      }
    })
  }

}
