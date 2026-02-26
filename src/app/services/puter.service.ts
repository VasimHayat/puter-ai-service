import { puter } from "@heyputer/puter.js";



import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class PuterService {

    async generateText(prompt: string) {
        // Example: Use AI to answer a question
       await puter.ai.chat(`Why did the chicken cross the road?`).then(console.log);
    
    // const result = await puter.ai.text({
    //   prompt: prompt,
    //   maxTokens: 100
    // });

    //return result.text; // generated text
  }

//   async generateImage(prompt: string): Promise<string> {
//     const result = await puter.ai.image({
//       prompt: prompt,
//       size: "1024x1024"
//     });

//     return result.url; // image URL
//   }


 async generateImage(prompt: string): Promise<HTMLImageElement> {
    return await puter.ai.txt2img(prompt, {
        model: "gemini-2.5-flash-image-preview", 
      width: 768,
      height: 768,
      quality:"high",
    });  
  }
}