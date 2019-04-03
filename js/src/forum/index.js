import setupAjaxUpdater from '../common/setupAjaxUpdater';

import liveHumanTimes from 'flarum/utils/liveHumanTimes';

app.initializers.add('ajax', app => {
  setupAjaxUpdater();
  liveHumanTimes();
});