import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Itasks } from '../../core/interfaces/itasks';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-taskitem',
  standalone: true,
  imports: [NgClass],
  templateUrl: './taskitem.component.html',
  styleUrl: './taskitem.component.css'
})
export class TaskitemComponent {

@Input({required:true})data!:Itasks

}
