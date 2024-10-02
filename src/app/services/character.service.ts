import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _apiUrl = `${environment.apiUrl}/character`;
  private _http = inject(HttpClient);

  getCharacters(page: number = 1, id: number = 0, name: string = '', location: string = '', origin: string = '', created: string, status: string = ''): Observable<any> {
    let params = new HttpParams()
      .set('page', page)
      .set('id', id)
      .set('name', name)
      .set('location', location)
      .set('origin', origin)
      .set('created', created)
      .set('status', status.toUpperCase());
    return this._http.get<any>(this._apiUrl, { params });
  }

}
