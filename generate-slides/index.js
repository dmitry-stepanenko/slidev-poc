import yargs from "yargs";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const args = yargs(process.argv);

const productIds = (Array.isArray(args.argv.productIds) ? args.argv.productIds : [args.argv.productIds].filter(Boolean))
    .map((id) => id.toString().split(","))
    .flat();

if (!productIds.length) {
    throw new Error('"productIds" argument is required');
}

const slidesTemplate = readFileSync(resolve("./generate-slides/slides-template.md"), "utf-8");

const START_TOKEN = "<!-- PRODUCT DETAILS TEMPLATE START  -->";
const END_TOKEN = "<!-- PRODUCT DETAILS TEMPLATE END  -->";
const PRODUCT_ID_TOKEN = "__VAR_PRODUCT_ID__";

const startIndex = slidesTemplate.indexOf(START_TOKEN);
const endIndex = slidesTemplate.indexOf(END_TOKEN);

const productSlideTemplate = slidesTemplate.slice(startIndex + START_TOKEN.length, endIndex);

const result =
    slidesTemplate.slice(0, startIndex) +
    productIds.map((id) => productSlideTemplate.replace(PRODUCT_ID_TOKEN, id)).join("\n") +
    slidesTemplate.slice(endIndex + END_TOKEN.length);

writeFileSync("./slides.md", result);
