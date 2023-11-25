// -------------------- Задача1: --------------------
// Создать в html форму с тремя инпутами (имя, фамилия, возраст).
// Написать скрипт, который при отправке формы выводит собранные 
// данные в консоль.

// const formElem = document.querySelector("#first_form")
// const userNameInput = document.querySelector(".user_name") 
// const userSurnameInput = document.querySelector(".user_surname")
// const userAgeInput = document.querySelector(".user_age")
// formElem.addEventListener("submit", function(e) {
//     e.preventDefault()
//     console.log("Имя: ", userNameInput.value)
//     console.log("Фамилия: ", userSurnameInput.value)
//     console.log("Возраст: ", userAgeInput.value)
//     formElem.reset()
// })


// -------------------- Задача2: --------------------
// Доработать процесс таким образом, чтобы при отправке формы данные
// из нее добавлялись в массив users в виде объекта.

let users = []
const formElem = document.querySelector("#first_form")
const userNameInput = document.querySelector(".user_name") 
const userSurnameInput = document.querySelector(".user_surname")
const userAgeInput = document.querySelector(".user_age")
function generateUniqueId() {
    return Math.random();
  }
const userId = generateUniqueId();
formElem.addEventListener("submit", function(e) {
    e.preventDefault()
    const user = {
        name: userNameInput.value,
        surname: userSurnameInput.value,
        age: userAgeInput.value,
        id: userId.value
    }
    users.push(user)
    formElem.reset()
    console.log(users)
})

// -------------------- Задача3: --------------------
// Реализовать функцию rerender. Эта функция очищает контейнер с
// карточками и создает множество карточек с пользователями из
// массива. Настроить rerender при добавлении нового пользователя.

function createUsersCard({name, surname, age}) {
    const pName = document.createElement("p")
    pName.innerText = name
    const pSurname = document.createElement("p")
    pSurname.innerText = surname
    const pAge = document.createElement("p")
    pAge.innerText = age
    const productCard = document.createElement("div")
    productCard.classList.add("product_card")
    productCard.append(pName, pSurname, pAge)
    return productCard
}

// const usersListDiv = document.querySelector(".users_list_container")
// function rerender() {
//     usersListDiv.innerHTML = ""
//     for(let i = 0; i < users.length; i++) {
//         const userCardElem = createUsersCard(users[i])
//     }
// }


// -------------------- Задача4: --------------------
// Доработать rerender таким образом, чтобы при двойном клике по
// карточке из  массива удалялся пользователь по id и вызывался rerender.

const usersListDiv = document.querySelector(".users_list_container")
function rerender() {
    usersListDiv.innerHTML = ""
    for(let i = 0; i < users.length; i++) {
        const userCardElem = createUsersCard(users[i])
        userCardElem.addEventListener("dblclick", function() {
            if(users[i].id == userCardElem.id) {
            users.splice(i, 1)
            }
            rerender()
        })
    }
}