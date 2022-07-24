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

    let generateParagraph = () => {
    let generateParagraph = document.querySelector("#generateParagraph");
    
    generateParagraph.innerHTML = `<p class="text-center pt-2 pb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem dicta atque voluptate ea explicabo libero eligendi commodi sed sit pariatur illum beatae vel modi quaerat, in nemo laudantium incidunt?</p>`
    
  }
    
      let generateList = () => {
    let generateList = document.querySelector("#generateList");
    
    generateList.innerHTML = `<ul class="text-center pt-2 pb-2">
    <li>List Item 1
<li>List Item 2
<li>List Item 3
</ul>
    `;
    
  }
      
       let generateShapes = () => {
    let generateShapes = document.getElementById("generateShapes");
    
    generateShapes.innerHTML = `<div class="d-flex justify-content-center">
    <i class="fa-solid fa-shapes text-danger fs-5 m-1"></i>
    <i class="fa-solid fa-shapes text-info fs-5 m-1"></i>
    <i class="fa-solid fa-shapes text-primary fs-5 m-1"></i>
    </div>`
    
  }
