import Route from '@ember/routing/route';

const basePath = '/images'; // would be better done in environment/configuration

class ImageInfo {
  src;
  alt;

  constructor(fileName, description) {
    this.src = `${basePath}/${fileName}`;
    this.alt = description;
  }
}

const images = [
  { fileName: 'quino-al-JFeOy62yjXk-unsplash.jpg', description: 'sunset' },
  { fileName: 'nathan-lindahl-1j18807_ul0-unsplash.jpg', description: 'fire' },
  { fileName: 'pawel-czerwinski-NTYYL9Eb9y8-unsplash.jpg', description: 'liquid' },
  { fileName: 'holden-baxter-oxQ0egaQMfU-unsplash.jpg', description: 'road' },
];

export default class SliderRoute extends Route {
  model() {
    return images.map(({ fileName, description }) => new ImageInfo(fileName, description))
  }
}
