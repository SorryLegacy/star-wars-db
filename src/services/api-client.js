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
        return res.results.map(this._transformPerson);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getAllStarships() {
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet)

    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person)
    }

    _extraId(item) {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    _transformPlanet(planet) {

        return {
            id: this._extraId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship(starship){
        return {
            id: this._extraId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPerson(people) {
        return {
            id: this._extraId(people),
            name: people.name,
            gender: people.gender,
            birthYear: people.birthYear,
            eyeColor: people.eyeColor
        }
    }
}