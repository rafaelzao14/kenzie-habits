import HabitRequest from "../controller/habits.controller"

export default class ModalDeleteTask{

    static modalDeleteTask(){

        const body = document.querySelector('body')

        const divModalDelete = document.createElement('div')
        const divHeaderModal = document.createElement('div')
        const h3 = document.createElement('he')
        const pClose = document.createElement('p')
        const divConfirm = document.createElement('div')
        const h2 = document.createElement('h2')
        const pAlert = document.createElement('p')
        const btnCancel = document.createElement('button')
        const btnConfirm = document.createElement('button')

        divModalDelete.classList.add('modalDelete')
        divModalDelete.id = 'modalDelete'
        divHeaderModal.classList.add('headerModal')
        pClose.is = 'closeCreate'
        divConfirm.classList.add('confirmDelete')
        btnCancel.type = 'button '
        btnCancel.name = 'btnCancelDelete'
        btnCancel.id = 'btnCancelDelete'
        btnConfirm.type = 'button'
        btnConfirm.name = 'btnConfirmDelete'
        btnConfirm.id = 'btnConfirmDelete'

        pClose.innerText = 'X'
        h3.innerText = 'Certeza que deseja deletar este hábito?'
        h2.innerText = 'Após executar essa ação, não será possível desfazer'
        btnCancel.innerText = 'Cancelar'
        btnConfirm.innerText = 'Sim, excluir este hábito'

        pClose.addEventListener('click', (event) => {
            event.preventDefault()
            divModalDelete.style.display = 'none';
        })

        btnCancel.addEventListener('click', (event) => {
            event.preventDefault()
            window.location.href = '../index.html'
        })

        btnConfirm.addEventListener('click', (event) => {
            event.preventDefault()
            return HabitRequest.deleteHabit()
        })

        divHeaderModal.append(h3, pClose)
        divConfirm.append(h2, pAlert, btnCancel, btnConfirm)
        divModalDelete.append(divHeaderModal, divConfirm)
        body.appendChild(divModalDelete)
    }
}

ModalDeleteTask.modalDeleteTask()

