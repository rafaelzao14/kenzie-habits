    class CreateHabit {

    static url   = 'https://habits-kenzie.herokuapp.com/api/habits';
    static token = JSON.parse(localStorage.getItem('@habits:token'));


    static async newHabit(habit){

          let modal = document.getElementById("modalCreate")

          await fetch(this.url, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${this.token}`
            },
            body: JSON.stringify(habit)
          
          })  
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));

          modal.style.display = 'none';
          window.location.reload(true);
    }
}
export default CreateHabit