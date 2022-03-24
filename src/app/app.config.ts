import { environment } from '../environments/environment';

export const STORE_ID = '5ffbd8d0677f803234d1bb92'; // To identify in the DB
export const STORE_DOMAIN = 'www.escuelaparaembarazadas.com'; // To identify in the DB

export const routedPages = [
  {
    alias: ['home'],
    path : '/'
  },
  {
    alias: ['about'],
    path : '/about'
  }
];

export const cmsBaseUrl = '/assets/cms.json';
export const PRODUCTS_BASE_URL = `${environment.API_BASE}/products/property/${STORE_ID}`;
export const SERVICES_BASE_URL = '/assets/products.json';
export const CATEGORIES_SERVICES_BASE_URL = '/assets/categories.json';
export const BLOG_BASE_URL = '/assets/blog.json';
export const TAG_BLOG_BASE_URL = '/assets/tagBlog.json';
export const CATEGORIES_BASE_URL = `${environment.API_BASE}/properties/${STORE_ID}/categories`;
export const STORE_NAME = 'EPE';
export const STORE_URL = `https://${STORE_DOMAIN}`;

export const isMultiStore = false;

export const defaultLanguage = 'es';

export const languages = [
  {
    name: 'Español',
    code: 'es'
  },
  {
    name: 'English',
    code: 'en'
  }
];
