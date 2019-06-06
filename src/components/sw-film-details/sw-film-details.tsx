import { Component, Prop, h } from '@stencil/core';
import { SwapiService } from '../../services/swapi';

@Component({
    tag: 'sw-film-details',
    styleUrl: 'sw-film-details.scss'
})
export class SwFilmDetails {
    /**
     * The URL for the film
     */
    @Prop() url: string;

    /**
     * The id for the film
     */
    @Prop() filmId: number = 1;

    private dataPromise: Promise<any>;
    private film: any;
    private service = new SwapiService();

    protected async componentWillLoad() {
        if (this.url) {
            this.dataPromise = this.service.getData(this.url);
        }
        else if (this.filmId) {
            this.dataPromise = this.service.getFilm(this.filmId);
        }
        await this.updateFilm();
    }

    protected async componentWillUpdate() {
        if (this.url) {
            this.dataPromise = this.service.getData(this.url);
        }
        else if (this.filmId) {
            this.dataPromise = this.service.getFilm(this.filmId);
        }
        await this.updateFilm();
    }

    private async updateFilm() {
        await this.dataPromise.then(response => {
            this.film = response;
        }).catch(error => {
            console.log("Error", error);
        });
    }

    render() {
        return (
            <div class="mdc-card mdc-card--outlined">
                Title: {this.film.title}; Director: {this.film.director}; Release Date:{this.film.release_date}.
                <ul class="mdc-list">
                    {this.film.characters.map(character =>
                        <li class="mdc-list-item" tabindex="0">
                            <span class="mdc-list-item__text">
                                <sw-person-details url={character}></sw-person-details>
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
