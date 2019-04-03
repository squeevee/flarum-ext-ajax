import DiscussionPage from 'flarum/components/DiscussionPage';

import UpdateDriver from './UpdateDriver';

export default class AjaxDriver extends UpdateDriver {
  init() {
    this.setTimeout();
    super.init();
  }

  check() {
    var filter = {
      since: this.lastTime,
      models: {
        'notifications': 'all',
        'discussions': 'all',
        'users': 'all'
      }
    };

    if (app.current instanceof DiscussionPage && app.current.discussion)
      filter.models['posts'] = { 'discussions': [app.current.discussion.id()] }

    app.request({
      method: 'POST',
      url: app.forum.attribute('apiUrl') + '/ajax-diff',
      data: filter
    }).then((data) => {
      this.updated(data);
      this.setTimeout();
    });
  }

  setTimeout() {
    this.lastTime = new Date();
    setTimeout(this.check.bind(this), 15000);
  }

}