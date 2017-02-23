/* globals describe, it, expect, todoItems, Todo */

describe('Todo Model', function () {
  var todos = todoItems.map(function (attrs) {
    return new Todo(attrs);
  });

  it('creates a Todo item', function () {
    todos.forEach(function (todo, index) {
      expect(todo).toBeDefined();
      expect(todo.get('name')).toBe(todoItems[index].name);
    });
  });

  it('creates a category attribute and handles invalid or incomplete date', function () {
    todos.forEach(function (todo, index) {
      expect(todo.get('category')).toBe(getCategory(todoItems[index].month, todoItems[index].year));
    });
  });

  it('sets the isCompleted attribute to a default value if no value passed in', function () {
    todos.forEach(function (todo, index) {
      expect(todo.get('isCompleted')).toBe(!!todoItems[index].isCompleted);
    });
  });

  it('correctly updates the category attribute when todo item is edited', function () {
    var todo = new Todo();
    var month = '12';
    var year = '2020';

    expect(todo.get('category')).toBe('No Due Date');
    todo.set('month', month);
    todo.set('year', year);
    expect(todo.get('category')).toBe(getCategory(month, year));
  });
});

function getCategory(month, year) {
    if (month && year) {
      return month + '/' + year.slice(-2);
    } else {
      return 'No Due Date';
    }
}