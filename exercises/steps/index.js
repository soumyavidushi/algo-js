const steps =(n, row=0, stair='') => {
    // Without Recursion

    for(let row=0;row<n;row++) {
        let str = '';
        for(let col=0;col<n;col++) {
           if(col<=row) {
               str+='#';
           } else {
               str+=' ';
           }  
        }
        console.log(str);
    }

    /*
    // With recursion
    
   if(n===row) {
       return;
   }

   if(n===stair.length) {
      console.log(stair);
      return steps(n, row+1);
   }

   if(stair.length<=row) {
       stair+='#';
   } else {
       stair+=' ';
   }

   steps(n, row, stair);

   */
}

module.exports = steps;