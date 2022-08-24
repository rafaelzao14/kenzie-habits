class editHabit{
    static token = JSON.parse(localStorage.getItem('@habits:token'));

    static async edit(habit,newHabit){

              await fetch(`https://habits-kenzie.herokuapp.com/api/habits/${habit}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${this.token}`,
                },
                body:JSON.stringify(newHabit)
              })
              .then(response => response.json())
              .then(response => location.reload(true))
              .catch(err => console.log(err))
            }
          
    
}

export default editHabit