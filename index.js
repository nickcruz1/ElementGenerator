let generateText = () => {
  let generateText = document.querySelector("#generateText");
  
  generateText.innerHTML = `
  <div class="text-dark pt-2 pb-2 text-center">Text</div>
  `;
  
}

let generateHeading = () => {
  let generateHeading = document.querySelector("#generateHeading");
  
  generateHeading.innerHTML = `<h2 class="text-primary text-center pt-2 pb-2 fw-bold fs-4">Heading</h2>`;
  
}

  let generateBtn = () => {
    let generateBtn = document.getElementById("generateBtn");
    
    generateBtn.innerHTML = `<div class="btn btn-success text-light border-dark w-50 d-block m-auto">Button</button>`;
    
  }
