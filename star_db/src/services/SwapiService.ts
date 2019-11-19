export interface Item {
    id: string
    name: string
}

export interface DetailedItem {
    id: string
    name: string
}

export interface Planet {
    id: string,
    name: string,
    population: string,
    orbitalPeriod: string,
    diameter: string,
    image: string,
}

export interface Character {
    id: string,
    name: string
}

enum Endpoint {
    Characters = 'people',
    Planets = 'planets',
    StarShips = 'starships'
}


export default class SwapiService {
    private apiBase: string = 'https://swapi.co/api'

    getResource = async (url: string): Promise<any> => {
        const res = await fetch(`${ this.apiBase }/${ url }`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${ url }. Received ${ res.status }`)
        }
        return await res.json()
    }

    private getItems = (endpoint: Endpoint): Promise<Item[]> => {
        return this.getResource(endpoint)
            .then(res => {
                const regex = new RegExp('\\/([0-9]*)\\/$')
                return res.results.map((character: any) => {
                    const characterId = regex.exec(character.url)[1]
                    return {
                        id: characterId,
                        name: character.name
                    }
                })
            })
    }

    private getItem = (endpoint: Endpoint, id: string): Promise<DetailedItem> => {
        return this.getResource(`${ endpoint.toString() }/${ id }`)
            .then(res => {
                console.log(res)
                return { id, name: res.name }
            })
    }

    getAllCharacters = (): Promise<Item[]> => {
        return this.getItems(Endpoint.Characters)
    }

    getAllPlanets = (): Promise<Item[]> => {
        return this.getItems(Endpoint.Planets)
    }

    getAllStarShips = (): Promise<Item[]> => {
        return this.getItems(Endpoint.StarShips)
    }

    getCharacter = (id: string): Promise<DetailedItem> => {
        return this.getItem(Endpoint.Characters, id)
    }

    getPlanet(id: string): Promise<Planet> {
        return this.getResource(`planets/${ id }`)
            .then(res => SwapiService.transformPlanet(id, res))
    }

    private static transformPlanet(id: string, planet: any): Planet {
        return {
            id,
            name: planet.name,
            population: planet.population,
            orbitalPeriod: planet.orbital_period,
            diameter: planet.diameter,
            image: `https://starwars-visualguide.com/assets/img/planets/${ id }.jpg`,
        }
    }

    private static transformCharacter(id: string, character: any): Character {
        return {
            id,
            name: character.name
        }
    }
}
