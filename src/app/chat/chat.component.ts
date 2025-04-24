import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  constructor( 
    private route: ActivatedRoute,
    private router: Router) { }

    productp() {
      this.router.navigate(['product']);
  
    }
    dash() {
      this.router.navigate(['dashboard']);
  
    }

    chat() {
      this.router.navigate(['chat']);
  
    }


  public questionsAnswers = [
    { question: 'What is best card for travel?', answer: 'The Lloyds Bank Travel Smart card is a great option for travel, offering no foreign exchange fees and convenient usage abroad.' },
    { question: 'How to get that?', answer: 'Go to lloyds banking app or click here- www.lloydsbanking.com/card/travel or call 033123456' },
    { question: 'What is club lloyds?', answer: 'Club Lloyds is a current account from Lloyds Bank that offers perks like lifestyle benefits, credit interest, and no debit card fees abroad' }
  ];

  public userMessages: { question: string, answer: string }[] = [];
  public suggestions = this.questionsAnswers.map(q => q.question);

  handleSendMessage(userQuestion: string) {
    const matchedQnA = this.questionsAnswers.find(q => q.question === userQuestion);
    if (matchedQnA) {
      this.userMessages.push(matchedQnA);
    } else {
      this.userMessages.push({ question: userQuestion, answer: 'Sorry, I don\'t have an answer for that.' });
    }
  }
}