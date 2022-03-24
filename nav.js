


function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);
  


 



function cat(){
     try {
       
       var val=document.getElementById('Fname').value;
             console.log(val)
             var data=fetch("https://cataas.com/cat/"+ val)
              
     
             data.then(function(res){
              console.log(res.url)
              document.getElementById("im").src=res.url
               return res.json();
               
             })


           }
           
      catch (error) {
       console.log(error); 
     }
    }