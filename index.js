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
       
        let generateLandingPage = () => {
    let generateLandingPage = document.getElementById("generateLandingPage");
    
    generateLandingPage.innerHTML = `
    <div class="bg-dark text-light">

  <!-- Top Nav bar -->
  <div id="bigCover" class="container-fluid pb-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <h2 class="text-left text-light fw-bold fs-4 mt-2 p-2">IBM</h2>
        <div class="d-flex justify-content-end">
          <input type="text" class="mt-2" placeholder="Search  &#128269">
          <a href="#"><i class="fa-solid fa-user mt-3 p-2"></i></a>
          <a id="hamburgerNav" onclick="hamburgerNav()" href="#"><i class="fa-solid fa-bars mt-3 p-2"></i></a>
        </div>
      </div>
      <hr class="bg-light mt-2">
    </div>

    <!-- Side nav -->
    <div id="mySidenav"></div>

    <!-- Hamburger Nav -->
    <div id="hamburgerNavItems">
      <ul>
        <a href="#">
          <li id="homeNav">Home</li>
        </a>
        <a href="#">
          <li id="aboutNav">About</li>
        </a>
        <a href="#">
          <li id="statsNav">Statistics</li>
        </a>
        <a href="#">
          <li id="coursesNav">Courses</li>
        </a>
      </ul>
    </div>

    <!-- SPSS Stats, Features, Pricing, Resources etc. -->
    <div class="col-lg-6 col-12">
      <div class="d-flex justify-content-evenly">
        <h5 class="m-2 fw-bold">SPSS Statistics</h5>
        <div class="d-flex justify-content-center">
          <h6 class="m-2">Features</h6>
          <h6 class="m-2">Pricing</h6>
          <h6 class="m-2">Resources</h6>
          <h6 class="m-2">FAQ</h6>
          <h6 class="m-2">Support</h6>
        </div>
      </div>
    </div>

    <!-- Empty column (right side) -->
    <div class="col-lg-6 col-12">
    </div>

    <!-- Showcase section -->
    <div class="row d-flex justify-content-center showcase mt-2">
      <div class="col-lg-5 col-12 d-flex justify-content-center flex-column text-center">
        <h2 class="fs-1 p-5">IBM SPSS Statitistcs</h2>
        <p class="mb-4">Uncover data insights that can help solve business and research problems</p>
        <div class="d-flex justify-content-center mt-2">
          <button class="btn btn-primary border-dark mx-2">Try SPSS Statistics at no cost <i class="fa-solid fa-arrow-right-long mx-2"></i></button>
          <button class="btn student_faculty_btn text-primary mx-2">Student and faculty version <i class="fa-solid fa-arrow-right-long text-primary mx-2"></i></button>
        </div>
        <a href="#" class="mt-4">See product documentation <i class="fa-solid fa-arrow-right-long text-primary"></i></a>
      </div>
      <div class="col-lg-5 col-12 d-block m-auto">
        <i id="chartPic" class="fa-solid fa-chart-bar mt-5"></i>
      </div>
    </div>
    </div>
    `;
    
  }
        
   let resetAll = () => {
 let resetAll = document.getElementById("resetAll");
 let allElements = document.querySelectorAll(".element");
  
  for(let i = 0; i < allElements.length; i++) {
    allElements[i].innerHTML = "";
  }
  
  
}     
