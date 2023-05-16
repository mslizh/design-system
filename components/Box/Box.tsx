import { Box } from "@mui/material";
import { registerComponent } from "@plasmicapp/host";

export function registerBox(styleProps: any) {
  registerComponent(Box, {
    name: "Box",
    props: {
      ...styleProps,
    },
    importPath: "@mui/material",
  });
}