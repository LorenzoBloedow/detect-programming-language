import languageExtensions from"./assets/languageExtensions.json";export default function getProgrammingLanguage(fileName){let fileExtension=fileName.split(".");fileExtension=fileExtension[fileExtension.length-1];return languageExtensions["."+fileExtension];}