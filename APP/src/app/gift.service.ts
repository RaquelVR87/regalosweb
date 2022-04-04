import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

export interface Gift {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class GiftService {


  private giftList: Gift[] = [
    { name: "Medias" },
    { name: "Camiseta" },
    { name: "Pantalones" },
  ]

  private giftListObservable = new BehaviorSubject<Gift[]>(this.giftList);

  getGiftList(): Observable<Gift[]>{
    return this.giftListObservable;
  }

  addGift(gift: Gift): void {
    this.giftList.push(gift)
    this.giftListObservable.next(this.giftList);
  }

  removeGift(name: string){
    let newArray = this.giftList.filter((gift)=> {
      return gift.name !== name
    })
    this.giftList = newArray

    this.giftListObservable.next(this.giftList);
  }

  clear(): void{
    this.giftList = []

    this.giftListObservable.next(this.giftList);
  }
}
