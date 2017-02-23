var App = {
  templates: JST,
  init: function () {
    this.todos = new TodoList();
    this.renderCategories();
    this.renderTodos();
  },
  renderTodos: function () {
    new TodoListView({
      collection: this.todos,
    });

    this.todoFormView = new TodoFormView();
  },
  renderCategories: function () {
    this.allTodosCategoriesView = new CategoriesView({
      collection: this.todos,
      el: $('#sidebar .all-todos').get(0),
      attributes: {
        template: this.templates.all_todos_categories,
      }
    });

    this.completedTodosCategoriesView = new CategoriesView({
      collection: this.todos,
      el: $('#sidebar .completed-todos').get(0),
      attributes: {
        completedTodosOnly: true,
        template: this.templates.completed_todos_categories,
      }
    });
  },
};

Handlebars.registerPartial('category_todos', App.templates.category_todos);

$(function () {
  App.init();
});
