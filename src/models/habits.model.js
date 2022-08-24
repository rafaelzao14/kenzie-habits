import HabitRequest from "../controller/habits.controller.js";

export default class DomHabits{

    static body = document.querySelector('body')

    static pageHabits(){
        const div = document.createElement('div')
        const divHeaderList = document.createElement('div')
        const h4 = document.createElement('h4')
        const btnAll = document.createElement('button')
        const btnConcluded = document.createElement('button')
        const btnCreate = document.createElement('button')
        const ulTitle = document.createElement('ul')
        const liTitle = document.createElement('li')
        const pTitle = document.createElement('p')
        const ulItemList = document.createElement('ul')
        const inputCheck = document.createElement('input')
        const liHabits = document.createElement('li')
        const pHabits = document.createElement('p')
        const btnEditHabit = document.createElement('button')

        div.classList.add('listHabits')
        divHeaderList.classList.add('headerList')
        btnAll.type = 'button'
        btnAll.id = 'btnAll'
        btnAll.classList.add('btnFilter')
        btnConcluded.type = 'button'
        btnConcluded.id = 'btnConcluded'
        btnConcluded.classList.add('btnFilter')
        btnCreate.type = 'button'
        btnCreate.id = 'btnCreate'
        ulTitle.classList.add('titleList')
        ulItemList.classList.add('itemList')
        inputCheck.classList.add('checkbox')
        btnEditHabit.classList.add('editHabit')

        btnAll.innerText = 'Todos'
        btnConcluded.innerText = 'Concluídos'
        btnCreate.innerText = 'Criar'
        btnEditHabit.innerText = '°°°'

        btnAll.addEventListener('click', (event) => {
            return HabitRequest.readHabits()
        })

        btnConcluded.addEventListener('click', (event) => {
           //
        })

        btnCreate.addEventListener('click', (event) => {
            return HabitRequest.createHabits()
        })

        btnEditHabit.addEventListener('click', (event) => {
            //retorna modal editar habito
        })

        liHabits.appendChild(pHabits)
        ulItemList.appendChild(liHabits)
        liTitle.appendChild(pTitle)
        ulTitle.appendChild(liTitle)
        divHeaderList.append(h4, btnAll, btnConcluded, btnCreate)
        div.append(divHeaderList, ulTitle, ulItemList)
        this.body.appendChild(div)
    }
}

DomHabits.pageHabits()