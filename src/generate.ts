import type { GeneratorOptions } from "@prisma/generator-helper";

export default async (options: GeneratorOptions) => {
  console.log(`Got prisma version ${options.version}`);
};
