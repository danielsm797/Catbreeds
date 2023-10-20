import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiCatsService {

  constructor(
    private http: HttpClient
  ) { }

  getCats(page: number): Promise<any> {

    const headers = new HttpHeaders({
      'x-api-key': environment.apiKey
    });

    return firstValueFrom(
      this.http
        .get(environment.breeds, { headers, params: { limit: 10, page } })
    )
  }
}
