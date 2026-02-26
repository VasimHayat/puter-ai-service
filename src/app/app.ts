import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AiGeneratorComponent } from './ai-generator/ai-generator.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AiGeneratorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ai-img-generator');
}
