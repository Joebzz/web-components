export class SwapiService {
  constructor(private baseUrl = 'https://swapi.co/api/') { }

  getRoot(wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl;
    if (wookiee) { completeUrl += '?format=wookiee' }
    return this.getAllData(completeUrl);
  }

  getPeople(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'people/';
    if (page || wookiee) { completeUrl += '?' }
    if (page) { completeUrl += 'page=' + page }
    if (page && wookiee) { completeUrl += '&' }
    if (wookiee) { completeUrl += 'format=wookiee' }
    return this.getAllData(completeUrl);
  }

  getPlanets(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'planets/';
    if (page || wookiee) { completeUrl += '?' }
    if (page) { completeUrl += 'page=' + page }
    if (page && wookiee) { completeUrl += '&' }
    if (wookiee) { completeUrl += 'format=wookiee' }
    return this.getAllData(completeUrl);
  }

  getFilms(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'films/';
    if (page || wookiee) { completeUrl += '?' }
    if (page) { completeUrl += 'page=' + page }
    if (page && wookiee) { completeUrl += '&' }
    if (wookiee) { completeUrl += 'format=wookiee' }
    return this.getAllData(completeUrl);
  }

  getSpecies(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'species/';
    if (page || wookiee) { completeUrl += '?' }
    if (page) { completeUrl += 'page=' + page }
    if (page && wookiee) { completeUrl += '&' }
    if (wookiee) { completeUrl += 'format=wookiee' }
    return this.getAllData(completeUrl);
  }

  getVehicles(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'vehicles/';
    if (page || wookiee) { completeUrl += '?' }
    if (page) { completeUrl += 'page=' + page }
    if (page && wookiee) { completeUrl += '&' }
    if (wookiee) { completeUrl += 'format=wookiee' }
    return this.getAllData(completeUrl);
  }

  getStarships(page: number = null, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'starships/';
    if (page || wookiee) { completeUrl += '?' }
    if (page) { completeUrl += 'page=' + page }
    if (page && wookiee) { completeUrl += '&' }
    if (wookiee) { completeUrl += 'format=wookiee' }
    return this.getAllData(completeUrl);
  }

  getPerson(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'people/' + id + '/';
    if (wookiee) { completeUrl += '?format=wookiee' }
    return this.getData(completeUrl);
  }

  getPlanet(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'planets/' + id + '/';
    if (wookiee) { completeUrl += '?format=wookiee' }
    return this.getData(completeUrl);
  }

  getFilm(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'films/' + id + '/';
    if (wookiee) { completeUrl += '?format=wookiee' }
    return this.getData(completeUrl);
  }

  getSpecie(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'species/' + id + '/';
    if (wookiee) { completeUrl += '?format=wookiee' }
    return this.getData(completeUrl);
  }

  getVehicle(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'vehicles/' + id + '/';
    if (wookiee) { completeUrl += '?format=wookiee' }
    return this.getData(completeUrl);
  }

  getStarship(id: number, wookiee: boolean = false): Promise<any> {
    let completeUrl: string = this.baseUrl + 'starships/' + id + '/';
    if (wookiee) { completeUrl += '?format=wookiee' }
    return this.getData(completeUrl);
  }

  getPersonSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'people/schema';
    return this.getData(completeUrl);
  }

  getPlanetSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'planets/schema';
    return this.getData(completeUrl);
  }

  getFilmSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'films/schema';
    return this.getData(completeUrl);
  }

  getSpecieSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'species/schema';
    return this.getData(completeUrl);
  }

  getVehicleSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'vehicles/schema';
    return this.getData(completeUrl);
  }

  getStarshipSchema(): Promise<any> {
    let completeUrl: string = this.baseUrl + 'starships/schema';
    return this.getData(completeUrl);
  }

  getData(url: string) {
    //console.log("getData", url);
    return fetch(url).then((response: Response) => response.json());
  }

  getAllData(url: string, data = []) {
    return new Promise((resolve, reject) => fetch(url, { mode: "cors" })
      .then(response => {
        if (response.status !== 200) {
          throw `${response.status}: ${response.statusText}`;
        }
        response.json().then(newData => {
          data = data.concat(newData.results);

          if (newData.next) {
            this.getAllData(newData.next, data).then(resolve).catch(reject)
          } else {
            resolve(data);
          }
        }).catch(reject);
      }).catch(reject));
  }
}