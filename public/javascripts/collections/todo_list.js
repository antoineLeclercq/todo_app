var TodoList = Backbone.Collection.extend({
  model: Todo,
  lastId: 0,
  storageName: 'todoList',
  setLastId: function () {
    var maxId;

    if (this.isEmpty()) { return; }

    maxId = this.max(function (model) { return model.get('id'); }).get('id');
    this.lastId = this.lastId < maxId ? maxId : this.lastId;
  },
  nextId: function () {
    this.setLastId();
    return ++this.lastId;
  },
  readStorage: function () {
    var todos = JSON.parse(localStorage.getItem(this.storageName));
    if (todos) { this.set(todos); }
  },
  setStorage: function () {
    localStorage.setItem(this.storageName, JSON.stringify(this.toJSON()));
  },
  initialize: function () {
    this.readStorage();
    $(window).on('unload', this.setStorage.bind(this));
    this.on('change update', this.sort);
    this.comparator = 'isCompleted';
    this.sort();
  },
});