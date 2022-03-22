const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'f', 'g', 'h', 'j']
const visual = document.querySelector('.visual');
const visuals = document.querySelector('.visuals');
const blueBubble = document.querySelector('.blueBubble');
const whiteKeys = document.querySelectorAll('.key.keyW')
const blackKeys = document.querySelectorAll('.key.keyB')



const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => 
        playNote(key));
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)
  
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
  })

function playNote(key) {
    const notesAudio = document.getElementById(key.dataset.note);
    notesAudio.currentTime = 0;
    notesAudio.play(key);
    key.classList.add('active');
    notesAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    }) 

    const createBubbles = (keys) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.animation = "jump1 3s ease"
        bubble.addEventListener('animationend',function (){
            visual.removeChild(this);
        })
    } 



const createBubble = (keys) => {
    const bubbles = document.createElement("div");
    visuals.appendChild(bubbles);
    bubbles.style.animation = "jump2 4s ease"
    bubbles.addEventListener('animationend',function (){
        visuals.removeChild(this);
    })
} 

const createBlueBubble = (keys) => {
    const blueBubbles = document.createElement("div");
    blueBubble.appendChild(blueBubbles);
    blueBubbles.style.animation = "jump 2s ease"
    blueBubbles.addEventListener('animationend',function (){
        blueBubble.removeChild(this);
    })
} 

createBlueBubble(key)
createBubble(key);
createBubbles(key);

}


