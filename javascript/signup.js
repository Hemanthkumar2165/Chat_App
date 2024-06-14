const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-text");

form.onsubmit = (e)=>{
    e.preventDefault();         
    //By calling preventDefault(), the form default submission is stopped, and the page does not reload.
}

continueBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();       //creating xml object
    xhr.open("POST", "php/signup.php", true);           // (method,url,async)
    xhr.onload = ()=>{                            // Set up the onload function to handle the response
      // Check if the request is complete
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "success"){
                // Handle success response from the server
                location.href="users.php";
              }else{
                // Show error message from the server
                errorText.style.display = "block";
                errorText.textContent = data;
              }
          }
      }
    }
    //sending form data through ajax to php
    let formData = new FormData(form);         //creating new formdata obj 
    xhr.send(formData);                       //sending form data to php
}