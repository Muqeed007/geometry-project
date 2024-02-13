function triangleAreaCalculate(){
    // get base value
    const triangleBase = document.getElementById('triangle-base');
    const baseString = triangleBase.value;
    const base = parseFloat(baseString);
    console.log(base);
    // get height value
    const triangleHeight = document.getElementById('triangle-height');
    const heightString = triangleHeight.value;
    const height = parseFloat(heightString);
    console.log(height);
    // get area 
    const triangleArea = 0.5 * base * height;
    console.log(triangleArea);
    // display area
    const triangleAreaString = document.getElementById('triangle-area');
    triangleAreaString.innerText = triangleArea;

}