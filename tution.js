// tution.js


class Tution {
   timmer (data){
    setTimeout(() => {
        document.getElementById("root").innerHTML=data;
      }, 2000);
  }
     root = document.getElementById("root").innerHTML
    handleUserData(userData) {
      console.log("Received user data:", userData);
      // You can access the username and className here
      let username = userData.username;
    let className = userData.className;
    let board = userData.subject;

    // Log all the data
      console.log(username);
      console.log(className);
      console.log(typeof(className));
      console.log(board);
      console.log(typeof(board));

      document.getElementById("root").innerHTML = `
        <center><div id="form_cont">  <h1> login sucessfull ${name(username)} loding.............</h1></div></center>
         `;
       // aad delay 
       setTimeout(() => {
        document.getElementById("root").innerHTML=`<center><div id="form_cont">  <h1> redirecting to webpage  </h1>`;
      }, 2000);
     
  


      
      setTimeout(() => {
        
         // Redirect to home.html
      //  window.location.href = "./home.html";

     

    //Render the navigation bar
    // Render the navigation bar
  if (className === 9) {
    const navBar = document.getElementById("root");
    navBar.innerHTML = `
    <nav>  
    <ul>
        <li><a href="#" onclick="renderBio9()">Bio</a></li>
        <li><a href="#" onclick="renderPhysic9()">Physic</a></li>
        <li><a href="#" onclick="renderChemistry9()">Chemistry</a></li>
        <li><a href="#" onclick="renderTest9()">test</a></li>
        <li><a href="#" onclick="renderimportant9()">important point </a></li>
        <li><a href="./home.html">about me   </a></li>
        </ul>
      </nav>
       <div id="content">
       <h1> ${name(username)} go and check all subject  data </h1>
       </div>
    `;
    document.body.appendChild(navBar);
  }
  else if (className === 10 && board === 3) {
    const navBar = document.getElementById("root");
    navBar.innerHTML = `
    <nav>  
    <ul>
        <li><a href="#" onclick="renderbio_10jac()">Bio</a></li>
        <li><a href="#" onclick="rendermaths_10jac()">maths</a></li>
        <li><a href="#" onclick="renderphysic_10jac()">Physic</a></li>
        <li><a href="#" onclick="renderchemistory_10jac()">Chemistry</a></li>
        <li><a href="#" onclick="renderTest10_jac()">test</a></li>
        <li><a href="./home.html">about me   </a></li>
        </ul>
      </nav>
       <div id="content">
       <h1> ${name(username)} go and check all subject  data </h1>
       </div>
    `;
    document.body.appendChild(navBar);
  }
  else if (className === 10 && board ===2 ) {
    const navBar = document.getElementById("root");
    navBar.innerHTML = `
    <nav>
    <ul>
    <li><a href="#" onclick="renderbio_10icse()">Bio</a></li
    <li><a href="#" onclick="rendermaths_10icse()">maths</a>
    <li><a href="#" onclick="renderphysic_10icse()">Physic</a>
    <li><a href="#" onclick="renderchemistory_10icse()">Chemistry</a>
    <li><a href="#" onclick="render_imp10_icse()">Important Question</a>
    <li><a href="#" onclick="renderTest10_icse()">test</a>
    <li><a href="./home.html">about me   </a></li>
    </ul>
    </nav>
    <div id="content">
    <h1> ${name(username)} go and check all subject  data </h1>
    `
    }
  
  }, 3000);

    
    }

}


function renderimportant9(){
  document.getElementById("content").innerHTML=`<nav>
  <ul>
  <li><a onclick="renderPhysicIMP_9()">physic</a></li>
  <li>chemistory</li>
  <li>bio</li></ul>
  </nav>
  <div id="important"></div>`
}

function renderPhysicIMP_9(){
  document.getElementById("important").innerHTML=`
  <ul>
 

  </ul>
  `
}





