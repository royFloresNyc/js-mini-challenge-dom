/***** Deliverable 1 *****/
const header = document.querySelector("#header")

/***** Deliverable 2 *****/
header.style.color = "red"


/***** Deliverable 3 *****/
for(const player of PLAYERS) {
    const div = document.createElement('div')
    div.classList.add("player");
    div.setAttribute( 'data-number', `${player.number}`);
    div.innerHTML = `
        <h3>
            ${player.name} (<em>"${player.nickname}"</em>)
        </h3>
        <img src= "${player.photo}" alt="${player.name}">`
    const containerDiv = document.querySelector(".player-container")
    containerDiv.append(div)
}


/***** Deliverable 4 *****/
const raheemSterling = document.querySelector(`div[data-number='7']`)
raheemSterling.remove()