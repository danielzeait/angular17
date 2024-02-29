import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

export interface Framework {
  name: string;
  releaseDate: any;
}

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,TitleComponent],
  template: `
    <app-title [title]="currentFramework()"/>
    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  )
  
  public frameworkAsSignal = signal<Framework>({
    name:'Angular',
    releaseDate:2014
  });
  
  public frameworkAsProperty:Framework = {
    name:'Angular',
    releaseDate:2014,
  };

  constructor(){

    setTimeout(() => {

      //this.frameworkAsProperty.name = 'React';
      
      this.frameworkAsSignal.update((value:Framework) => ({
        ...value,
        name:'Angular 17',
        releaseDate:2023,
      }))
    
      console.log('Hecho');
    
    }, 3000);

  }
  

}
