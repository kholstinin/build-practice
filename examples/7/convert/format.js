import sharp from "sharp";
import fs from "node:fs";

const input = fs.readFileSync("./cow.jpeg");

fs.mkdirSync("./dist", { recursive: true });

sharp(input).webp().toFile("dist/cow.webp");
