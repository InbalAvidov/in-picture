const gQuests = [
    { id: 1, opts: ['Amazonas', 'Jorden river'], correctOptIndex: 0 },
    { id: 2, opts: ['Bora Bore', 'Belize'], correctOptIndex: 1 },
    { id: 3, opts: ['India', 'Guatamala'], correctOptIndex: 1 },
    { id: 4, opts: ['Bolivia', 'Argentina'], correctOptIndex: 0 }
]
var gElAlert = document.querySelector(".incorrect")
var gCurrQuestIdx 
elGameOver = document.querySelector(".game-over")

function onInit(){
    gCurrQuestIdx = 0
    elGameOver.style.opacity = 0
    renderQuest()

}

function checkAnswer(optIdx) {
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        if (gCurrQuestIdx === gQuests.length - 1) {
            elGameOver.style.opacity = 1
        } else {
            gCurrQuestIdx++
            renderQuest()
        }
        
    }
    else {
        gElAlert.style.opacity = 1
    }
}

function renderQuest() {
    gElAlert.style.opacity = 0
    const elGame = document.querySelector(".background")
    var currQuest = gQuests[gCurrQuestIdx]
    var strHTML = `<img class="picture" src="img/${currQuest.id}.jpg"></img>`
    for (var i = 0; i < currQuest.opts.length; i++) {
        strHTML += `<button onclick = "checkAnswer(${i})" class="answer">${currQuest.opts[i]}</button>`
    }
    elGame.innerHTML = strHTML

}


