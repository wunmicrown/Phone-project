// BEGINING OF MEMORY GAME js
const emojis = ["😃", "😃", "🥶", "🥶", "😚", "😚", "❤️", "❤️", "😶", "😶", "🍩", "🍩", "🤫", "🤫"];
        var shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);
        const backgroundMusic = new Audio('winapplause-523.wav');
        backgroundMusic.loop = true;

        const playWinMusic=()=> {
            backgroundMusic.play();
        }

        const createGame =()=> {
            for (var i = 0; i < emojis.length; i++) {
                let box = document.createElement("div");
                box.className = 'item';
                box.innerHTML = shuf_emojis[i];

                box.onclick = function () {
                    this.classList.add('boxOpen');
                    setTimeout(function () {
                        if (document.querySelectorAll('.boxOpen').length > 1) {
                            if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                                if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                                    showWinMessage();
                                    playWinMusic();
                                }
                            } else {
                                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                            }
                        }
                    }, 500);
                }

                document.querySelector('.game').appendChild(box);
            }
        }

        const resetGame =()=> {
            document.querySelector('.game').innerHTML = "";
            shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);
            createGame();
            hideWinMessage();
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }

        const showWinMessage =()=> {
            document.getElementById('winMessage').classList.remove('hidden');
            setTimeout(hideWinMessage, 3000);
        }

        const hideWinMessage =()=> {
            document.getElementById('winMessage').classList.add('hidden');
        }
        createGame();
// END OF MEMORY GAME js