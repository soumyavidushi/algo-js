const chunk = (arr, chunkSize) => {
    const chunked = [];
    /*
    for(let element of arr) {
        const last = chunked[chunked.length-1];
        if(!last || last.length === chunkSize) {
            chunked.push([element]);
        } else {
            last.push(element)
        }
    }
    */
   let index = 0;
   while(index<arr.length) {
       chunked.push(arr.slice(index, index + chunkSize));
       index = index + chunkSize;
   }
   return chunked;
}
module.exports = chunk;


// Approach 1
/*
1. Create empty array to hold chunks called chunked
2. For each element in the unchunked array
3. Retrieve the last element in the 'chunked'
4. If last element does not exist or its length is equal to chunk size
5. push a new chunk into chunked with current element
6. Else add the current element into the chunk
*/

// Approach 2
/*
1. Create empty 'chunked array
2. create index start at 0
3. while index is less than array.length
4. push a slice of lengthy size from array into chunked
5. add size to index
*/

