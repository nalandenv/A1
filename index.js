const btn = document.querySelector("button");
const sessionStorage = window.sessionStorage;
const localStorage = window.localStorage;
const clear = document.querySelector("#clear");

clear.addEventListener('click', () => {
    localStorage.clear();  
    show.innerHTML = "";
    showUsers(Object.entries(localStorage));
    showUsers(Object.entries(sessionStorage));
})
const showUsers = (userData) => {
    const data = userData;
    const show = document.querySelector("#show");
    for(let i = 0; i < data.length; i++){
        const div = document.createElement("div");  
        const span = document.createElement("span");
        span.innerText = `Name: ${data[i][0]}, Age: ${data[i][1]}`;
        div.append(span);
        show.append(div);
    }
}

showUsers(Object.entries(localStorage));
showUsers(Object.entries(sessionStorage));

btn.addEventListener('click', () =>{
    const save = document.querySelector("#save");
    if(save.checked){
        const name = document.querySelector("#name");
        const age = document.querySelector("#age");
        localStorage.setItem(name.value, age.value);
    } else {
        const name = document.querySelector("#name");
        const age = document.querySelector("#age");
        sessionStorage.setItem(name.value, age.value);
    }
    show.innerHTML = "";
    showUsers(Object.entries(localStorage));
    showUsers(Object.entries(sessionStorage));
})

