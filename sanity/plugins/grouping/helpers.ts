

/**
* Checks if the given value is a non-empty array.
*
* @param value - The value to check.
* @returns `true` if the value is a non-empty array; otherwise, `false`.
*/
export function isNonEmptyArray<T>(value: unknown): value is T[] {
 return Array.isArray(value) && value.length > 0;
}