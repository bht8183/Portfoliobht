/*
var button = document.getElementsByClassName("accordion");
var i;
for(i=0; i<button.length;i++){
    button[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var desc = this.nextElementSibling;

        if(desc.style.maxHeight){
            console.log("closing");
            desc.style.maxHeight = null;
        }else{
            console.log("opening");
            desc.style.maxHeight = desc.scrollHeight + "px" ;

        }
    });
} */
$(document).ready(function(){
    $(".accordion").click(function(){
        this.classList.toggle("active");
        var desc = this.nextElementSibling;
        
        if(desc.style.maxHeight){
            console.log("closing");
            desc.style.maxHeight = null;
        }else{
            console.log("opening");
            desc.style.maxHeight = desc.scrollHeight + "px" ;

        }
    })
})