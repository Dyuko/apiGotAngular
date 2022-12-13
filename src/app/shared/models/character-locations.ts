export class CharacterLocation {
    locations: string[];
    _id: string;
    name: string;
    slug: string;
    __v: number;

    constructor(locations:string[], _id:string, name:string, slug:string, __v:number) {
        this.locations = locations;
        this._id = _id;
        this.name = name;
        this.slug = slug;
        this.__v = __v;
    }
}

export class CharacterLocations {
    message: string;
    data: CharacterLocation[];

    constructor(message:string, data:CharacterLocation[]) {
        this.message = message;
        this.data = data;
    }
}
