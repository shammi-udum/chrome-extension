let myLeads = []
let oldleads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
// Get the leads from local storage
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

function renderLeads(){
    let listItems = ""
    for ( let i = 0; i < myLeads.length; i++ ){
    listItems +=  `
        <li>
            <a target= '_blank' href= '${myLeads[i]}'> 
            ${myLeads[i]}
            </a>
         </li>
    `
}
    ulEL.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
localStorage.clear()
myLeads = []
renderLeads()
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})
