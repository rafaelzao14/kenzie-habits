 export default class Home {

    static token = JSON.parse(localStorage.getItem('@habits:token'))

    static async pegarDados() {
        const url = "https://habits-kenzie.herokuapp.com/api/habits"
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`
            }
        }

        const dados = await fetch(url, options)
            .then((response) => {
                return response.json()
            })
            .then((response) => response).catch((err) => {
                console.log(err)
            })

        return dados
    }

}

