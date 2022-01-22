var p1 = {
    score: 0,
    button: document.querySelector('#Button1'),
    display: document.querySelector('#PlayerOne'),
    name: 'Player One'}
var p2 = {
    score: 0,
    button: document.querySelector('#Button2'),
    display: document.querySelector('#PlayerTwo'),
    name: 'PlayerTwo'}

var resetButton = document.querySelector('#reset');
var maxScore = document.querySelector('#playUntil');
var End = false;

function scores(player, player2) {
    if (!End && maxScore.value > 0) {
        player.score += 1;
        var winScore = parseInt(maxScore.value)
        player.display.innerText = player.score;
    if (player.score === winScore) {
        End = true;
        player.display.classList.add('blue');
        player2.display.classList.add('red');
        player.button.disabled = true;
        player2.button.disabled = true;
        player.button.classList.add('remove');
        player2.button.classList.add('remove');
        select.style.display = 'none';}
    } else {
  }
}

p1.button.addEventListener('click', function() {
    scores(p1, p2)})
p2.button.addEventListener('click', function() {
    scores(p2, p1)})

resetButton.addEventListener('click', () => {
    End = false;
    for (var p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('blue', 'red');
        p.button.classList.remove('remove');
        p.button.disabled = false;
        p.button.style.display = '';
        select.style.display = ''}
    playUntil.value = '';})
