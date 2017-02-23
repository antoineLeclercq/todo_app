var TodoFormView = Backbone.View.extend({
  el: $('#modal_container').get(0),
  template: App.templates.todo_form,
  events: {
    'click #modal': 'hide',
    'click [type=submit]': 'getSubmitButton',
    'submit .todo-details': 'updateAndHide',
  },
  hide: function (e) {
    e.preventDefault();
    if ($(e.target).attr('id') === 'modal') {
      this.$el.fadeOut(300);
    }
  },
  updateAndHide: function (e) {
    e.preventDefault();
    var $form = $(e.target);
    var inputs = $form.serializeArray();
    var attrs = {};
    var id = Number($form.attr('data-id'));

    inputs.forEach(function (input) {
      attrs[input.name] = input.value;
    });

    if (this.$submitButton.hasClass('mark-complete')) { attrs.isCompleted = true; }

    if (id) {
      App.todos.get(id).set(attrs);
    } else {
      App.todos.add(attrs);
    }

    this.$el.fadeOut(300);
  },
  getSubmitButton: function (e) {
    this.$submitButton = $(e.target);
  },
  render: function (model) {
    var data = model ? model.toJSON() : {};
    this.$el.html(this.template(data));
    this.$el.fadeIn(300);
  }
});