
import ModalCreateHabit from "../models/modalCreateHabit.models.js"
import Home from "../controller/home.controller.js"
import template from "../models/template.models.js"
import Header from "../models/header.models.js"
import EditProfile from "../controller/editProfile.controller.js"
import ModalLogout from "../models/logout.model.js"


Header.criarHeader()
ModalCreateHabit.createNewHabit()

const habitos = await Home.pegarDados()
habitos.forEach(element => {
        template.listarTarefas(element)
});

const btnConcluidos = document.querySelector(".btnConcluidos")
btnConcluidos.addEventListener("click", (event) => {

        btnTodos.classList.remove("botaoSelecionado")
        btnConcluidos.classList.add("botaoSelecionado")

        const habitsList = document.querySelector(".habitsList")
        habitsList.innerHTML = ""

        const tarefasConcluidas = habitos.filter((tarefa) => tarefa.habit_status == true)
        tarefasConcluidas.forEach(element => {
                template.listarTarefas(element)
        })
})

const btnTodos = document.querySelector(".btnTodos")
btnTodos.addEventListener("click", (event) => {

        btnConcluidos.classList.remove("botaoSelecionado")
        btnTodos.classList.add("botaoSelecionado")

        const habitsList = document.querySelector(".habitsList")
        habitsList.innerHTML = ""

        habitos.forEach(element => {
                template.listarTarefas(element)
        });
})

const logoutOption = document.getElementById("logoutOption")
logoutOption.addEventListener("click", (event) => {
        localStorage.removeItem('@habits:token')
        localStorage.removeItem("@habits:name")
        localStorage.removeItem("@habits:user")
        localStorage.removeItem("@habits:image")
        window.location.href = "/index.html"
})

const editOption = document.getElementById("editOption")
editOption.addEventListener("click", (event) => {
        const modal = document.getElementById('modalEditProfile')
        modal.style.display = 'flex';
})

const btnCancelEditProfile = document.querySelector(".btnCancelEditProfile")
btnCancelEditProfile.addEventListener("click", (event) => {
        const modal = document.getElementById('modalEditProfile')
        modal.style.display = 'none';
})

const closeEditPerfil = document.getElementById("closeEditPerfil")
closeEditPerfil.addEventListener("click", (event) => {
        const modal = document.getElementById('modalEditProfile')
        modal.style.display = 'none';
})

const btnEnviarEditProfile = document.querySelector(".btnEnviarEditProfile")
btnEnviarEditProfile.addEventListener("click", (event) => {

        const modalImagemEditPerfil = document.getElementById("modalImagemEditPerfil")
        const inputImagem = modalImagemEditPerfil.value

        const modalNomeEditPerfil = document.getElementById("modalNomeEditPerfil")
        const inputNome = modalNomeEditPerfil.value

        localStorage.removeItem("@habits:image")
        localStorage.setItem("@habits:image", `"${inputImagem}"`)

        localStorage.removeItem("@habits:name")
        localStorage.setItem("@habits:name", `"${inputNome}"`)

        EditProfile.updateProfile(inputImagem, inputNome)

        location.reload()

        modalImagemEditPerfil.style.display = 'none';
})