import { socialImage } from '../utils/social-image';
import { site } from '../site.config';
export const GET = () => socialImage(site.name, 'A personal notebook');
