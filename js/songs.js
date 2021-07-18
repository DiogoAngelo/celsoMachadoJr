export default class Songs {
  constructor(video, track) {
    this.frame = document.querySelector(video);
    this.faixas = document.querySelectorAll(track);
    this.arraySongs = [
      'https://www.youtube.com/embed/_oI_rZE1UWY',
      'https://www.youtube.com/embed/OjbYDq1ATMc',
      'https://www.youtube.com/embed/U51Ul6iyMAA',
      'https://www.youtube.com/embed/2xhT82R3DkQ',
      'https://www.youtube.com/embed/RrcGvbikMeM',
      'https://www.youtube.com/embed/SJpSu8SVd1E',
      'https://www.youtube.com/embed/JkyczBrrQL8',
      'https://www.youtube.com/embed/4ggZQjtH78U',
      'https://www.youtube.com/embed/RcEmQ2Q7f94',
      'https://www.youtube.com/embed/KH0UEvJ_ES8',
    ];
  }

  playSong(index) {
    this.frame.src = this.arraySongs[index];
  }

  bindEvents() {
    this.playSong = this.playSong.bind(this);
  }

  addEvents() {
    this.faixas.forEach((faixa, index) => {
      faixa.addEventListener('click', () => {
        this.playSong(index);
      });
    });
  }

  init() {
    this.bindEvents();
    if (this.frame && this.faixas.length) {
      this.addEvents();
    }
  }
}
