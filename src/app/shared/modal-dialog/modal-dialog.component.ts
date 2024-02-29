import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.scss'
})
export class ModalDialogComponent {
  @Output() modalDissmiss = new EventEmitter();
  @Input({required:true}) productDetails!:Product | null;

  closeModal() {
    this.modalDissmiss.emit();
  }
}
