import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-challange2',
  templateUrl: './challange2.component.html',
  styleUrls: ['./challange2.component.css']
})
export class Challange2Component implements OnInit {
  name = 'Angular';

  ngOnInit() {
    console.log('This is init method');
  }
  alertWithSuccess() {
    Swal.fire('Thank you...', 'Your payment succesfully!', 'success')
  }
  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to buy this?',
      text: 'You cannot undo the process!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, buy it!',
      cancelButtonText: 'No, i wanna chose other!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Succes!',
          'Your Payment Have Been Succes',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Cancel Payment :)',
          'error'
        )
      }
    })
  }

}
