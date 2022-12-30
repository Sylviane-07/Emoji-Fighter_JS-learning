let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndex = Math.floor( Math.random() * fighters.length)
    let randomIndex2 = Math.floor( Math.random() * fighters.length)
    console.log(randomIndex)
    let fisrtFighter = fighters[randomIndex]
    let seconddFighter = fighters[randomIndex2]
    return stageEl.textContent = fisrtFighter + " vs " + seconddFighter
})
