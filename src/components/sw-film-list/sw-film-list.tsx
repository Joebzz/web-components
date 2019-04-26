import { Component, State } from '@stencil/core';
import { SwapiService } from '../../services/swapi';

@Component({
    tag: 'sw-film-list',
    styleUrl: 'sw-film-list.css'
})
export class SwFilmList {
      /**
   * The Film Title 
   */
    @State() filmUrl: string;

    private films: any;

    protected async componentWillLoad() {
        let service = new SwapiService();
        await service.getFilms().then(response => {
            this.films = response;
        });
    }

    protected handleSelect(event) {
      this.filmUrl = event.target.value;
    }

    render() {
        return (
            <div>
                <p>Hello SwFilmList!</p>
                <select onInput={(event) => this.handleSelect(event)}>
                    {this.films.map((film) =>
                        <option value={film.url} selected={this.filmUrl === film.url}>{film.title}</option>
                    )}
                </select>
                <sw-film-details film-url={this.filmUrl}></sw-film-details>
            </div>
        );
    }
}
