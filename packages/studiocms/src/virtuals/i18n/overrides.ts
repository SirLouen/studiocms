import type { LanguageFlagIdentifier } from './config.js';

/**
 * Use this map to set custom flag keys for locales whose flag icon name
 * doesn't match the `lang-{locale}` pattern from:
 * https://icon-sets.iconify.design/circle-flags/?icon-filter=lang-&keyword=flag
 */
export const translationFlagKeyOverrides: Record<string, LanguageFlagIdentifier> = {} as const;
