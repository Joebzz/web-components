export class SwapiService {
  constructor() { }

  private baseUrl = 'https://swapi.co/api/';

  getRoot(wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl;
    if (wookiee) {completeUrl += '?format=wookiee'}
    return this.getCall(completeUrl);
  }

  getPeople(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'people/';
    if (page || wookiee){ completeUrl += '?' }
    if(page){completeUrl += 'page=' + page}
    if (page && wookiee){ completeUrl += '&' }
    if (wookiee) {completeUrl += 'format=wookiee'}
    return this.getCall(completeUrl);
  }

  getPlanets(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'planets/';
    if (page || wookiee){ completeUrl += '?' }
    if(page){completeUrl += 'page=' + page}
    if (page && wookiee){ completeUrl += '&' }
    if (wookiee) {completeUrl += 'format=wookiee'}
    return this.getCall(completeUrl);
  }

  getFilms(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'films/';
    if (page || wookiee){ completeUrl += '?' }
    if(page){completeUrl += 'page=' + page}
    if (page && wookiee){ completeUrl += '&' }
    if (wookiee) {completeUrl += 'format=wookiee'}
    return this.getCall(completeUrl);
  }

  getSpecies(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'species/';
    if (page || wookiee){ completeUrl += '?' }
    if(page){completeUrl += 'page=' + page}
    if (page && wookiee){ completeUrl += '&' }
    if (wookiee) {completeUrl += 'format=wookiee'}
    return this.getCall(completeUrl);
  }

  getVehicles(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'vehicles/';
    if (page || wookiee){ completeUrl += '?' }
    if(page){completeUrl += 'page=' + page}
    if (page && wookiee){ completeUrl += '&' }
    if (wookiee) {completeUrl += 'format=wookiee'}
    return this.getCall(completeUrl);
  }

  getStarships(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'starships/';
    if (page || wookiee){ completeUrl += '?' }
    if(page){completeUrl += 'page=' + page}
    if (page && wookiee){ completeUrl += '&' }
    if (wookiee) {completeUrl += 'format=wookiee'}
    return this.getCall(completeUrl);
  }

  getPerson(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'people/' + id + '/';
    if (wookiee) {completeUrl += '?format=wookiee'}
    return this.getCall(completeUrl);
  }

  getPlanet(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'planets/' + id + '/';
    if (wookiee) {completeUrl += '?format=wookiee'}
    return this.getCall(completeUrl);
  }

  getFilm(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'films/' + id + '/';
    if (wookiee) {completeUrl += '?format=wookiee'}
    return this.getCall(completeUrl);
  }

  getSpecie(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'species/' + id + '/';
    if (wookiee) {completeUrl += '?format=wookiee'}
    return this.getCall(completeUrl);
  }

  getVehicle(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'vehicles/' + id + '/';
    if (wookiee) {completeUrl += '?format=wookiee'}
    return this.getCall(completeUrl);
  }

  getStarship(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'starships/' + id + '/';
    if (wookiee) {completeUrl += '?format=wookiee'}
    return this.getCall(completeUrl);
  }

  getPersonSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'people/schema';
    return this.getCall(completeUrl);
  }

  getPlanetSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'planets/schema';
    return this.getCall(completeUrl);
  }

  getFilmSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'films/schema';
    return this.getCall(completeUrl);
  }

  getSpecieSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'species/schema';
    return this.getCall(completeUrl);
  }

  getVehicleSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'vehicles/schema';
    return this.getCall(completeUrl);
  }

  getStarshipSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'starships/schema';
    return this.getCall(completeUrl);
  }

  getCall(url: string){
    console.log(url);
    return fetch(url)
    .then(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error._body}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }
}