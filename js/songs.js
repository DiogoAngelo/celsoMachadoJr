const arraySongs = ['<iframe width="415" height="415" src="https://www.youtube.com/embed/_oI_rZE1UWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 
'<iframe width="415" height="415" src="https://www.youtube.com/embed/OjbYDq1ATMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="415" height="415" src="https://www.youtube.com/embed/U51Ul6iyMAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="415" height="415" src="https://www.youtube.com/embed/2xhT82R3DkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="415" height="415" src="https://www.youtube.com/embed/RrcGvbikMeM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="415" height="415" src="https://www.youtube.com/embed/SJpSu8SVd1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="415" height="415" src="https://www.youtube.com/embed/JkyczBrrQL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="415" height="415" src="https://www.youtube.com/embed/4ggZQjtH78U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="415" height="415" src="https://www.youtube.com/embed/RcEmQ2Q7f94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
'<iframe width="415" height="415" src="https://www.youtube.com/embed/KH0UEvJ_ES8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']

const album = document.querySelector('.album');

function playSong(index) {
    album.innerHTML = arraySongs[index];
}

const faixas = document.querySelectorAll('.track');
faixas.forEach((faixa, index) => {
    faixa.addEventListener('click', () => {
        playSong(index);
    });
});