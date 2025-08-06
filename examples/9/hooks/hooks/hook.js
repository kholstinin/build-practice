import { addHook } from "../hook-runtime.js";

addHook('onModuleInit', function(module) {
  console.log(module);
});
