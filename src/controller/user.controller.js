import Login from "../models/login.models.js"
 export default class UserRequests {

    static baseUrl  = 'https://habits-kenzie.herokuapp.com/api'
    static token    = JSON.parse(localStorage.getItem('@habits:token'))
    static headers  = {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${this.token}`
    }

    static async login(userData) {

        const response = await fetch(`${this.baseUrl}/userLogin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(res => {

            return res
        })
        .catch(err => console.log(err))

        if(response.token) {
            localStorage.setItem('@habits:user', JSON.stringify(response.response.usr_email))
            localStorage.setItem('@habits:token', JSON.stringify(response.token))
            localStorage.setItem('@habits:name', JSON.stringify(response.response.usr_name))
            localStorage.setItem('@habits:image', JSON.stringify(response.response.usr_image))
            
            window.location.href = './src/views/home.views.html'
            
        } else {
            const err = response.message
            Login.erroLogin(err)            
        }

    }

    static async updateProfile(img) {

        return await fetch(`${this.baseUrl}/user/profile` , {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                "usr_image": img
            })
        })
        .then(res => res.json())
        .catch(err => console.log(err))
    }

}
