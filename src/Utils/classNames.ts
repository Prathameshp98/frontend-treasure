/**
 * Utility function to conditionally join class names
 * @param classes - Array of class names or conditional class objects
 * @returns Combined class string
 */
export const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Utility function for conditional CSS classes
 * @param baseClass - Base CSS class
 * @param conditionalClasses - Object with condition-class pairs
 * @returns Combined class string
 */
export const conditionalClasses = (
  baseClass: string,
  conditionalClasses: Record<string, boolean>
): string => {
  const additional = Object.entries(conditionalClasses)
    .filter(([, condition]) => condition)
    .map(([className]) => className);
  
  return classNames(baseClass, ...additional);
};