// Define the render methods for each subject
function renderPhysic9() {
  document.getElementById("content").innerHTML = `<h1>Physics</h1>
    <div class="heading">Curious Point - Physics</div>
    
    <div >
    <p>Welcome to the physics page!</p>
    <p>Here you will find all the physics related content.</p>


    <p class="chapter_pdf_class9">
        class 9 chapter wise  pdf link <br>
        </p>
        <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
        <p class="chapter_pdf_class10"><ul>
  <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/motion in 1D.pdf" onclick="openPdf(this.href)">Motion in 1D  </a></li>
  <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/LAWS OF MOTION.pdf" onclick="openPdf(this.href)"> Law of motion </a></li>
</ul></p>
   <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
  
       
        `;
}

function renderChemistry9() {
  document.getElementById("content").innerHTML= `
    <h1>Chemistry</h1>
    <p class="chapter_pdf_class9">
        class 9 chapter wise  pdf link <br>
        </p>
        <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
        <p class="chapter_pdf_class10"><ul>
            <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/water.pdf"  >water  </a></li>
            <!-- <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/cell the fundamental unit of life.pdf"  > cell</a> -->
          </ul></p>
        
        
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
        
  `;
}

function renderBio9() {
  document.getElementById("content").innerHTML = `<h1>Biology</h1><div class="heading">Curious Point - Biology</div>
    <p>Welcome to the biology page!</p>
    <p class="chapter_pdf_class9">
        class 9 chapter pdf link <br>
        </p>
        <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
        <p class="chapter_pdf_class10"><ul>
            <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/polination and fertilization.pdf"  >polination and fertilization pdf </a></li>
            <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/cell the fundamental unit of life.pdf"  > cell</a></li>
            <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/class-9-tissues-ppt.pdf"  > tissues</a></li>
          <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/dugestive system.pdf"  > digestive system </a></li>
          <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/respration system .pdf"  > respration in plant   </a></li>
           <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/5 classes of kingdoms.pdf"  >Five Kingdom Classification </a></li>
       <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/Five Kingdom of classification part 2 .pdf"  > Five Kingdom of classification part 2   </a></li>
       <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/seed .pdf"  > seed   </a></li>
      <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/flower.pdf"  > flower   </a></li>
          </ul></p>
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
  
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
       
        `;
}

function name(usear){
  
  if ( usear === "avi09"){

    return "welcome Avinashi ";
  }
  else if (usear ==="ansh"){
    return "welcome Ansh";
  }else if (usear=== "shruti"){
    return "welcome Shruti";
  }
}



function openPdf(link) {
  // Get the iframe element
  const iframe = document.getElementsByName("pdf_frame")[0];
  
  // Set the src attribute of the iframe to the clicked link
  iframe.src = link;
  
  // Show the loading div
  document.getElementById("loading").style.display = "block";
  
  // Hide the loading div after 2 seconds (assuming the pdf will be loaded by then)
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 2000);
}

