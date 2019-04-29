import { SwapiService } from './swapi';

beforeEach(() => {
    this.service = new SwapiService();
});

describe('getRoot using service', () => {
    it('getRoot should return data', async () => {
        await this.service.getRoot().then(response => {
            expect(response).toBeDefined();
        }).catch(error => {
            console.log("Error", error);
        });
    });
});
