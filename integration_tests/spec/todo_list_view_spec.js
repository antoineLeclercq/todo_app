/* globals describe, it, expect, beforeEach, afterEach, todoItems, TodoListView, TodoList, beforeEach */

describe('Category TodoList View', function () {
  beforeEach(function () {
    this.view = new TodoListView({ collection: new TodoList(todoItems) });
  });

  afterEach(function () {
    this.view.remove();
  });

  it('renders a view with the todo items and the category name as header', function () {
    this.view.render();
    expect(this.view.$el.find('h1').text()).toBe('All Todos');
    expect(this.view.$el.find('.todo').length).toEqual(this.view.collection.length);
  });

  it('renders the correct category and count of todos', function () {
    var category = this.view.collection.first().get('category');

    this.view.render({
      category: category,
      parentCategory: 'All Todos',
    });

    expect(this.view.$el.find('h1').text()).toBe(category);
    expect(this.view.$el.find('.todo').length)
      .toEqual(_.where(this.view.collection.toJSON(), { category: category }).length);

    this.view.render({
      category: category,
      parentCategory: 'Completed',
    });

    expect(this.view.$el.find('h1').text()).toBe(category);
    expect(this.view.$el.find('.todo').length)
      .toEqual(_.where(this.view.collection.toJSON(), { category: category, isCompleted: true }).length);
  });
});