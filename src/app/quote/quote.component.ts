import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  /*numberofupvotes: any = VoteComponent.numberOfUpVote;
  numberOfDownVotes: any = VoteComponent.numberOfDownVote;*/
  
  quotes:Quotes[]=[
    new Quotes( 'Adiela','Coding is not for weaklings!','Admin',0,0, new Date(2020, 3, 27, 23, 1, 56, 2)),
    new Quotes('John C. Maxwell','People who use time wisely spend it on activities that advance their overall purpose in life.', 'Admin',0,0, new Date(2020, 3, 27, 23, 5, 43, 0)),
    new Quotes('Steven Pinker', 'I would argue that nothing gives life more purpose than the realization that every moment of consciousness is a precious and fragile gift.','Admin',0,0, new Date(2020, 3, 27, 23, 8, 21, 1)),
    new Quotes('Blake Mycoskie','If you organize your life around your passion, you can turn your passion into your story and then turn your story into something bigger―something that matters.', 'Admin',0,0, new Date(2020, 3, 28, 7, 42, 32, 4)),
    new Quotes('Benjamin Disraeli','The secret of success is constancy to purpose.', 'Admin',0,0, new Date(2020, 3, 28, 7, 43, 53, 2)),
    new Quotes('Theodore Roosevelt', 'It is hard to fail, but it is worse never have tried to succeed.','Admin',0,0, new Date(2020, 3, 28, 7, 45, 48, 2)),
    new Quotes('Henry David Thoreau','We were born to succeed, not to fail.','Admin',0,0, new Date(2020, 3, 28, 7, 46, 78, 3)),
    new Quotes('Steve Jobs','Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking. Don\'t let the noise of others\' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. ', 'Admin',0,0, new Date(2020, 3, 28, 7, 49, 97, 0))

  ]



  addNewQuote(quote){
    this.quotes.unshift(quote)
  }
  
  quoteDelete(quote){
    let toDelete = confirm(`Are you sure you want to delete this quote?`)
    if (toDelete){
      this.quotes.splice(quote.quote,1);
    }
  }
  
  likeButtonClick(i){
    this.quotes[i].numberOfUpVotes++;
  }
  dislikeButtonClick(i){
    this.quotes[i].numberOfDownVotes++;
  }

  constructor() {}

  ngOnInit(): void {
  }

}