// Add an onclick event to the chapter links
const links = document.getElementsByClassName("link_pdf");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    openPdf(this.href);
  });
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~{9 test }~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function renderTest9(){
  document.getElementById("content").innerHTML =`
  <br><br>
  <div class="header" >WELCOME TO TEST PAGE </div><br><br>
   <p class="test">
    ACTIVE TEST LINK HERE :bio chaper 1 cell<br>
    chemistory test chapter name {chemical change and reaction ; water } :<br><br>  
    <a class="link" onclick="form_unhide()" >click me </a>
    
  </p>
  <div class="test_code" id="test_code">
   <center><form id="myForm" action="" method="post" onsubmit="testcode(); return false;">
    <lable for="code">enter your test code </lable>
    <input type="text" name="code" id="code" placeholder="enter your code">
    <input type="submit" value="Submit">
   </form></center> 
  </div>
  
  
  <br><br>
    <p><H1>TEST RESULT </H1>
     <center>
<table>
  <th></th>
 <th>Test result </th><th></th>
  <tr>
    <td>Chapter</td>
    <td>Marks obtain</td>
    <td>Full marks</td>
  </tr>
  <tr>
    <td>cell</td>
    <td>58</td>
    <td>100</td>
  </tr>
  <tr>
    <td>nutrition</td>
    <td>87</td>
    <td>100</td>
  </tr>
  <tr>
    <td>Hygiene</td>
    <td>63</td>
    <td>80</td>
  </tr>
  <tr>
    <td>skeleton</td>
    <td>81</td>
    <td>100</td>
  </tr>
</table>
</center>
    </p>

  `
}
// ***********************************************{10 jac }************************************************************
 function renderphysic_10jac(){
  document.getElementById("content").innerHTML =`<div id="physic"></div>
        <!-- <div class="heading">Curious Point - Biology</div> -->
        <h1>physic</h1>
        <p>Welcome to the biology page!</p>
        <p class="chapter_pdf_class9">
            class 10 jac  chapter pdf link <br>
            </p>
            <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
            <p class="chapter_pdf_class10"><ul>
                <li class="link"><a class="link_pdf" href="./class10 jac/LIGHT-HUMAN EYE AND THE COLOURFUL WORLD.pdf"  >light-human-eye </a></li>
                <!-- <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/cell the fundamental unit of life.pdf"  > cell</a> -->
              </ul></p>
            <div class="loading" id="loading">Loading...</div>
            <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
      
            <div class="loading" id="loading">Loading...</div>
            <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
           
        
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe> 
`
 }
function renderbio_10jac(){
  document.getElementById("content").innerHTML =`<h1>biology</h1>
    <p>Welcome to the chemistory page!</p>
    <p class="chapter_pdf_class9">
        class 10 jac  chapter pdf link <br>
        </p>
        <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
        <p class="chapter_pdf_class10"><ul>
            <!-- <li class="link"><a class="link_pdf" href="./class10 jac/LIGHT-HUMAN EYE AND THE COLOURFUL WORLD.pdf"  >light-human-eye </a></li> -->
            <!-- <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/cell the fundamental unit of life.pdf"  > cell</a> -->
          </ul></p>
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
  
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
       
    
    <div class="loading" id="loading">Loading...</div>
    <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe> 
  `
}

function renderchemistory_10jac(){
  document.getElementById("content").innerHTML =`<h1>chemistory</h1>
    <p>Welcome to the chemistory page!</p>
    <p class="chapter_pdf_class9">
        class 10 jac  chapter pdf link <br>
        </p>
        <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
        <p class="chapter_pdf_class10"><ul>
            <!-- <li class="link"><a class="link_pdf" href="./class10 jac/LIGHT-HUMAN EYE AND THE COLOURFUL WORLD.pdf"  >light-human-eye </a></li> -->
            <!-- <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/cell the fundamental unit of life.pdf"  > cell</a> -->
          </ul></p>
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
  
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
       
    
    <div class="loading" id="loading">Loading...</div>
    <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe> 
  
  
  
`
}
 function rendermaths_10jac(){
  document.getElementById("content").innerHTML =`<!-- <div class="heading">Curious Point - Biology</div> -->
        <h1>maths</h1>
        <p>Welcome to the biology page!</p>
        <p class="chapter_pdf_class9">
            class 10 jac  chapter pdf link <br>
            </p>
            <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
            <p class="chapter_pdf_class10"><ul>
               <li class="link"><a class="link_pdf" href="./class10 jac/maths/triangle.pdf"  >triangle </a></li>
                <!-- <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/cell the fundamental unit of life.pdf"  > cell</a> -->
              </ul></p>
            <div class="loading" id="loading">Loading...</div>
            <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
      
            <div class="loading" id="loading">Loading...</div>
            <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
           
        
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe> 
`
 }
  
 function renderTest10_jac(){
  document.getElementById("content").innerHTML =`
  <br><br>
  <div class="header" >WELCOME TO TEST PAGE </div><br><br>
   <p class="test">
    ACTIVE TEST LINK HERE :<br>
    :<br><br>  
    <a class="link" onclick="form_unhide()" >click me </a>
    
  </p>
  <div class="test_code" id="test_code">
   <center><form id="myForm" action="" method="post" onsubmit="testcode(); return false;">
    <lable for="code">enter your test code </lable>
    <input type="text" name="code" id="code" placeholder="enter your code">
    <input type="submit" value="Submit">
   </form></center> 
  </div>`
  
 }


 // 10 icse
 function renderphysic_10icse(){
  document.getElementById("content").innerHTML =`<div id="physic"></div>
        <!-- <div class="heading">Curious Point - Biology</div> -->
        <h1>physic</h1>
        <p>Welcome to the biology page!</p>
        <p class="chapter_pdf_class9">
            class 10 jac  chapter pdf link <br>
            </p>
            <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
            <!-- <p class="chapter_pdf_class10"><ul>
                <li class="link"><a class="link_pdf" href="./class10 jac/LIGHT-HUMAN EYE AND THE COLOURFUL WORLD.pdf"  >light-human-eye </a></li>
                <!-- <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/cell the fundamental unit of life.pdf"  > cell</a> -->
              </ul></p>-->
            <div class="loading" id="loading">Loading...</div>
            <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
      
            <div class="loading" id="loading">Loading...</div>
            <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
           
        
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe> 
`
 }
