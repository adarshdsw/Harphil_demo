import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RickandmortyRoutingModule } from './rickandmorty-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RickandmortyRoutingModule,
    HttpClientModule
  ]
})
export class RickandmortyModule { }
