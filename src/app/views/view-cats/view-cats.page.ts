import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { ViewModelCat } from 'src/app/blocs/viewModel/viewModelCat';
import { ApiCatsService } from '../../data/api-cats.service';
import { UiService } from 'src/app/helpers/ui.service';

@Component({
  selector: 'app-view-cats',
  templateUrl: './view-cats.page.html',
  styleUrls: ['./view-cats.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViewCatsPage implements OnInit {

  //#region Properties

  vmCats: ViewModelCat = new ViewModelCat(this.apiCatsService)

  //#endregion

  //#endregion Constructors

  constructor(
    private apiCatsService: ApiCatsService,
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.#init()
  }

  //#endregion

  //#region Methods

  async #init(event?: any) {

    const loading = await this.uiService.showLoading()
    loading.present()

    try {

      await this.vmCats.getCats()

      setTimeout(() => {
        (event as InfiniteScrollCustomEvent).target.complete();
      }, 500);

    } catch (error) {

      this.uiService
        .showMessage(
          'Obtener gatos',
          'Ha ocurrido un error realizando la acción. Pruebe de nuevo más tarde',
          false
        )

    } finally {

      loading.dismiss()
    }
  }

  onIonInfinite(event: any) {
    this.vmCats.page++
    this.#init(event)
  }

  //#endregion
}
