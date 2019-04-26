import { Component } from '@stencil/core';
import { SwapiService } from '../../services/swapi';

@Component({
    tag: 'sw-film-list',
    styleUrl: 'sw-film-list.css'
})
export class SwFilmList {
    private films: any;

    protected async componentWillLoad() {
        let service = new SwapiService();
        await service.getFilms().then(response => {
            const results = response.results;
            console.log("Film List Results:", results);
            this.films = results;
        });
    }

    render() {
        return (
            <div>
                <p>Hello SwFilmList!</p>
                <ul>
                    {this.films.map((film) =>
                        <sw-film-details film-url={film.url}></sw-film-details>
                    )}
                </ul>
            </div>
        );
    }
}
