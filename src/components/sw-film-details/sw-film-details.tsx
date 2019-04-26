import { Component, Prop } from '@stencil/core';
import { SwapiService } from '../../services/swapi';

@Component({
    tag: 'sw-film-details',
    styleUrl: 'sw-film-details.scss'
})
export class SwFilmDetails {
    /**
     * The URL for the film
     */
    @Prop() filmUrl: string;

    /**
     * The id for the film
     */
    @Prop() filmId: number = 1;

    private dataPromise: Promise<any>;
    private film: any;

    constructor(private service = new SwapiService()) { }

    protected async componentWillLoad() {
        if (this.filmUrl) {
            this.dataPromise = this.service.getData(this.filmUrl);
        }
        else if (this.filmId) {
            this.dataPromise = this.service.getFilm(this.filmId);
        }
        await this.updateFilm();
    }

    protected async componentWillUpdate() {
        console.log("Component Will Update");
        if (this.filmUrl) {
            this.dataPromise = this.service.getData(this.filmUrl);
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
            console.log("Error", error)
        });
    }

    render() {
        return (
            <div>
                Title: {this.film.title}; Director: {this.film.director}; Release Date:{this.film.release_date}.
            </div>
        );
    }
}
