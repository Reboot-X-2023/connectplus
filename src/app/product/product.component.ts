import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor( 
    private route: ActivatedRoute,
    private router: Router) { }

    
  productp() {
    this.router.navigate(['product']);

  }
  dash() {
    this.router.navigate(['dashboard']);

  }

  selectedProduct: any = null;
  selectedAction: string = '';
  how: string='';
  ben: string='';
  showDetails = true;
  showDetails1 = false;
  showDetails2 = false;
  showDetails3 = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  products = [
    {
      id: 1,
      name: 'Savings Account',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lloydsbank.com%2Fcredit-cards%2Fcashback.html&psig=AOvVaw0MsLuSDO26RsX3zRRLuKLr&ust=1745535289092000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDlqeqf74wDFQAAAAAdAAAAABAE',
      benefits: 'Earn interest on your deposits.',
      shareLink: 'https://bank.com/savings',
      howToGet: 'Visit branch or apply online.'
    },
    {
      id: 2,
      name: 'Credit Card',
      image: 'https://via.placeholder.com/100',
      benefits: 'Reward points and cashback.',
      shareLink: 'https://bank.com/credit-card',
      howToGet: 'Apply online with ID proof.'
    },
    {
      id: 3,
      name: 'Home Loan',
      image: 'https://via.placeholder.com/100',
      benefits: 'Low interest for long terms.',
      shareLink: 'https://bank.com/home-loan',
      howToGet: 'Submit income documents and ID.'
    },
    {
      id: 4,
      name: 'Car Loan',
      image: 'https://via.placeholder.com/100',
      benefits: 'Affordable EMIs for new cars.',
      shareLink: 'https://bank.com/car-loan',
      howToGet: 'Check eligibility and apply.'
    },
    {
      id: 5,
      name: 'Fixed Deposit',
      image: 'https://via.placeholder.com/100',
      benefits: 'Guaranteed returns.',
      shareLink: 'https://bank.com/fd',
      howToGet: 'Open via net banking.'
    },
    {
      id: 6,
      name: 'Current Account',
      image: 'https://via.placeholder.com/100',
      benefits: 'Higher transaction limits.',
      shareLink: 'https://bank.com/current',
      howToGet: 'Business proof needed.'
    },
    {
      id: 7,
      name: 'Personal Loan',
      image: 'https://via.placeholder.com/100',
      benefits: 'No collateral needed.',
      shareLink: 'https://bank.com/personal-loan',
      howToGet: 'KYC + credit score check.'
    },
    {
      id: 8,
      name: 'Education Loan',
      image: 'https://via.placeholder.com/100',
      benefits: 'Support for higher studies.',
      shareLink: 'https://bank.com/edu-loan',
      howToGet: 'Admission letter and documents.'
    },
    {
      id: 9,
      name: 'Travel Card',
      image: 'https://via.placeholder.com/100',
      benefits: 'Multi-currency convenience.',
      shareLink: 'https://bank.com/travel-card',
      howToGet: 'Available at branches.'
    },
    {
      id: 10,
      name: 'Gold Loan',
      image: 'https://via.placeholder.com/100',
      benefits: 'Instant funds against gold.',
      shareLink: 'https://bank.com/gold-loan',
      howToGet: 'Submit gold at branch.'
    }
  ];

setModalData(product: any, action: string) {
    this.selectedProduct = product;
    this.selectedAction = action;
    this.showDetails = !this.showDetails;
    this.showDetails1= !this.showDetails1;
  }
  setModalData2(product: any, action: string) {
    this.selectedProduct = product;
    this.selectedAction = action;
    this.showDetails = !this.showDetails;
    this.showDetails2= !this.showDetails2;

  }
  setModalData3(product: any, action: string) {
    this.selectedProduct = product;
    this.selectedAction = action;
    this.showDetails = !this.showDetails;
  }

}