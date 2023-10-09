/**
 * This file wraps the original MDXComponents so we don't need to modify the original code.
 */

import MDXComponentsOriginal from '@theme-original/MDXComponents';
import type { MDXComponentsObject } from '@theme/MDXComponents';

const MDXComponents: MDXComponentsObject = {
  ...MDXComponentsOriginal
};
export default MDXComponents;
