import { ApiCatsService } from "src/app/data/api-cats.service";
import { Cat } from "src/app/models/Cat";
import { environment } from "src/environments/environment";

export class ViewModelCat {

  //#region Properties

  cats: Cat[] = []

  page: number = 0

  //#endregion

  //#region Constructors

  constructor(
    private apiCatsService: ApiCatsService
  ) { }

  //#endregion

  //#region Methods

  async getCats() {

    const result: any[] = await this.apiCatsService
      .getCats(this.page)

    this.cats.push(...result.map<Cat>(x => ({
      breedName: x.name,
      affectionLevel: x.affection_level,
      imageUrl: `${environment.hostImage}${x.reference_image_id}.jpg`,
      intelligence: x.intelligence,
      origin: x.origin
    }))
    )
  }

  //#endregion
}