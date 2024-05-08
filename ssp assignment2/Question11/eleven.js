function isNumber(value) { 
    return typeof value === 'number' && !isNaN(value); 
    } 
    // Example usage: 
    console.log(isNumber(5));          
    console.log(isNumber("Hello"));    
    console.log(isNumber(null));       
    // Output: true 
    // Output: false 
    // Output: false 
    console.log(isNumber(undefined));  // Output: false 
    console.log(isNumber(NaN));        
    // Output: false 
    console.log(isNumber(10 / 0));