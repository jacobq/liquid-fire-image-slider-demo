import Route from '@ember/routing/route';

const basePath = 'assets/icons'; // would be better done in environment/configuration

class ImageInfo {
  id;
  src;
  alt;

  constructor({ id, fileName, description }) {
    this.id = id;
    this.src = `${basePath}/${fileName}`;
    this.alt = description;
  }
}

const images = [
  { id: 'sunset', fileName: 'sunset400.webp', description: 'pretty sunset' },
  { id: 'fire', fileName: 'fire400.webp', description: 'hot fire' },
  { id: 'liquid', fileName: 'liquid400.webp', description: 'strange liquid' },
  { id: 'road', fileName: 'road400.webp', description: 'winding road' },
];

export default class SliderRoute extends Route {
  model() {
    return images.map((x) => new ImageInfo(x));
  }
}
