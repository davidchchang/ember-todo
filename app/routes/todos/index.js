import Ember from 'ember';

var TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('todos');
  }
});

export default TodosIndexRoute;
