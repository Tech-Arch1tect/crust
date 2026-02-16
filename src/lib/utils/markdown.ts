import { marked } from 'marked';
import { createHighlighter, type Highlighter } from 'shiki';

let highlighter: Highlighter | null = null;

async function getHighlighter(): Promise<Highlighter> {
	if (!highlighter) {
		highlighter = await createHighlighter({
			themes: ['github-dark'],
			langs: [
				'go',
				'typescript',
				'javascript',
				'css',
				'html',
				'dockerfile',
				'yaml',
				'bash',
				'json',
				'svelte'
			]
		});
	}
	return highlighter;
}

export async function renderMarkdown(md: string): Promise<string> {
	if (!md) return '';

	const hl = await getHighlighter();

	const renderer = new marked.Renderer();
	renderer.code = ({ text, lang }: { text: string; lang?: string }) => {
		const language = lang || 'text';
		try {
			return hl.codeToHtml(text, { lang: language, theme: 'github-dark' });
		} catch {
			return `<pre><code>${text}</code></pre>`;
		}
	};

	return await marked(md, {
		async: true,
		breaks: true,
		gfm: true,
		renderer
	});
}
