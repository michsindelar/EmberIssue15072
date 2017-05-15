import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    q: {}
  },

  model(params) {
    if(params.q==='a'){
      return Ember.RSVP.resolve();
    }else{
      return Ember.RSVP.reject();
    }
  },

   actions: {
     error(error, transition) {
       this.replaceWith(transition.targetName, { queryParams: { q: 'a' }});
     }
   }
});
