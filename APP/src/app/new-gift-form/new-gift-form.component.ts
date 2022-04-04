import { Component, OnInit } from '@angular/core';
import { GiftService } from '../gift.service';

@Component({
  selector: 'app-new-gift-form',
  templateUrl: './new-gift-form.component.html',
  styleUrls: ['./new-gift-form.component.scss']
})
export class NewGiftFormComponent implements OnInit {

  newGiftName = ""

  constructor(private readonly giftService: GiftService ) { }

  ngOnInit(): void {
  }

  addNewGift(){
    console.log("onclick", this.newGiftName);
    
    if(this.newGiftName !== ""){
      let gift = { name: this.newGiftName}
      this.giftService.addGift(gift)
    }
    this.newGiftName = ""
  }
}
