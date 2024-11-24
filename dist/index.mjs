var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
import fs from "fs";
import * as libre from "libreoffice-convert";
import { promisify } from "util";
import path from "path";
var convert2 = promisify(libre.convert);
function convertWordToPdf(src) {
  return __async(this, null, function* () {
    if (!fs.existsSync(src)) return null;
    const ext = path.extname(src);
    if (ext === ".pdf") return src;
    const out = src + ".pdf";
    const pdfBuffer = yield convert2(fs.readFileSync(out), "pdf", void 0);
    fs.writeFileSync(out, pdfBuffer);
  });
}
export {
  convertWordToPdf
};
//# sourceMappingURL=index.mjs.map