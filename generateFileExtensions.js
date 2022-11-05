import fs from "fs";
import languages from "./languages.json" assert { type: "json" }

const extensionsObject = {}
for (const language in languages) {
    const currentExtensions = languages[language].extensions;

    if (currentExtensions && languages[language].type === "programming") {

        for (const extension of currentExtensions) {
            extensionsObject[extension] = language;
        }

    }

}

fs.writeFile("src/assets/languageExtensions.json", JSON.stringify(extensionsObject), err => { if (!err) { console.log("languageExtensions.json file generated!") } });