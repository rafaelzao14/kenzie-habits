
export default class HabitRequest{
    static token = JSON.parse(localStorage.getItem('@habits:token'))
    static baseUrl = 'https://habits-kenzie.herokuapp.com/api/habits';
    static headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`
    }

    static async readHabits(){
        return await fetch(this.baseUrl, {
            method: 'GET',
            headers: this.headers
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async habitByCategory(habit_category){
        const habits = await this.readHabits();
        const habitCategory = habits.filter((elem) => elem.habit_category === habit_category)
        return habitCategory
    }

    static async updateHabit(habit_id){
        return await fetch(`${baseUrl}:habit_id`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(habit_id)
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async completeHabit(id) {
        const response = await fetch(`https://habits-kenzie.herokuapp.com/api/habits/complete/${id}`, {
            method: 'PATCH',
            headers: this.headers,
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))
    }

    static async deleteHabit(){
        return await fetch(`${baseUrl}:habit_id`, {
            method: 'DELETE',
            headers: this.headers
        })
    }
}