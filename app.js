// 임의 아이디 : jinsoo
// 임의 비밀번호 : wlstn1578@

const loginForm = document.querySelector("#login-form");
const loginInputId = document.querySelector("#login-form input#Id");
const loginInputPassword = document.querySelector("#login-form input#Password");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY_ID = "usernameId";
const USERNAME_KEY_PW = "usernamePw";

const savedUsernameID = localStorage.getItem(USERNAME_KEY_ID);
const savedUsernamePW = localStorage.getItem(USERNAME_KEY_PW);

function onLoginSubmit(event) {
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
}

loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);