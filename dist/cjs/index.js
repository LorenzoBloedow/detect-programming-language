"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const languageExtensions_json_1 = __importDefault(require("./assets/languageExtensions.json"));
function getProgrammingLanguage(fileName) {
    // If there's no name, only a file extension.
    if (fileName.charAt(0) === ".") {
        return languageExtensions_json_1.default[fileName];
    }
    let fileExtensionArray = fileName.split(".");
    let fileExtension;
    if (fileExtensionArray.length > 1) {
        // Remove the name of the file and leave only the extension, taking into account file extensions with more than one dot.
        fileExtensionArray.shift();
        fileExtension = fileExtensionArray.join(".");
        fileExtension = "." + fileExtension;
    }
    else {
        fileExtension = "." + fileExtensionArray[0];
    }
    return languageExtensions_json_1.default[fileExtension];
}
exports.default = getProgrammingLanguage;
