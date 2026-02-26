import { Component } from "@angular/core";
import { PuterService } from '../services/puter.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: "app-ai-generator",
    templateUrl: "./ai-generator.component.html",
    styleUrls: ["./ai-generator.component.scss"],
    imports: [CommonModule, FormsModule]
})
export class AiGeneratorComponent {
    prompt = '';
    generatedImage: string | null = null;
    loading = false;

    constructor(private puterService: PuterService) { }


    styles = [
        'photorealistic',
        'cinematic',
        'oil painting',
        'cyberpunk',
        'watercolor',
        '8k ultra'
    ];

    ratios = ['1:1', '2:3', '3:2'];

    selectedStyle = '';
    selectedRatio = '1:1';


    selectStyle(style: string) {
        this.selectedStyle = style;
    }

    selectRatio(r: string) {
        this.selectedRatio = r;
    }

    async generateImage() {
        if (!this.prompt) return;
        this.generatedImage = null;
        this.loading = true;

        const fullPrompt = `${this.prompt}, ${this.selectedStyle}`;

        const img = await this.puterService.generateImage(fullPrompt);

        await img.decode(); // 🔥 modern way (non-blocking)

        this.loading = false;
        console.log('Generated image:', this.loading);
        this.generatedImage = img.src;
    }
}
