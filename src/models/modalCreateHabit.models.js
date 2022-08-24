import CreateHabit from "../controller/createHabit.controller.js";


     class ModalCreateHabit {

    static createNewHabit (){

        let btnCreate = document.getElementById('btnCreate');
        let closePageCreate = document.getElementById('closeCreate')

        btnCreate.addEventListener('click', (e) =>{
            e.preventDefault()
            console.log('teste')
            let modal = document.getElementById('modalCreate');
            
            modal.style.display = 'flex';
            
            let insertBtn = document.getElementById('insertBtn')

            insertBtn.addEventListener('click',(e) => {
                e.preventDefault();
                console.log('testeClique')
                let title = document.getElementById('modalTitleCreate');
                let desc = document.getElementById('modalDescriCreate');
                let select = document.getElementById('selectCatHabit');

                let bodyNewHabit = {
                    habit_title: title.value,
                    habit_description: desc.value,
                    habit_category: select.value
                }
                CreateHabit.newHabit(bodyNewHabit);
            })
        })

        closePageCreate.addEventListener('click', (e) => {
            e.preventDefault()

            let modal = document.getElementById('modalCreate');

            modal.style.display = 'none';
        })
    }
}
export default ModalCreateHabit