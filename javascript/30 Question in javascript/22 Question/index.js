const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
// console.log(ages.sort());
// console.log(Math.max(...ages));
// console.log(Math.min(...ages));

// // Find the median age(one middle item or two middle items divided by two)

//     if (ages.length%2==0){
//         let y = (ages[(ages.length/2)-1] + ages[(ages.length/2)])/2;
//         console.log(y);
//     }else{
//         let s = ages[((ages.length+1)/2)-1];
//         console.log(s);
//     }

// Find the average age(all items divided by number of items)

    
    function hold(sd){
        let sum = 0;
        for(let i=0; i<sd.length; i++){
            sum = sum+sd[i];
        }
        return sum;
    }
  console.log(hold(ages));

  