let theme = document.cookie;
let sistemtema = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(theme === "theme=dark") {
   document.getElementsByTagName('body')[0].classList.toggle("dark-theme"); 
   document.getElementById("toggle").addEventListener("click", function(){
   document.getElementsByTagName('body')[0].classList.toggle("#");
   document.cookie = "theme=light; expires=Thu, 18 Dec 2023 12:00:00 UTC"
   document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});
} else if (theme === "theme=light") {
    document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    document.cookie = "theme=dark; expires=Thu, 18 Dec 2023 12:00:00 UTC"
});
} else if (sistemtema) {
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    document.cookie = "theme=dark; expires=Thu, 18 Dec 2023 12:00:00 UTC"
    document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("#toggle");
    document.cookie = "theme=light; expires=Thu, 18 Dec 2023 12:00:00 UTC"
});
} else {
    document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    document.cookie = "theme=dark; expires=Thu, 18 Dec 2023 12:00:00 UTC"
})
}
