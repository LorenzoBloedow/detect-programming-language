# About 
This is a package that provides a single function: `getProgrammingLanguage(fileName)` which returns the name of the programming language associated with the filename you provided. This is done by extracting the file extension.

## Time complexity
The time complexity for calling `getProgrammingLanguage(fileName)` is <b>constant</b>, that means:
<b>Best case:</b> O(1)
<b>Worst case:</b> O(1)

## Installation
`npm install detect-programming-language`

## Usage
<pre>
	<code>
		import getProgrammingLanguage from "detect-programming-language";

	    getProgrammingLanguage(".rs"); // Returns 'Rust'.
	</code>
</pre>

## Notes
* This package has native TypeScript support, no need to install anything else.
* The file extensions and their corresponding language names are pulled from a local copy of: https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml
* Only <b>programming</b> languages are considered, markup, data interchange formats and others are not.
* If the function is unable to match a filename to a programming language it returns undefined.