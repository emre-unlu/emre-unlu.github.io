function goToContact(){



    window.location.href= "#contact";

}

function displayFunction(nameP, nameDiv){

   var div = document.getElementById(nameDiv);
   var para = document.getElementById(nameP);

   if(div.style.visibility === "hidden"){
       div.style.visibility = "visible";
       para.style.backgroundColor = "#017520";
       para.style.borderLeft ="solid 1px white";
       para.style.borderTop ="solid 1px white";
       para.style.borderBottom ="solid 1px white";
       para.style.borderRight ="none";
   }else{
       div.style.visibility = "hidden";
       para.style.backgroundColor = "#00FF44";
       para.style.border ="solid 1px white";

   }
}