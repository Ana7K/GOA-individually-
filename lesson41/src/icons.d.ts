// For JSX icon components
declare module "*.jsx" {
  import type { ComponentType, SVGProps } from "react";
  const content: ComponentType<SVGProps<SVGSVGElement>>;
  export default content;
}

// For direct SVG imports (optional, if you ever import .svg files)
declare module "*.svg" {
  import type { ComponentType, SVGProps } from "react";
  const content: ComponentType<SVGProps<SVGSVGElement>>;
  export default content;
}
