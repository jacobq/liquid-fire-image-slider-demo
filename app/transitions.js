export default function () {
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );

  this.transition(
    this.hasClass('image-container'),
    this.toValue(function(toValue, fromValue) {
      return toValue && fromValue && toValue.index > fromValue.index;
    }),
    this.use('toLeft', { duration: 600 }),
    this.reverse('toRight', { duration: 600 }),
  );
}
