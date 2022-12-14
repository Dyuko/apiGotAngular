export class House {
    titles: string[];
    overlords: string[];
    ancestralWeapon: any[];
    _id: string;
    name: string;
    image: string;
    coatOfArms: string;
    words: string;
    currentLord: string;
    seat: string;
    region: string;
    founded: string;
    founder: string;
    cadetBranch: string;
    heir: string;
    isExtinct: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;

    constructor(
        titles: string[],
        overlords: string[],
        ancestralWeapon: any[],
        id: string,
        name: string,
        image: string,
        coatOfArms: string,
        words: string,
        currentLord: string,
        seat: string,
        region: string,
        founded: string,
        founder: string,
        cadetBranch: string,
        heir: string,
        isExtinct: boolean,
        createdAt: Date,
        updatedAt: Date,
        _v: number
    ) {
        this.titles = titles;
        this.overlords = overlords;
        this.ancestralWeapon = ancestralWeapon;
        this._id = id;
        this.name = name;
        this.image = image;
        this.coatOfArms = coatOfArms;
        this.words = words;
        this.currentLord = currentLord;
        this.seat = seat;
        this.region = region;
        this.founded = founded;
        this.founder = founder;
        this.cadetBranch = cadetBranch;
        this.heir = heir;
        this.isExtinct = isExtinct;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.__v = _v;
    }
}
