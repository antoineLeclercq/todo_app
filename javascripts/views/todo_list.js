var TodoListView = Backbone.View.extend({
  el: $('#content').get(0),
  template: App.templates.todo_list,
  events: {
    'click .todo': 'toggleComplete',
    'click .add': 'displayNewTodoForm',
    'click .todo_label': 'displayExistingTodoForm',
    'click .delete': 'delete'
  },
  toggleComplete: function (e) {
    e.preventDefault();
    var $target = $(e.target);
    var $li = $target.closest('li');
    var id = Number($li.attr('data-id'));
    var model = this.collection.get(id);

    if ($target.hasClass('check') || $target.parent().hasClass('check') || $target.hasClass('todo')) {
      model.set('isCompleted', !model.get('isCompleted'));
      $li.toggleClass('checked', model.get('isCompleted'));
    }
  },
  displayNewTodoForm: function (e) {
    e.preventDefault();

    App.todoFormView.render();
  },
  displayExistingTodoForm: function (e) {
    e.preventDefault();
    var id = this.getTodoId(e);

    App.todoFormView.render(this.collection.get(id));
  },
  delete: function (e) {
    e.preventDefault();
    var id = this.getTodoId(e);

    this.collection.remove(id);
  },
  getTodoId: function (e) {
    return Number($(e.target).closest('li').attr('data-id'));
  },
  render: function (categoryAndParent) {
    var todos;
    if (categoryAndParent && categoryAndParent.category) {
      this.category = categoryAndParent.category;
      todos = this.getTodosForCategory(categoryAndParent.parentCategory);
    } else {
      todos = this.getTodosForCategory();
    }
    console.log(categoryAndParent, this.category);

    this.$el.html(this.template({
      category: this.category,
      count: this.collection.length,
      todos: todos,
    }));
  },
  getTodosForCategory: function (parentCategory) {
    if (this.category === 'All Todos') {
      return this.collection.toJSON();
    } else if (this.category === 'Completed') {
      return _.where(this.collection.toJSON(), { isCompleted: true });
    } else if (parentCategory === 'Completed') {
      return _.where(this.collection.toJSON(), { category: this.category, isCompleted: true });
    } else {
      return _.where(this.collection.toJSON(), { category: this.category });
    }
  },
  initialize: function () {
    this.category = 'All Todos';
    this.render();
    this.listenTo(this.collection, 'change update', this.render);
    this.listenTo(App.allTodosCategoriesView, 'categoryClick', this.render);
    this.listenTo(App.completedTodosCategoriesView, 'categoryClick', this.render);
  },
});