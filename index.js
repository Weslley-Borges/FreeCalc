const workingDays_OPTIONS = document.querySelectorAll(".workingDays-grid li")
const vacationDays_OPTIONS = document.querySelectorAll(".vacationDays-grid li")

for(const day of workingDays_OPTIONS){
    day.addEventListener("click", handleSelectedWorkingDays)}
for(const day of vacationDays_OPTIONS){
    day.addEventListener("click", handleSelectedVacationDays)}

const allWorkingDays = document.querySelector("input[name=workingDays]")
const allVacationDays = document.querySelector("input[name=vacationDays]")
let workingOnDays = []
let vacationOnDays = []

function handleSelectedWorkingDays() {
    const dayLi = event.target

    dayLi.classList.toggle("selected")
    const dayId = dayLi.dataset.id

    const alreadySelected_WorkingDays  = workingOnDays.findIndex(dayName => {
        const itemFound = dayName == dayId
        return itemFound
    })

    if(alreadySelected_WorkingDays >= 0){
        const filtered_WorkingDays = workingOnDays.filter(dayName => {
            const itemIsDifferent = dayName != dayId
            return itemIsDifferent
        })
        workingOnDays = filtered_WorkingDays
    }else{workingOnDays.push(dayId)}

    allWorkingDays.value = workingOnDays
}

function handleSelectedVacationDays() {
    const dayLi = event.target

    dayLi.classList.toggle("selected")
    const dayId = dayLi.dataset.id

    const alreadySelected_VacationDays  = vacationOnDays.findIndex(dayName => {
        const itemFound = dayName == dayId
        return itemFound
    })

    if(alreadySelected_VacationDays >= 0){
        const filtered_VacationDays = vacationOnDays.filter(dayName => {
            const itemIsDifferent = dayName != dayId
            return itemIsDifferent
        })
        vacationOnDays = filtered_VacationDays
    }else{vacationOnDays.push(dayId)}

    allVacationDays.value = vacationOnDays
}



function validar(){
    var dayForWork = workingOnDays.length
    var dayForVacation = vacationOnDays.length
    var projectValue = document.getElementById("valorProjeto").value
    var workingHours = document.getElementById("horasTrabalhadas").value
    var result = document.getElementById("result-hour")

    if(projectValue ==""|| workingHours==""){
        return alert('Preencha todos os campos numéricos')
    }
    var custPerHour = (projectValue/(dayForWork*4*workingHours)) + (dayForVacation*dayForWork*workingHours)
    result.innerHTML = (custPerHour).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
}