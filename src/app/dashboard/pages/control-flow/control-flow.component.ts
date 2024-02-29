import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2 = signal([]);
  
  constructor(){
  }
  
  public toggleContent(){
    this.showContent.update(value => !value);
  }

}