import languageExtensions from "./assets/languageExtensions.json";
export default function getProgrammingLanguage(fileName) {
    // If there's no name, only a file extension.
    if (fileName.charAt(0) === ".") {
        return languageExtensions[fileName];
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
    return languageExtensions[fileExtension];
}
