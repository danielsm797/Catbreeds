import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  async showLoading() {

    return await this.loadingCtrl
      .create({
        animated: true,
        message: 'Cargando...'
      })
  }

  async showMessage(header: string, message: string, success: boolean) {

    const toast = await this.toastCtrl
      .create({
        animated: true,
        message,
        header,
        icon: success ? 'checkmark-circle-outline' : 'close-circle-outline',
        color: success ? 'success' : 'danger'
      })

    toast.present()
  }
}
