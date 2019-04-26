import { Component, Prop } from '@stencil/core';
import { SwapiService } from '../../services/swapi';


@Component({
    tag: 'sw-film-details',
    styleUrl: 'sw-film-details.css'
})
export class SwFilmDetails {
    @Prop() filmUrl: string;

    private film: any;
    
    protected async componentWillLoad() {
        let service = new SwapiService();
        console.log("Film Url:", this.filmUrl);
        await service.getCall(this.filmUrl).then(response => {
            console.log("Film Result:", response);
            this.film = response;
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
