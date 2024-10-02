import { Routes } from '@angular/router';

import { InfiniteTableComponent } from './infinite-table/infinite-table.component';
import { MatTableComponent } from './mat-table/mat-table.component';

export const routes: Routes = [
    { path: '', component: InfiniteTableComponent },
    { path: 'mat-table', component: MatTableComponent }
];
