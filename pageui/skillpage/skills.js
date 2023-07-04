
$(document).ready(function(){
    $(".accordion").click(function(){
        this.classList.toggle("active");
        var desc = this.nextElementSibling;

        if(desc.style.maxHeight){
            console.log("closing");
            desc.style.maxHeight = null;
        }else{
            console.log("opening");
            desc.style.maxHeight =  "5000px" ;

        }
    })
})