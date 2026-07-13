// Type declarations for @murray/brand.
export interface MurrayBrand {
  version: string;
  color: Record<string, string>;
  colorRgb: Record<string, string>;
  fontFamily: string;
  text: Record<string, string>;
  weight: Record<string, number>;
  space: Record<string, string>;
  radius: Record<string, string>;
  shadow: Record<string, string>;
  motion: Record<string, string>;
  focusRing: string;
  layout: Record<string, string>;
  icon: Record<string, string>;
}
export const brand: MurrayBrand;
export default brand;
