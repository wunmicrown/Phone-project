const openMusic = () => {

    forMusic.style.display = "block";
    forcalls.style.display = "none";
    anotherinner.style.display = "none";
    showbalance.style.display = "none";
    infogenerate.style.display = "none";
    callopacity.style.display = "none";
    forcallnumbers.style.display = "none";
}
document.addEventListener('DOMContentLoaded',  ()=> {
    const audio = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playlist = document.getElementById('playlist');
    let currentTrackIndex = 0;

    const musicList = [
        "1da-Banton-Ft-Zlatan-No-Sleeping.mp3",
        "11-Seyi-Vibez-Bank-Of-America.mp3",
        "Adekunle_Gold,_Nailah.mp3",
        "Adekunle_Gold,_sinner.mp3",
        "Asake-Dull.mp3",
        "Barry Jhay Olodo 1.mp3",
        "Barry_Jhay_Ft_Davido_Only_you.mp3",
        "Barry_Jhay_Ori.mp3",
        "Barry-Jhay-Ashe-She.mp3",
        "Bellah-shumdar.mp3",
        "Boy_Spyce_Nobody.mp3",
        "brown skin girl.mp3",
        "D-Jay-Balance-It.mp3",
        "Ruger_-_Asiwaju.mp3",
        "Seyi-Vibez-Ft-Simi-Darling.mp3",
        "Simi-Ft-Adekunle-Balance.mp3",
        "Soundz-Attention.mp3",
    ];

    const playTrack = (index) => {
        document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('playing'));
        currentTrackIndex = index;
        const trackPath = 'path-music/' + musicList[index];
        audio.src = trackPath;
        audio.play();
        playPauseBtn.textContent = 'Pause';
        audio.addEventListener('ended', () => {
            playNextTrack();
        });
        document.querySelectorAll('.playlist-item')[index].classList.add('playing');
    };

    const playNextTrack = () => {
        currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
        playTrack(currentTrackIndex);
    };

    musicList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.classList.add('playlist-item');
        listItem.textContent = item;
        listItem.addEventListener('click', () => {
            playTrack(index);
        });
        playlist.appendChild(listItem);
    });

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });
});