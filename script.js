let wonScore = 0;
let lostScore = 0;
let drawScore = 0;

// माउस घुमाने पर कार्ड 3D में झुकेगा
const card = document.getElementById('gameCard');
document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// माउस स्क्रीन से बाहर जाने पर कार्ड सीधा हो जाएगा
document.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

function play(playerChoice) {
    const choices = ['stone', 'paper', 'scissors'];
    const emojis = { stone: '✊', paper: '✋', scissors: '✌️' };

    const playerHand = document.getElementById('playerHand');
    const computerHand = document.getElementById('computerHand');
    const statusText = document.getElementById('statusText');

    // हाथ हिलने का एनिमेशन शुरू करें
    playerHand.classList.add('shake');
    computerHand.classList.add('shake');
    playerHand.innerText = '✊';
    computerHand.innerText = '✊';

    setTimeout(() => {
        playerHand.classList.remove('shake');
        computerHand.classList.remove('shake');

        const computerChoice = choices[Math.floor(Math.random() * 3)];

        playerHand.innerText = emojis[playerChoice];
        computerHand.innerText = emojis[computerChoice];

        if (playerChoice === computerChoice) {
            drawScore++;
            document.getElementById('draw').innerText = drawScore;
            statusText.innerText = "मैच ड्रा रहा! 🤝";
            statusText.style.color = "#f59e0b";
        } else if (
            (playerChoice === 'stone' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'stone') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            wonScore++;
            document.getElementById('won').innerText = wonScore;
            statusText.innerText = "शानदार! आप जीत गए 🎉";
            statusText.style.color = "#10b981";
        } else {
            lostScore++;
            document.getElementById('lost').innerText = lostScore;
            statusText.innerText = "कंप्यूटर जीत गया! 🤖";
            statusText.style.color = "#ef4444";
        }
    }, 400);
}
