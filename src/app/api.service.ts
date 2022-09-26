import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postInfo(data: any) {
    return this.http.post<any>("http://localhost:9000/productList/", data);
  }
  getInfo() {
    return this.http.get<any>("http://localhost:9000/productList/",);
  }
  putInfo(data: any, _id: number) {
    return this.http.put<any>("http://localhost:9000/productList/" + _id, data);
  }
  deleteInfo(_id: number) {
    return this.http.delete<any>("http://localhost:9000/productList/" + _id,)
  }
}
