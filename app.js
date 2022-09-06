const h1 = document.getElementById("ti");
document.getElementById("ti").textContent = "Changed!";

// // CSS에 정의하는게 아니라 JS에서 속성을 추가 (Bad)
// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }
// h1.addEventListener("click", handleTitleClick);

// //CSS에 정의하고 class를 추가하는데, h1.className을 하면 다른 class를 update. (bug)
// //class 추가가 필요함
// function handleTitleClick(){
//     const clickedClass = "clicked"
//     if (h1.className === clickedClass){
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
    
// }
// h1.addEventListener("click", handleTitleClick);

// //classList를 써서 다른 class에는 영향이 없도록 수정
// //class를 추가 삭제하는건 자주하기 때문에 아래 toggle로 수정 필요
// function handleTitleClick(){
//     const clickedClass = "clicked"
//     if (h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }
// h1.addEventListener("click", handleTitleClick);

//toggle 활용 한줄이라 const정의도 불필요
function handleTitleClick(){
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);