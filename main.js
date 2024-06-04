let img = document.querySelectorAll(".quest-img img");
let questImgP = document.querySelectorAll(".question-data p");

let arrImg = [...img];
let arrP = [...questImgP];

for (let i = 1 ; i < arrP.length ; i++) {
    arrP[i].style.display = "none";
    arrImg[i].src = "./assets/images/icon-plus.svg";
}






for (let i = 0 ; i < arrP.length ; i++) {
    let cssObj = window.getComputedStyle(arrP[i], null)
arrImg[i].addEventListener("click",function () {
    if (cssObj.getPropertyValue("display") == "block") {
        arrP[i].style.display = "none";
        arrImg[i].src = "./assets/images/icon-plus.svg" ;
    }
    else if (cssObj.getPropertyValue("display") == "none") {
        arrP[i].style.display = "block";
        arrImg[i].src = "./assets/images/icon-minus.svg" ;
        arrP[i].style.animation = "moving 0.4s linear";
    }
})
}

for (let i = 0 ; i < arrP.length ; i++) {
    let cssObj = window.getComputedStyle(arrP[i], null)     
    arrImg[i].addEventListener("keypress",function () {
        if (cssObj.getPropertyValue("display") == "block") {
            arrP[i].style.display = "none";
            arrImg[i].src = "./assets/images/icon-plus.svg" ;
        }
        else if (cssObj.getPropertyValue("display") == "none") {
            arrP[i].style.display = "block";
            arrImg[i].src = "./assets/images/icon-minus.svg" ;
            arrP[i].style.animation = "moving 0.4s linear";
        }
    })
}
