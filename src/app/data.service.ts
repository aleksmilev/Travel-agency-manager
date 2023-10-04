import { Injectable, assertInInjectionContext} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService{

  private REST_API_SERVER = "https://test-api/";

  constructor(private http: HttpClient) {}
  
  fullEndpoint(endpoint: string): string{
    return this.REST_API_SERVER + endpoint;
  }

  handleError(error: string): (err: any, caught: Observable<Object>) => import("rxjs").ObservableInput<any> {
    throw new Error(`Error: ${error}.`);
  }
  
  public async Get(endpoint: any, filter: any): Promise<Observable<unknown>>{   
    return this.http.get(this.fullEndpoint(endpoint), {params: filter})
      .pipe(
        catchError(this.handleError("Unable to create get query"))
      );
  }
  
  public async Delate(endpoint: any, id: any): Promise<Observable<unknown>>{    
    return this.http.delete(this.fullEndpoint(endpoint), {params: id})
    .pipe(
      catchError(this.handleError("Unable to create delate query"))
    );
  }

  public async Post(endpoint: any, data: any): Promise<Observable<unknown>>{
    const headers = { 'Content-Type': 'application/json; charset=UTF-8', 'Access-Control-Allow-Origin': '*'};
    
    return this.http.post(this.fullEndpoint(endpoint), JSON.stringify(data))
      .pipe(
        catchError(this.handleError("Unable to create post query"))
      );
  }

  public async Update(endpoint: any, new_data: any): Promise<Observable<unknown>>{
    const headers = { 'Content-Type': 'application/json; charset=UTF-8', 'Access-Control-Allow-Origin': '*'};
    
    return this.http.put(this.fullEndpoint(endpoint), JSON.stringify(new_data))
    .pipe(
      catchError(this.handleError("Unable to create update query"))
    );
  }
}
