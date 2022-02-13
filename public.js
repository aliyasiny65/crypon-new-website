document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    document.cookie = "theme=dark"
});
let theme = document.cookie;
if(theme === "theme=dark") {
   document.getElementsByTagName('body')[0].classList.toggle("dark-theme"); 
}
