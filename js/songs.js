const arraySongs = [
    "https://www.youtube.com/embed/_oI_rZE1UWY", 
    "https://www.youtube.com/embed/OjbYDq1ATMc",
    "https://www.youtube.com/embed/U51Ul6iyMAA",
    "https://www.youtube.com/embed/2xhT82R3DkQ",
    "https://www.youtube.com/embed/RrcGvbikMeM",
    "https://www.youtube.com/embed/SJpSu8SVd1E",
    "https://www.youtube.com/embed/JkyczBrrQL8",
    "https://www.youtube.com/embed/4ggZQjtH78U",
    "https://www.youtube.com/embed/RcEmQ2Q7f94",
    "https://www.youtube.com/embed/KH0UEvJ_ES8"
]

const frame = document.querySelector('#video');

function playSong(index) {
    frame.src = arraySongs[index];
    // frame.src += "&autoplay=1";
}

const faixas = document.querySelectorAll('.track');
faixas.forEach((faixa, index) => {
    faixa.addEventListener('click', () => {
        playSong(index);
    });
});