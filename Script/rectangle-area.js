function rectangleAreaCalculator(){
    // get rectangle width;
    const rectangleWidth = document.getElementById('rectangle-width');
    const widthText = rectangleWidth.value;
    const width = parseFloat(widthText);
    console.log(width);
    // get rectangle height;
    const rectangleLength = document.getElementById('rectangle-length');
    const lengthText = rectangleLength.value;
    const length = parseFloat(lengthText);
    console.log(length);
    // get rectangle area;
    const rectangleArea = width * length;
    console.log(rectangleArea);
    // display value
    const rectangleAreaString = document.getElementById('rectangle-area');
    rectangleAreaString.innerText = rectangleArea;
}