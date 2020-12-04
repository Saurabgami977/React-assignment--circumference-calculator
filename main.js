const calcCircumference = (radius) => {
    if(typeof radius == 'number'){
        let circumference = 2 * 3.14 * radius;
        console.log(`The circumference is ${circumference}`);
    }else{
        console.log("Please enter number only")
    }
}

calcCircumference(8) 
// output : The circumference is 50.24

calcCircumference("abc");
//output : Please enter number only