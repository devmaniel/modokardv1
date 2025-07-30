// Type declarations for Fontsource modules
declare module '@fontsource-variable/outfit' {
  const content: string;
  export default content;
}

// Generic declaration for other Fontsource modules
declare module '@fontsource-variable/*' {
  const content: string;
  export default content;
}

declare module '@fontsource/*' {
  const content: string;
  export default content;
} 