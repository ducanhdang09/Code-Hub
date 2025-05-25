import { config } from "../../config/gluestack-ui.config";

export const UseTokenColor = () => {
  const { tokens } = config;
  return tokens.colors;
};
