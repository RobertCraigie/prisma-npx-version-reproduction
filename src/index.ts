import { generatorHandler } from "@prisma/generator-helper";
import generate from "./generate";

generatorHandler({
  onManifest: () => ({
    defaultOutput: "custom-output",
    prettyName: "Generator tester",
  }),
  onGenerate: generate,
});
