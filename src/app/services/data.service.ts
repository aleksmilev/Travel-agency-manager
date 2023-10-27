import { Injectable, assertInInjectionContext} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService{
  private REST_API_SERVER = "http://localhost:80/";
  
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Credentials': 'true'  
  });

  constructor(private http: HttpClient) {}
  
  private fullEndpoint(endpoint: string): string{
    return this.REST_API_SERVER + endpoint;
  }
  
  public Get(endpoint: any): Observable<any>{ 
    return this.http.get(this.fullEndpoint(endpoint));
  }

  public Post(endpoint: any, data: any): Observable<any>{
    return this.http.post(this.fullEndpoint(endpoint), JSON.stringify(data), {headers: this.headers});
  }

  public Update(endpoint: any, new_data: any): Observable<any>{ 
    return this.http.put(this.fullEndpoint(endpoint), JSON.stringify(new_data), {headers: this.headers});
  }

  public Delate(endpoint: any, id: any): Observable<any>{    
    return this.http.delete(this.fullEndpoint(endpoint), {params: id});
  }
}
