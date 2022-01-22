const pyramid = (n) => {
    const midPoint = Math.floor((2*n-1)/2);
    for(let row=0; row<n; row++) {
        let level = '';
        for(let col=0;col<2*n-1;col++) {
            if(midPoint-row<=col && midPoint+row>=col) {
                level = level + '#';
            }
            else {
                level = level + ' '
            }
        }
        console.log(level);
    }
}

module.exports = pyramid;