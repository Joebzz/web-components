import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { SwapiService } from '../../services/swapi';

@Component({
    tag: 'sw-person-details',
    styleUrl: 'sw-person-details.scss'
})
export class SwPersonDetails {
    /**
     * The URL for the person
     */
    @Prop() url: string;

    /**
     * The id for the person
     */
    @Prop() personId: number = 1;

    private dataPromise: Promise<any>;
    private person: any;

    private service = new SwapiService();
    
    protected async componentWillLoad() {
        if (this.url) {
            this.dataPromise = this.service.getData(this.url);
        }
        else if (this.personId) {
            this.dataPromise = this.service.getPerson(this.personId);
        }
        await this.updatePerson();
    }

    protected async componentWillUpdate() {
        if (this.url) {
            this.dataPromise = this.service.getData(this.url);
        }
        else if (this.personId) {
            this.dataPromise = this.service.getPerson(this.personId);
        }
        await this.updatePerson();
    }

    private async updatePerson() {
        await this.dataPromise.then(response => {
            this.person = response;
        }).catch(error => {
            console.log("Error", error)
        });
    }

    @Event() openPersonDetails: EventEmitter;
    openPersonDetailsHandler(person: any) {
      this.openPersonDetails.emit(person);
    }

    render() {
        return (
            <div>
                <span onClick={() => this.openPersonDetailsHandler(this.person)}>{this.person.name}</span>
            </div>
        );
    }
}
