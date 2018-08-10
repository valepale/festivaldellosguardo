import * as React from 'react';
import * as Scrivito from 'scrivito';
import formatDate from '../../utils/formatDate';

function BlogPostDate({ post }) {
  const date = post.get('publishedAt');

  if (!date) { return null; }

  return (
    <time className="timeline-badge" dateTime={ date.toISOString() }>
      { formatDate(date, 'dd/mm') }
    </time>
  );
}

export default Scrivito.connect(BlogPostDate);
