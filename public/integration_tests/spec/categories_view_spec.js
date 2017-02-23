/* globals describe, it, expect, beforeEach, todoItems, CategoriesView, TodoList, beforeEach */

describe('Categories view', function () {
  beforeEach(function () {
    this.todos = new TodoList(todoItems);

    this.allTodosCategoriesView = new CategoriesView({
      collection: this.todos,
      attributes: {
        template: App.templates.all_todos_categories
      },
    });

    this.completedTodosCategoriesView = new CategoriesView({
      collection: this.todos,
      attributes: {
        completedTodosOnly: true,
        template: App.templates.completed_todos_categories,
      }
    });
  });

  afterEach(function () {
    this.allTodosCategoriesView.remove();
    this.completedTodosCategoriesView.remove();
  });

  it('has a method to generate the categories and the count of todos per categories', function () {
    expect(this.allTodosCategoriesView.getCategoriesAndCount()).toEqual(getCategoriesAndCount(this.todos));
    expect(this.completedTodosCategoriesView.getCategoriesAndCount()).toEqual(getCategoriesAndCount(this.todos, true));
  });

  it('can create a view for all todos or completed todos only', function () {
    expect(this.allTodosCategoriesView.getCategoriesAndCount().count).toBe(todoItems.length);
    expect(this.completedTodosCategoriesView.getCategoriesAndCount().count).toBe(todoItems.filter(function (item) {
      return item.isCompleted;
    }).length);
  });

  it('renders the categories and correct counts', function () {
    var allTodosCategoriesAndCount = getCategoriesAndCount(this.todos);
    var completedTodosCategoriesAndCount = getCategoriesAndCount(this.todos, true);

    expect(this.allTodosCategoriesView.$el.find('li').length)
      .toEqual(allTodosCategoriesAndCount.todosCountByCategory.length);
    expect(Number(this.allTodosCategoriesView.$el.find('header .count').text()))
      .toEqual(allTodosCategoriesAndCount.count);

    expect(this.completedTodosCategoriesView.$el.find('li').length)
      .toEqual(completedTodosCategoriesAndCount.todosCountByCategory.length);
    expect(Number(this.completedTodosCategoriesView.$el.find('header .count').text()))
      .toEqual(completedTodosCategoriesAndCount.count);

      expect(this.allTodosCategoriesView.$el.find('li').first().find('.category').text())
      .toEqual(allTodosCategoriesAndCount.todosCountByCategory[0].category);
    expect(Number(this.allTodosCategoriesView.$el.find('li').first().find('.count').text()))
      .toEqual(allTodosCategoriesAndCount.todosCountByCategory[0].count);

    expect(this.completedTodosCategoriesView.$el.find('li').first().find('.category').text())
      .toEqual(completedTodosCategoriesAndCount.todosCountByCategory[0].category);
    expect(Number(this.completedTodosCategoriesView.$el.find('li').first().find('.count').text()))
      .toEqual(completedTodosCategoriesAndCount.todosCountByCategory[0].count);
  });
});

function getCategoriesAndCount(todos, completedOnly) {
  var categoriesAndCount = {
      todosCountByCategory: [],
    };
    var categories = _.uniq(todos.pluck('category'));
    var attrs = {};

    if (completedOnly) { attrs.isCompleted = true; }

    categories.forEach(function (category) {
      var count;

      attrs.category = category;
      count = todos.where(attrs).length;

      if(count > 0) {
        categoriesAndCount.todosCountByCategory.push({
          category: category,
          count: count,
        });
      }
    });

    categoriesAndCount.count = categoriesAndCount.todosCountByCategory.reduce(function (sum, categoryCount) {
      return sum + categoryCount.count;
    }, 0);

    return categoriesAndCount;
}