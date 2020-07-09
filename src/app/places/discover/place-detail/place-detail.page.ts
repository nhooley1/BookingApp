import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

   place: Place;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalController: ModalController,
    private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {

      if (!paramMap.has('placeId')) {
this.navCtrl.navigateBack('/places/tabs/discover');
return;
      }
this.place = this.placesService.getPlace(paramMap.get('placeId'));
  

    });
  }

  onOpenSheet() {
    this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
              this.onBookPlace('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
             this.onBookPlace('random');
          }
        },
        {
          text: 'Cancel',
          role: 'destructive'
        }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
  }

  onBookPlace(mode: 'select' | 'random') {

     const data = this.modalController.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}})
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      return data;
    }

    // this.navCtrl.navigateBack('places/tabs/discover')
    
  
  async onBooked() {
   const sheetData = await this.onOpenSheet();
  }
 

}

