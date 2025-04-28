import type { Environment } from "@/dtos/util/environment.model";

// You can access VITE_ prefixed variables directly using import.meta.env
export const environment: Environment = {
  baseUrl: import.meta.env.VITE_BASE_URL as string,
  title: import.meta.env.VITE_TITLE as string
};
