import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage {

  constructor(public actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      buttons: [
        {},
      ],
      cssClass: 'custom-css',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'ios'
    });

    actionSheet.present();
  }
  
}