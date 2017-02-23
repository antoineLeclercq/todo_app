var Todo = Backbone.Model.extend({
  defaults: {
    isCompleted: false,
  },
  getCategory: function () {
    if (this.get('month') && this.get('year')) {
      return this.get('month') + '/' + this.get('year').slice(-2);
    } else {
      return 'No Due Date';
    }
  },
  setCategory: function () {
    this.set('category', this.getCategory());
  },
  initialize: function () {
    if (this.collection && typeof this.get('id') !== 'number') {
      this.set('id', this.collection.nextId());
    }
    this.setCategory();
    this.on('change', this.setCategory);
  },
});