import HabitRequest from "../controller/habits.controller.js"
import deleteHabit from "../controller/deleteHabit.controller.js";
import editHabit from "../controller/editHabit.controller.js";
class template {

    static listarTarefas(dados) {

        const habit = document.createElement("li")
        habit.id = `${dados.habit_id}`
        const checkbox = document.createElement("img")
        const tagFigure = document.createElement('figure')
        const containerHabitTitle = document.createElement("div")
        const textHabitTitle = document.createElement("p")
        const containerHabitDescription = document.createElement("div")
        const textHabitDescription = document.createElement("p")
        const containerHabitCategory = document.createElement("div")
        const textHabitCategory = document.createElement("p")
        const btnEditar = document.createElement("span")
        const imgBtnEditar = document.createElement("input")

        checkbox.id = 'check'
        if(dados.habit_status === true){
        checkbox.src = '../assets/img/btnDone.svg'
        }else{
        checkbox.src = '../assets/img/btnClose.svg'
        }
        
        checkbox.addEventListener('click', async (e) => {
            e.preventDefault()
            
            await HabitRequest.completeHabit(dados.habit_id)
                checkbox.src = '../assets/img/btnDone.svg'
        })
        

        habit.classList.add("habit")

        containerHabitTitle.classList.add("containerHabitTitle")
        textHabitTitle.classList.add("textHabitTitle")
        textHabitTitle.innerText = dados.habit_title

        containerHabitDescription.classList.add("containerHabitDescription")
        textHabitDescription.classList.add("textHabitDescription")
        textHabitDescription.innerText = dados.habit_description

        containerHabitCategory.classList.add("containerHabitCategory")
        textHabitCategory.classList.add("textHabitCategory")
        textHabitCategory.innerText = dados.habit_category
        imgBtnEditar.src = '../assets/img/btnEditar.svg'
        imgBtnEditar.classList.add('imgBtnEditar')
        imgBtnEditar.id = 'btnEdit'
        imgBtnEditar.type ='image'
        btnEditar.classList.add("btnEditar")
        btnEditar.id = 'imgBtnEdit'
        
        imgBtnEditar.addEventListener('click', (e) =>{
            e.preventDefault()
            let modal = document.getElementById('modalEdit');
            let modalTitle = document.getElementById('modalTitleEdit').value = dados.habit_title
            let modalDesc = document.getElementById('modalDescEdit').value = dados.habit_description
            let modalCat = document.getElementById('selectEditHabit').value = dados.habit_category
            let btnSave = document.getElementById('insertEditHabit')
            modal.style.display = 'flex';
            
            btnSave.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('teste')
                let title = document.getElementById('modalTitleEdit').value
                
                let desc = document.getElementById('modalDescEdit').value

                let category = document.getElementById('selectEditHabit').value

                let habit = {
                    habit_title: title,
                    habit_description: desc,
                    habit_category: category
                }

                editHabit.edit(dados.habit_id, habit)

            });
                
               


            let closePageEdit = document.getElementById('closeEdit')
            let del = document.getElementById('delEditHabit')
            let modalDelete = document.getElementById('modalDeleteTask')
            let btnCancel   = document.getElementById("btnCancelDelete")
            let btnConfirm  = document.getElementById("btnConfirmDelete")
            let closeModalDelete = document.getElementById("closeDelete")

            

            del.addEventListener('click',(e) => {
                e.preventDefault()

                modal.style.display = 'none';
                modalDelete.style.display = 'flex'

            closeModalDelete.addEventListener('click', (e) =>{
                e.preventDefault()
                modalDelete.style.display = 'none'
            })

            btnCancel.addEventListener('click', (e) =>{
                e.preventDefault()
                modalDelete.style.display = 'none'
            })

            btnConfirm.addEventListener('click', (e) => {
                e.preventDefault()

                deleteHabit.erase(dados.habit_id)

                modalDelete.style.display = 'none'

                // location.reload(true)
            })

            })
    
            closePageEdit.addEventListener('click', (e) => {
                e.preventDefault()
    
                modal.style.display = 'none';
            })
            // ModalEditHabit.editHabit()
        })

        containerHabitTitle.appendChild(textHabitTitle)
        containerHabitDescription.appendChild(textHabitDescription)
        containerHabitCategory.appendChild(textHabitCategory)
        btnEditar.append(imgBtnEditar)
        tagFigure.append(checkbox)

        habit.append(tagFigure, containerHabitTitle, containerHabitDescription, containerHabitCategory, btnEditar)

        const habitsList = document.querySelector(".habitsList")
        habitsList.append(habit)
    }

}

export default template