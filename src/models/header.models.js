export default class Header {

    static name = JSON.parse(localStorage.getItem('@habits:name'))
    static image = JSON.parse(localStorage.getItem('@habits:image'))

    static criarHeader() {

        const logo = document.createElement("h4")
        const avatarHeader = document.createElement("img")
        logo.classList.add("logo")
        logo.innerText = "KenzieHabit"
        avatarHeader.classList.add("avatarHeader")
        avatarHeader.src = this.image
        avatarHeader.alt = "Imagem de perfil"

        const avatarPrincipal = document.createElement("img")
        avatarPrincipal.classList.add("avatarPrincipal")
        avatarPrincipal.src = this.image
        avatarPrincipal.alt = "Imagem de perfil"
        const userName = document.createElement("p")
        userName.classList.add("userName")
        userName.innerText = this.name

        const header = document.querySelector(".header")
        const boxUserInfos = document.querySelector(".boxUserInfos")

        header.append(logo, avatarHeader)
        boxUserInfos.append(avatarPrincipal, userName)
    }
}
