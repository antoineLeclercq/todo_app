/* globals describe, it, expect, todoItems, TodoList, beforeEach, afterEach, _ */

describe('TodoList Collection', function () {
  beforeEach(function () {
    localStorage.clear();
    this.todos = new TodoList(todoItems);
  });

  it('creates a collection of todo items', function () {
    expect(this.todos.toJSON().length).toBe(todoItems.length);
    expect(this.todos.pluck('name').sort()).toEqual(_.pluck(todoItems, 'name').sort());
  });

  it('assigns a unique id to each new todo item', function () {
    var ids = this.todos.pluck('id');

    expect(ids.length).toEqual(this.todos.length);
    expect(_.uniq(ids).length).toEqual(this.todos.length);
    expect(_.every(ids, function (id) {
      return typeof id === 'number';
    })).toBe(true);
  });

  it('can delete a todo item', function () {
    var deletedItem = this.todos.first();
    this.todos.remove(this.todos.first());

    expect(deletedItem).not.toBe(this.todos.first());
    expect(this.todos.length).toBe(todoItems.length - 1);
  });

  it('does not duplicate todo id after deleting last todo and adding new todo', function () {
    var lastId = _.max(this.todos.pluck('id'), function (id) { return id; });

    this.todos.remove(this.todos.last());
    this.todos.add({});
    expect(_.max(this.todos.pluck('id'), function (id) { return id; })).toBe(lastId + 1);
  });

  it('gets the last id from the models added if at least one of them already has an id', function () {
    var todos = this.todos.toJSON();
    var newTodoList = new TodoList(todos);

    newTodoList.add(todoItems);

    expect(_.max(newTodoList.pluck('id'), function (id) { return id; }))
      .toBe(_.max(this.todos.pluck('id'), function (id) { return id; }) + todoItems.length);
  });
});

describe('TodoList Collection synchronizing with localStorage', function () {
  beforeEach(function () {
    this.todos = new TodoList(todoItems);
    this.todos.setStorage();
  });

  afterEach(function () {
    localStorage.clear();
  });

  it('writes to localStorage', function () {
    expect(JSON.stringify(this.todos.toJSON())).toEqual(localStorage.getItem(this.todos.storageName));
  });

  it('reads from localStorage', function () {
    var newTodoList = new TodoList();

    expect(JSON.stringify(newTodoList.toJSON())).toEqual(localStorage.getItem(newTodoList.storageName));
  });

  it('updates localStorage on change', function () {
    this.todos.remove(this.todos.last());
    expect(JSON.stringify(this.todos.toJSON())).toEqual(localStorage.getItem(this.todos.storageName));

    this.todos.add(todoItems[0]);
    expect(JSON.stringify(this.todos.toJSON())).toEqual(localStorage.getItem(this.todos.storageName));
  });
});