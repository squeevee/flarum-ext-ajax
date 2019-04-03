import Updater from '../common/Updater';
import AjaxDriver from '../common/AjaxDriver';

export default function setupAjaxUpdater() {
  var driver = new AjaxDriver();
  app.updater = new Updater(driver);
}