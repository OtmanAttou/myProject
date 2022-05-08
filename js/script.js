let cpt = 0;
var lst = [
    "../img/girl-scifi-mask-4k-t0.jpg",
    "../img/girl1.jpg",
    "../img/girl3.jpg",
]
var head= document.getElementById("header")
function headeerPhotos(){
    if (cpt<lst.length ){
        head.style.backgroundImage=`url(${lst[cpt]})`;
        cpt++
    }
    else{
        cpt=0
    }
    timer()
}
function timer(){
    setInterval(headeerPhotos,7000)
}
document.getElementById("btn-header").addEventListener("click", ajouter);
document.getElementById("btn-header").addEventListener("dblclick", sup);
function ajouter(e){
    let l1 = document.getElementById("li1")
    let l2 = document.getElementById("li2")
    let l3 = document.getElementById("li3")
    let l4 = document.getElementById("li4")
    let btn = document.getElementById("li5")
    let lstLi = [l1,l2,l3,l4,btn];
    for(let i=0;i<lstLi.length;i++){
        document.getElementById("mySpan").innerHTML+=`${lstLi[i].innerHTML}<br>`
        console.log(lstLi[i])
    }   
}
function sup(){ 
    document.getElementById("mySpan").innerHTML=""
}
