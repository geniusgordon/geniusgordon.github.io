import prune from 'underscore.string/prune';
import include from 'underscore.string/include';

export const removeTags = (html = '') => html.replace(/<[^>]*>/g, '');

export const preview = (html = '') => {
  const more = '<!--more-->';
  if (include(html, more)) {
    return html.split(more)[0];
  }
  return prune(removeTags(html), 200);
};
