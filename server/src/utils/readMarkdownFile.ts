// utils/readMarkdownFile.ts
import { promises as fs } from "fs";

export const readMarkdownFile = async (filePath: string): Promise<string> => {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.error("Error reading Markdown file:", error);
    throw error;
  }
};
