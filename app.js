const button = document.querySelector("#ckeck");

function handleTitleClick() {
    button.classList.toggle("clicked");
    if (button.className === "clicked") {
        button.innerText = "취소";
    } else {
        button.innerText = "확인";
    }
}

button.addEventListener("click", handleTitleClick);