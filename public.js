let theme = document.cookie;
if(theme === "theme=dark") {
   document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
   document.getElementById("toggle").addEventListener("click", function(){
   document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
   document.cookie = "theme=light; expires=Thu, 18 Dec 2023 12:00:00 UTC"
});
} else if (theme === "theme=light") {
    document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    document.cookie = "theme=dark; expires=Thu, 18 Dec 2023 12:00:00 UTC"
    document.getElementsByTagName('body')[0].classList.toggle("");
});
} else {
    document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    document.cookie = "theme=dark; expires=Thu, 18 Dec 2023 12:00:00 UTC"
});
}
