import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SliderComponent extends Component {
  @tracked selectedIndex = 0;
  @tracked indexedImages = (this.args.images || []).map((image, index) => ({
    ...image,
    index,
  }));

  get selectedImage() {
    return this.indexedImages[this.selectedIndex];
  }

  get isFirst() {
    return this.selectedIndex === 0;
  }

  get isLast() {
    return this.indexedImages.length <= 1 ||
      this.selectedIndex === this.indexedImages.length - 1;
  }

  @action
  next() {
    if (!this.isLast) {
      this.selectedIndex++;
    }
  }

  @action
  prev() {
    if (!this.isFirst) {
      this.selectedIndex--;
    }
  }
}
