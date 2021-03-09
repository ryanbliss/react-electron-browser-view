/**
 * Clear remaining BrowserViews from previous instances
 */
import { BrowserView } from 'electron';

const removeViews = () => {
  const views = BrowserView.getAllViews();
  views.forEach(view => view.destroy());
};

export default removeViews;