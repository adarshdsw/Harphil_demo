import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./rickandmorty/rickandmorty.module').then(m => m.RickandmortyModule)
    }
];
