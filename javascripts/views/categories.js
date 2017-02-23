var CategoriesView = Backbone.View.extend({
  events: {
    'click .todo-list': 'renderTodoList',
    'click header': 'renderTodoList',
  },
  render: function () {
    this.$el.html(this.template(this.getCategoriesAndCount()));
  },
  getCategoriesAndCount: function () {
    var categoriesAndCount = {
      todosCountByCategory: [],
    };
    var categories = _.uniq(this.collection.pluck('category'));
    var attrs = {};

    if (this.attributes.completedTodosOnly) { attrs.isCompleted = true; }

    categories.forEach(function (category) {
      var count;

      attrs.category = category;
      count = this.collection.where(attrs).length;

      if(count > 0) {
        categoriesAndCount.todosCountByCategory.push({
          category: category,
          count: count,
        });
      }
    }, this);

    categoriesAndCount.count = categoriesAndCount.todosCountByCategory.reduce(function (sum, categoryCount) {
      return sum + categoryCount.count;
    }, 0);

    return categoriesAndCount;
  },
  renderTodoList: function (e) {
    e.preventDefault();
    var $li = $(e.currentTarget);

    this.trigger('categoryClick', {
      category: $li.find('.category').text(),
      parentCategory: $li.closest('ul').prev().find('h2').text(),
    });
  },
  initialize: function () {
    this.template = this.attributes.template;
    this.render();
    this.listenTo(this.collection, 'change update', this.render);
  },
});