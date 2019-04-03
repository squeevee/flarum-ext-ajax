import app from 'flarum/app';
import { override } from 'flarum/extend';

import User from 'flarum/models/User';

import UpdateDriver from './UpdateDriver';

export default class Updater {
  constructor(driver) {

    if (!(driver instanceof UpdateDriver)) {
      throw new Error('driver must be type UpdateDriver');
    }

    this.driver = driver;
    this.driver.updateHandler = this.onUpdate;

    //User.prototype.isOnline = Model.attribute('isOnline');

  }

  onUpdate(diff) {
    var changed = false;

    // Update current user's notifications
    if (app.session.user && diff.notifications) {
      var count = diff.notifications.filter((n)=>n.userId == app.session.user.id()).length;

      app.session.user.pushAttributes({
        unreadNotificationCount: app.session.user.unreadNotificationCount() + count,
        newNotificationCount: app.session.user.newNotificationCount() + count
      });
      changed = true;
    }

    //On index page
    //Update reply counts and recent replies of visible discussions
    //Alert user of new discussions

    //On discussion page
    //Alert user of new replies

    // Update online/offline status of other users
    if (diff.users) {
      if (diff.users.loggedIn) {
        for (let diff_user of diff.users.loggedIn) {
          console.log(diff_user);
        }
      }
      
    }

    if (changed)
      m.redraw();
  }
}