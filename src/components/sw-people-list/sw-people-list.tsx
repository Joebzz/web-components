import { Component, h } from '@stencil/core';
import { SwapiService } from '../../services/swapi';

@Component({
    tag: 'sw-people-list',
    styleUrl: 'sw-people-list.scss'
})
export class SwPeopleList {

    private people: any;

    protected async componentWillLoad() {
        let service = new SwapiService();
        await service.getPeople().then(response => {
            this.people = response;
        });
    }

    render() {
        return (
            <div>
                <p>Hello SwPeopleList!</p>
                <ul>
                    {this.people.map((person) =>
                        <li>{person.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}
