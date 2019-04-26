import { Component, State } from '@stencil/core';
import { MDCSelect } from '@material/select';

import { SwapiService } from '../../services/swapi';

@Component({
    tag: 'sw-film-list',
    styleUrl: 'sw-film-list.scss'
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

    protected componentDidLoad() {
        let select = new MDCSelect(document.querySelector('.mdc-select'));

        select.listen('MDCSelect:change', () => {
            this.filmUrl = select.value;
        });
    }

    render() {
        return (
            <div>
                <p>Hello SwFilmList!</p>
                <div class="mdc-select">
                    <i class="mdc-select__dropdown-icon"></i>
                    <select class="mdc-select__native-control">
                        <option value="" disabled selected></option>
                        {this.films.map((film) =>
                            <option value={film.url} selected={this.filmUrl === film.url}>{film.title}</option>
                        )}
                    </select>
                    <label class="mdc-floating-label">Pick a Film</label>
                    <div class="mdc-line-ripple"></div>
                </div>
                <sw-film-details url={this.filmUrl}></sw-film-details>
            </div>
        );
    }
}
