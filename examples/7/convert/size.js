import sharp from "sharp";
import fs from "node:fs";

const input = fs.readFileSync("./cow.jpeg");

fs.mkdirSync("./dist", { recursive: true });

sharp(input).resize(640, 480).toFile("dist/cow.jpeg");
