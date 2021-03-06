import * as React from 'react';
import * as Scrivito from 'scrivito';
import { groupBy, truncate } from 'lodash-es';
import BlogPostDate from './BlogPostDate';
import formatDate from '../../utils/formatDate';
import InPlaceEditingPlaceholder from '../InPlaceEditingPlaceholder';
import isImage from '../../utils/isImage';
import { textExtractFromObj } from '../../utils/textExtract';

const BlogPostPreviewList = Scrivito.connect(({ maxItems, author, tag }) => {
    let blogPosts = Scrivito.getClass('BlogPost').all().order('publishedAt', 'asc');
    if (author) {
        blogPosts = blogPosts.and('author', 'refersTo', author);
    }
    if (tag) {
        blogPosts = blogPosts.and('tags', 'equals', tag);
    }

    let posts;
    if (maxItems) {
        posts = blogPosts.take(maxItems);
    } else {
        posts = [...blogPosts];
    }

    if (!posts.length) {
        return (
                <InPlaceEditingPlaceholder center={ true }>
                    There are no blog posts. Create one using the page menu.
                </InPlaceEditingPlaceholder>
                );
    }

    const months = groupBy(posts, post => {
        const publishedAt = post.get('publishedAt');
        return publishedAt && formatDate(publishedAt, 'mmmm yyyy');
    });

    return (
            <React.Fragment>
                {
                    Object.entries(months).map(([month, monthPosts]) =>
                        <React.Fragment key={ `month: ${month}` }>
                    
                            <PostsTimeline posts={ monthPosts } />
                        </React.Fragment>
                    )
                }
            </React.Fragment>
            );
});

const MonthHeadline = Scrivito.connect(({ date }) => {
    if (!date) {
        return null;
    }

    return (
            <ul className="timeline">
                <li className="timeline-divider">
                    <time dateTime={ formatDate(date, 'mm-yyyy') }>
                        { formatDate(date, 'mmmm yyyy') }
                    </time>
                </li>
            </ul>
            );
});

const PostsTimeline = Scrivito.connect(({ posts }) =>
    <ul className="timeline">
        { posts.map(post => <BlogPostPreview key={ post.id() } post={ post } />) }
    </ul>
);

const BlogPostPreview = Scrivito.connect(({ post }) => {
    return (
            <li>
            <BlogPostDate post={ post } />
            <div className="timeline-panel">
                <div className="timeline-body">
                    <BlogPostTitleImage post={ post } />
                    <h3>
                        { post.get('title') }
                    </h3>
                    <h4>{ post.get('subtitle') }</h4>
                    <p>{ truncate(textExtractFromObj(post), {length: 300, separator: /,? +/ }) }</p>
                </div>
                <div className="timeline-footer">
            
                </div>
            </div>
            </li>
                );
    });

    const BlogPostTitleImage = Scrivito.connect(({ post }) => {
        const titleImage = post.get('titleImage');
        console.log('titleImage', post);
        if (!isImage(titleImage)) {
            return null;
        }

        return (
                <a href="https://cdn0.scrvt.com/6929351aa2f94e8ebc042ac9cf43c635/e9804c6c28780903/4e33fbcdf682/v/05c5b0065bc9/locandina_fds.jpg" target="_blank">
                    <Scrivito.ImageTag
                        content={ titleImage }
                        className="img-responsive"
                        alt={ titleImage.get('alternativeText') }
                        />
                </a>
                );
    });

    export default BlogPostPreviewList;
