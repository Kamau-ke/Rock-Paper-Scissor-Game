const selectionButtons=document.querySelectorAll('[data-selection]')
const finalColumn=document.querySelector('[data-final-column]')

const computerScore=document.querySelector('[data-computer-score]')
const yourScore=document.querySelector('[data-your-score]')

const SELECTIONS=[
    {
        name:'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name:'paper',
        emoji: '✋',
        beats: 'rock'
    },

    {
        name:'scissors',
        emoji: '✌',
        beats: 'paper'
    }
]
selectionButtons.forEach(selectionBtn=>{
    selectionBtn.addEventListener('click', ()=>{
        const selectionName=selectionBtn.dataset.selection
        const selection=SELECTIONS.find(selection=>selection.name===selectionName);
        makeSelection(selection)
    })
})

function incrementScore(scoreSpan){
    scoreSpan.innerText=parseInt(scoreSpan.innerText) +1
}

function makeSelection(selection){
    const computerSelection=randomSelection();
    const yourWinner=isWinner(selection, computerSelection)
    const computerWinner=isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

  if(yourWinner)  incrementScore(yourScore)
   if(computerWinner) incrementScore(computerScore)
    
}

function isWinner(selection, opponentSelection){
    return selection.beats===opponentSelection.name
}

function addSelectionResult(selection, winner){
    const div=document.createElement('div')
    div.innerText=selection.emoji;

    if(winner) div.classList.add('winner');

    div.classList.add('result-selection')
    finalColumn.after(div)

}

function randomSelection(){
    const randomIndex=Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}