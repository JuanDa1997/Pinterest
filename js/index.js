var lastScrollTop = 0;
navbar = document.getElementById("navbar");
navbar_inf = document.getElementById("nav-inf");
navHistorial = document.getElementById("navhistorial");
window.addEventListener("scroll",function(){
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop ) {
        if (screen.width > 1024) {
            navbar.style.top="0";
            navHistorial.style.top="0";
            navbar_inf.style.bottom="0";
        }else{
            navbar.style.top="-100px";
            navHistorial.style.top="-200px";
            navbar_inf.style.bottom="-80px"
        }
        
    }else{
        navbar.style.top="0";
        navHistorial.style.top="0";
        navbar_inf.style.bottom="0"

    }
    lastScrollTop = scrollTop;
})
// alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 

function quitarLupa(){
    // me detecta cuando hago click fuera del elemento id=lupa
   window.addEventListener('click',function(e){
       if (document.getElementById('lupa').contains(e.target)) {
            lupa.style.backgroundImage = 'none';
            lupa.style.padding = '0px 20px';
       }else{
            lupa.style.backgroundImage = '';
            lupa.style.padding = '';
       }
   });

}







