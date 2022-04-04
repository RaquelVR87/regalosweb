import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Gift, GiftService } from '../gift.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.scss']
})
export class GiftListComponent implements OnInit{

  giftList!:Gift[]

  constructor(private readonly giftService: GiftService ) { }

  ngOnInit(): void {
    this.giftService.getGiftList().subscribe(res =>{
      this.giftList = res
    })
  }

  deleteAll(){
    this.giftService.clear()
  }
}
