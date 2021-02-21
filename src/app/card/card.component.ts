import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">HIMALAYA MOUNTAIN</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Some quick example text to build on the card title and make up the bulk of the card's content.{{name}}!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
  </div>
`
})
export class CardContent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(CardContent);
    modalRef.componentInstance.name = 'World';
  }
}
