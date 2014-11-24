import Ember from 'ember';
import Resolver from 'ember/resolver';
import DS from 'ember-data';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

App.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});

export default App;
