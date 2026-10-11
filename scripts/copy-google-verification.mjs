import { copyFile } from "node:fs/promises";

const verificationFile = "google05e0c10eedb383dd.html";

await copyFile(
  `public/${verificationFile}`,
  `out/${verificationFile}`,
);
