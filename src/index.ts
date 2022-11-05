import languageExtensions from "./assets/languageExtensions.json";

export default function getProgrammingLanguage(fileName: string) {
    let fileExtension: string | string[] = fileName.split(".");
    fileExtension = fileExtension[fileExtension.length - 1];
    return languageExtensions["." + fileExtension as keyof typeof languageExtensions];
}