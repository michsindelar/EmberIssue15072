import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('first', function(){
   this.route('second', function(){
     this.route('third');
   });
 });
});

export default Router;
