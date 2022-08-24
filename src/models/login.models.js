import UserRequests from "../controller/user.controller.js";

export default class Login {

    static async logarUser() {
        const loginButton = document.getElementById('btnForm')

        loginButton.addEventListener('click', async (event) => {
            event.preventDefault()

            const data = {}
            const user = [...event.srcElement.form]
            
            user.forEach((input) => {
                if(input.value !== ''){
                   data[input.name] = input.value
                }
                
            })

            await UserRequests.login(data)
        })
    }

    static erroLogin(message) {
        
        const modalLogin  = document.querySelector('.modal-loginError')
        const modalButton = document.querySelector('.modal-loginError--button')
        const modalText   = document.querySelector('.modal-loginError--message')

        modalText.innerHTML = `${message}`
    
        modalLogin.style.marginTop = '-230px'
    
        modalButton.addEventListener('click', (event) => {
            modalLogin.style.marginTop = '-9999px'
        })
    }

}

Login.logarUser()