function renderbio_10icse(){
  document.getElementById("content").innerHTML =`<h1>biology</h1>
    <p>Welcome to the chemistory page!</p>
    <p class="chapter_pdf_class9">
        class 10 jac  chapter pdf link <br>
        </p>
        <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
        <p class="chapter_pdf_class10"><ul>
            <!-- <li class="link"><a class="link_pdf" href="./class10 jac/LIGHT-HUMAN EYE AND THE COLOURFUL WORLD.pdf"  >light-human-eye </a></li> -->
            <!-- <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/cell the fundamental unit of life.pdf"  > cell</a> -->
          </ul></p>
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
  
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
       
    
    <div class="loading" id="loading">Loading...</div>
    <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe> 
  `
}

function renderchemistory_10icse(){
  document.getElementById("content").innerHTML =`<h1>chemistory</h1>
    <p>Welcome to the chemistory page!</p>
    <p class="chapter_pdf_class9">
        class 10 jac  chapter pdf link <br>
        </p>
        <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
        <!-- <p class="chapter_pdf_class10"><ul>
            <!-- <li class="link"><a class="link_pdf" href="./class10 jac/LIGHT-HUMAN EYE AND THE COLOURFUL WORLD.pdf"  >light-human-eye </a></li> -->
            <!-- <li class="link"><a class="link_pdf" href="./ALL_STUDY_MATERIAL/cell the fundamental unit of life.pdf"  > cell</a> -->
          </ul></p>-->
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
  
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe>
       
    
    <div class="loading" id="loading">Loading...</div>
    <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="500"></iframe> 
  
  
  
`
}
 function rendermaths_10icse(){
  document.getElementById("content").innerHTML =`<!-- <div class="heading">Curious Point - Biology</div> -->
        <h1>maths</h1>
        <p>Welcome to the biology page!</p>
        <p class="chapter_pdf_class9">
            class 10 icse  chapter pdf link <br>
            </p>
             <span class="star"><u>*click on chapter name text to open pdf if psd is not open on one click plz click again  *</u></span>
                <p class="chapter_pdf_class10"><ul>
               <li class="link"><a class="link_pdf" href="https://drive.google.com/file/d/1HoQzwqXtmU_-9NbRBs11koqrgynn8eL6/view?usp=drive_link"  >Reflection </a></li>
               <li class="link"><a class="link_pdf" href="https://drive.google.com/file/d/1Hf3fcVwSt-3-fZu-9lZFgcwKr339Rkvb/view?usp=drive_link"  > section and midpoint theoram </a> 
               <li class="link"><a class="link_pdf" href="https://drive.google.com/file/d/1HJCiIrTzxDfDDwlsO4W7XzCxvZXVY-HA/view?usp=drive_link"  > arthmatic progression (AP)</a> 
               <li class="link"><a class="link_pdf" href="https://drive.google.com/file/d/1H_HvzehS5QugUPfley9vGBNoTA_Js3ZY/view?usp=drive_link"  > Matrix </a> 
              </ul></p>
        <div class="loading" id="loading">Loading...</div>
        <iframe name="pdf_frame" src="" frameborder="0" width="100%" height="">

`
 }
  
 function renderTest10_icse(){
  document.getElementById("content").innerHTML =`
  <br><br>
  <div class="header" >WELCOME TO TEST PAGE of class 10 icse </div><br><br>
   <p class="test">
    ACTIVE TEST LINK HERE :<br>
    :ELECTRIC CIRCUIT AND OHMS LAW AND ELECTRIC ENERGY AND POWER TEST <br><br>  
    <a class="link" onclick="form_unhide()" >click me </a>
    
  </p>
  <div class="test_code" id="test_code">
   <center><form id="myForm" action="" method="post" onsubmit="testcode(); return false;">
    <lable for="code">enter your test code </lable>
    <input type="text" name="code" id="code" placeholder="enter your code">
    <input type="submit" value="Submit">
   </form></center> 
  </div>`
  
 }
 function render_imp10_icse(){
  document.getElementById("content").innerHTML =`
  <br><br>
  <div class="header" > important question </div><br><br>
 <nav>  
        <ul>
            <li><a href="#" onclick="renderBioImp10()">Bio</a></li>
            <li><a href="#" onclick="renderPhysicImp10()">Physic</a></li>
            <li><a href="#" onclick="renderChemistryImp10()">Chemistry</a></li>
            <li><a href="#" onclick="rerenderMathsImp10()">maths </a></li>
           
            </ul>
          </nav>
           <div id="content_Imp"></div>
  </div>
  `
 }
 function rerenderMathsImp10(){
  document.getElementById("content_Imp").innerHTML =`
   
    <p class="chapter_pdf_class10"><ul>
   <li class="link"><a class="link_pdf" href="https://drive.google.com/file/d/1I8aaRhARG0Tf2cx9gyaXHH6FQsQ6PnzS/view?usp=drive_link"  > Matrix  </a></li>
 <li class="link"><a class="link_pdf" href="https://drive.google.com/file/d/1I9I_U6sXRm4iTsWZG9f2LybwrRGD5nNz/view?usp=drive_link"  > Reflection </a> 
   <li class="link"><a class="link_pdf" href="https://drive.google.com/file/d/1IBbftHbQylqKfPc3z4yM6J0TIylUnVEm/view?usp=drive_link"  > Quaditic Equation</a> 
   <li class="link"><a class="link_pdf" href="https://drive.google.com/file/d/1IEHSN0fLQ3Bbluuekmihvd98ck7pknr8/view?usp=drive_link"  >trignomatery imp</a>  
  </ul></p>
          
  `
 }

 function rerenderPhysicImp10(){
  document.getElementById("content_Imp").innerHTML =` <span class="star"><u>*click on chapter name text to open pdf if pdf</u>  </span>
   
   
  `

 }
 function rerenderChemistryImp10(){
  document.getElementById("content_Imp").innerHTML =` <span class="star"><u>*click on chater name to open pdf </u ></span>

  `
 }
 function rerenderBioImp10(){
  document.getElementById("content_Imp").innerHTML =`
  <span class="star"><u>*click on chapter name text to open pdf if pdf </u></span
  `
 }
  // Create an instance of the Tution class
  let tution = new Tution();
  
  // You can also use the data to make an API call or perform some other action
 