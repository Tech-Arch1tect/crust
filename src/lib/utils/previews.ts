import type { MainPostPreview } from '../../api-client';

export function getPostPreviewTitle(post: MainPostPreview) {
	return post?.frontmatter?.title || 'Untitled Post';
}

export function getPostPreviewSlug(post: MainPostPreview) {
	return post?.frontmatter?.slug || '#';
}

export function getPostPreviewExcerpt(post: MainPostPreview) {
	return post?.excerpt || 'No preview available.';
}

export function getPostPreviewAuthor(post: MainPostPreview) {
	return post?.frontmatter?.author || 'Anonymous';
}

export function getPostPreviewReadingTime(post: MainPostPreview) {
	const time = post?.readingTime;
	return time ? `${time} min read` : 'Quick read';
}

export function getPostPreviewTags(post: MainPostPreview) {
	const tags = post?.frontmatter?.tags;
	return Array.isArray(tags) ? tags.filter(Boolean) : [];
}
