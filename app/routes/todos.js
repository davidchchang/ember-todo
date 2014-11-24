import Ember from 'ember';

var TodosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('todo');
  }
});

export default TodosRoute;