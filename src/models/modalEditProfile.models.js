import Header from "./header.models"

export default class ModalEditProfile{

    static modalEditUser(){

        const body = document.querySelector('body');
        const editProfile = document.getElementById('editProfile');

            const modalUser = document.createElement('div')
            const divHeaderModal = document.createElement('div')
            const h3 = document.createElement('h3')
            const pClose = document.createElement('p')
            const form = document.createElement('form')
            const pUserName = document.createElement('p')
            const inputName = document.createElement('input')
            const pUrlAvatar = document.createElement('p')
            const inputAvatar = document.createElement('input')
            const button = document.createElement('button')

            modalUser.classList.add('modalUser')
            divHeaderModal.classList.add('headerModal')
            pClose.id = 'closeCreate'
            form.classList.add('modalForm')
            inputName.classList.add('modalUserName')
            inputAvatar.classList.add('newAvatar')
            inputName.id = 'modalNameUser'
            inputName.placeholder = this.response.usr_name
            inputAvatar.id = 'editAvatar'
            inputAvatar.type = 'url'
            inputAvatar.placeholder = this.response.usr_image
            button.classList.add('saveEditProfile')
            button.type = 'button'
            button.id = 'saveEditProfile'
            button.innerText = 'Salvar Alterações'
            h3.innerText = 'Editar perfil'
            pClose.innerText = 'X'
            pUserName.innerText = 'Nome'
            pUrlAvatar.innerText = 'URL da imagem do perfil'

            button.addEventListener('click', (event) => {
                event.preventDefault()
                let name = document.getElementById('modalNameUser');
                let avatar = document.getElementById('editAvatar');

                let newInfos = {
                    usr_name: name.value,
                    usr_image: avatar.value
                }

                Header.modalEditUser(newInfos)

            })

            pClose.addEventListener('click', (event) => {
                event.preventDefault()
                editUser.style.display = 'none';
            })

            divHeaderModal.append(h3, pClose)
            form.append(pUserName, inputName, pUrlAvatar, inputAvatar, button)
            modalUser.append(divHeaderModal, form)
            editProfile.appendChild(modalUser)
            this.body.appendChild(editProfile)
        
    }
}

ModalEditProfile.modalEditInfosUser()