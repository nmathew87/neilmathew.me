import type { APIRoute } from 'astro';
import { getPosts, formatDate } from '../../utils/posts';
import { socialImage } from '../../utils/social-image';
export async function getStaticPaths() {
  return (await getPosts()).map(post => ({ params: { slug: post.id }, props: { title: post.data.title, date: formatDate(post.data.publishDate) } }));
}
export const GET: APIRoute = ({ props }) => socialImage(props.title, props.date);
