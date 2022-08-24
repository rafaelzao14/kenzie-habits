export default class EditProfile {

    static url = "https://habits-kenzie.herokuapp.com/api/user/profile"
    static token = JSON.parse(localStorage.getItem('@habits:token'))
    static headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
    }

    static async updateProfile(img, nome) {

        return await fetch(this.url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                "usr_image": img,
                "usr_name": nome
            })
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}