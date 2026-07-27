export type Language = "sk" | "en";
export type Theme = "light" | "dark";
export type ThemeSource = "system" | "user" | null;
export type MakerWindowPosition = { x: number; y: number };
export type MakerWindowDrag = MakerWindowPosition & { pointerId: number };
