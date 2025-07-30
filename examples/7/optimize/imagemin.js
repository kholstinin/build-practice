import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";

await imagemin(["./cow.jpeg"], {
  destination: "dist",
  plugins: [imageminJpegtran()],
});
