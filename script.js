function stringChop(str, size) {
  // your code here
	if (!str) return []; // Return an empty array if the input string is null or empty

    const chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size)); // Slice the string into chunks
    }
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
