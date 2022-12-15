export class Path {
    from: any;
    to: any;
    path: any[][];
    alive: boolean;

    constructor(
        from: any,
        to: any,
        path: any[][],
        alive: boolean
    ) {
        this.from = from
        this.to = to
        this.path = path
        this.alive = alive
    }
}

export class CharacterPath {
    path: Path[];
    _id: string;
    name: string;
    __v: number;

    constructor(
        path: Path[],
        id: string,
        name: string,
        _v: number
    ) {
        this.path = path
        this._id = id
        this.name = name
        this.__v = _v
    }
}
