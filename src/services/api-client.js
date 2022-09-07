export default class SwapiService {
    _api = 'https://swapi.dev/api'

    async getResource(url) {
        const res = await fetch(`${this._api}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json()
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    async getAllStarships() {
        const res = await this.getResource('/starships/');
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }
}