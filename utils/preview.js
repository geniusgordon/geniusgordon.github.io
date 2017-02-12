import prune from 'underscore.string/prune';
import include from 'underscore.string/include';

export default (html) => {
  if (!html) {
    return '';
  }
  const more = '<!--more-->';
  if (include(html, more)) {
    return html.split(more)[0];
  }
  return prune(html.replace(/<[^>]*>/g, ''), 200);
};
