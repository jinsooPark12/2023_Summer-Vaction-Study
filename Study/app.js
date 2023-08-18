const loginForm = document.querySelector("#login-form");
const loginInputId = document.querySelector("#login-form input#Id");
const loginInputPassword = document.querySelector("#login-form input#Password");
const greeting = document.querySelector("h1#greeting");
const loginPoto = document.querySelector("img#poto")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY_ID = "usernameId";
const USERNAME_KEY_PW = "usernamePw";

const savedUsernameID = localStorage.getItem(USERNAME_KEY_ID);
const savedUsernamePW = localStorage.getItem(USERNAME_KEY_PW);

function onLoginSubmit(event) { // 임의의 아이디와 비밀번호 설정
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameId = loginInputId.value;
    const usernamePw = loginInputPassword.value;
    localStorage.setItem(USERNAME_KEY_ID, usernameId);
    localStorage.setItem(USERNAME_KEY_PW, usernamePw);

    alert(`환영합니다 ${usernameId}님!`);
    paintGreetings(usernameId);
}

function onChackLoginSubmit(event) { // 로그인
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameId = loginInputId.value;
    const usernamePw = loginInputPassword.value;
    if (savedUsernameID === usernameId && savedUsernamePW === usernamePw) {
        alert(`환영합니다 ${usernameId}님!`);
        paintGreetings(usernameId);
    } else {
        alert("아이디 또는 비밀번호가 틀렸습니다. 다시 입력하세요.");
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }
}

function paintGreetings(usernameId){
    greeting.innerText = `Hello ${usernameId}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    document.body.appendChild(bgImage);
    loginPoto.classList.add(HIDDEN_CLASSNAME);
}

loginForm.classList.remove(HIDDEN_CLASSNAME);
if (savedUsernameID === null && savedUsernamePW === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    loginForm.addEventListener("submit", onChackLoginSubmit);
}