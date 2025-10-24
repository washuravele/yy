/*navbar interactive code*/


/*toggle dark mode and light mode*/
const darkModeBtn = document.getElementById('darkmode');
let isDark = false;
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  isDark = !isDark;
  
  if(isDark){
    $("#darkmode > img").attr("src","./images/icons/dark-mode.png");
    $("#logo >img").attr("src","./images/logo/MED-ACCESS-LOGO-DARK.png");
    }else{
    $("#darkmode > img").attr("src","./images/icons/light-mode.png")
    $("#logo >img").attr("src","./images/logo/MED-ACCESS-LOGO-LIGHT.png");
  }
});



/*rotated logo js*/
$("#logo > img").attr("class", "slideAndRotate");


/*hero interactive code*/
function heromediaQuery(){
   const mediaQuery1 = window.matchMedia('(max-width: 845px)');

   if (mediaQuery1.matches) {
     $("#welcomeText").css({
        "width": "80%",
        "color":"whitesmoke",
      });
      $("#welcomeText > p > span").css({
          "color":"#f3bef3",
       });
   }else{
      $("#welcomeText").css({
        "width": "32%",
        "color":"aliceblue",
      });
      $("#welcomeText > p > span").css({
          "color":"#121212",
       });
   }
  
}
const mediaQuery = window.matchMedia('(max-width: 845px)');
var is2 = true;
setInterval(()=>{
  heromediaQuery();
if (is2){
   $("#hero").css({
     "background-image": "url('./images/hero-img-2.png')",
     "justify-content": "flex-end", 
  });
  $("#welcomeText").css({
     "width" : "27%",
     "font-size": "25px",
  });
  is2=false;
   
}else{
   $("#hero").css({
     "background-image": "url('./images/hero-img-1.png')",
     "justify-content": "flex-start"
  });
  is2=true;
}
  heromediaQuery();
},20000);




