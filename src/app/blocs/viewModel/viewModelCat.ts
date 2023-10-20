import { ApiCatsService } from "src/app/data/api-cats.service";
import { Cat } from "src/app/models/Cat";
import { environment } from "src/environments/environment";

export class ViewModelCat {

  //#region Properties

  cats: Cat[] = []

  //#endregion

  //#region Constructors

  constructor(
    private apiCatsService: ApiCatsService
  ) { }

  //#endregion

  //#region Methods

  async getCats(): Promise<Cat[]> {

    this.cats = []

    const result: any[] = await this.apiCatsService
      .getCats()

    this.cats = result.map<Cat>(x => ({
      breedName: x.name,
      affectionLevel: x.affection_level,
      imageUrl: `${environment.hostImage}${x.reference_image_id}.jpg`,
      intelligence: x.intelligence,
      origin: x.origin
    }))

    return this.cats
  }

  //#endregion
}