class deleteHabit {

    static token = JSON.parse(localStorage.getItem('@habits:token'))

    static async erase(habitId){

       await fetch(`https://habits-kenzie.herokuapp.com/api/habits/${habitId}`, {
        method: 'DELETE',
        headers: {
          "Authorization": `Bearer ${this.token}`
        }
      })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

            window.location.reload(true)
    }
}

export default deleteHabit