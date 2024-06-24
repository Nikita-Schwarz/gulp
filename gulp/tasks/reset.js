import { deleteAsync } from 'del';
import { distPath } from '../config/paths.js';

const reset = () => deleteAsync(distPath + '/*');

export { reset };