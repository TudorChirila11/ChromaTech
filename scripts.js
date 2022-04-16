var win=window;
var w=win.innerWidth;
//alert(document.getElementById("roboticangz").innerHTML);
//alert(w);
if(w<1482)
{
    document.getElementById("roboticangz").innerHTML = "";
}

let nrrow=0;
if(w>=1569)
    nrrow=3;
else if(w>=913)
    nrrow=2;
else nrrow=1;

let marginleft=w-nrrow*342.76;
let nrspaces=2+nrrow-1;
//alert(marginleft/nrspaces);

const boxes=document.getElementsByClassName("box");
var i;
for (i=0;i<boxes.length;i++)
{
    //console.log(boxes[i]);
    boxes[i].style.marginLeft= marginleft/nrspaces;
}