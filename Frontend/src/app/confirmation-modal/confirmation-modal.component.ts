import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-confirmation-modal',
  imports: [],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.css'
})
export class ConfirmationModalComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Output() confirmEvent = new EventEmitter<boolean>();
  @Input() idModal: string = 'closeOffer';
  private modal: any;

  @ViewChild('modalElement') modalElement!: ElementRef;
  ngAfterViewInit() {
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
  }
  open() {
    this.modal?.show();
  }
  cerrarModal() {
    this.modal.hide();
  }
  confirm() {
    this.confirmEvent.emit(true);
  }
}
