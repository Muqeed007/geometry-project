function parallelogramAreaCalculate(){
    // get parallelogram base input
    const parallelogramBase = document.getElementById('parallelogram-base');
    const paraBaseText = parallelogramBase.value;
    const paraBase = parseFloat(paraBaseText);
    console.log(paraBase);
    // get parallelogram height input
    const parallelogramHeight = document.getElementById('parallelogram-height');
    const paraHeightText = parallelogramHeight.value;
    const paraHeight = parseFloat(paraHeightText);
    console.log(paraHeight);
    // get parallelogram area
    const parallelogramArea = paraBase * paraHeight;
    console.log(parallelogramArea);
    // display parallelogram area
    const paraAreaString = document.getElementById('parallelogram-area');
    paraAreaString.innerText = parallelogramArea;
}