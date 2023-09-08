let myLinks = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabbtn = document.getElementById("tab-btn")
// localStorage.clear()
const deletebtn = document.getElementById("delete-btn")
deletebtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLinks = []
    render(myLinks)
})

inputBtn.addEventListener("click", function () {

    myLinks.push(inputEl.value)
    localStorage.setItem('myName', JSON.stringify(myLinks))
    inputEl.value = ""
    render(myLinks)
})

tabbtn.addEventListener("click", function () {

    chrome.tabs.query({ active: true,currentWindow: true }, function (tabs) {
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
        render(myLinks)
        // localStorage.clear()
    })
})

function render(links) {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${links[i]}'>
                    ${links[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
