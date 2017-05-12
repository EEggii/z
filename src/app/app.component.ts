import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'app works!';
  list: Array<String> = ['반포식스', '맥도날드', '얼룩도야지', '코다리냉면', '제일제면소', 
                                  '한우국밥', '홍대칼족', '진짜돼지', '사보텐', '도원참치', '센트럴차이나', 
                                  '매드후라이드치킨', '양재정육식당', '라멘천하', '도니족발', '조선육회', 
                                  '이쿠', '코코이찌방야', '하코야', '소호정', '153포인트부대찌개', 
                                  '자니로켓', '서호돈까스', '홍대돈부리'];
  theChosenOne: String = 'The Chosen One';
  others: Array<String> = [];
  shuffling: Boolean = false;
  clicked: Boolean = false;

  constructor () {

  }

  shuffle(list: Array<String>) {
    this.shuffling = true;
    for (let i = list.length - 1; i > 0 ; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    this.shuffling = false;
    return list;
  }

  choice() {
    this.clicked = true;
    this.others = [];
    let shuffledList = this.shuffle(this.list);
    this.theChosenOne = shuffledList[0];
    for (let i = 1 ; i < 6 ; i++) {
      this.others.push(shuffledList[i]);
    }
  }

  isShuffling() {
    return this.shuffling;
  }
}
