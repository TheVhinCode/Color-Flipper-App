const colorBtn = document.getElementById("color-btn");
let hexColor = document.getElementById("hex-color");

hexColor.value = "#FFFFFF";

colorBtn.addEventListener("click", ()=>{
    let char = Math.floor(Math.random() * 16);
    let char2 = Math.floor(Math.random() * 16);
    let char3 = Math.floor(Math.random() * 16);
    let char4 = Math.floor(Math.random() * 16);
    let char5 = Math.floor(Math.random() * 16);
    let char6 = Math.floor(Math.random() * 16);

    function toHex(num){
        if (num < 10) return num.toString();
        if (num === 10) return "A";
        if (num === 11) return "B";
        if (num === 12) return "C";
        if (num === 13) return "D";
        if (num === 14) return "E";
        if (num === 15) return "F";
    }

    char = toHex(char);
    char2 = toHex(char2);
    char3 = toHex(char3);
    char4 = toHex(char4);
    char5 = toHex(char5);
    char6 = toHex(char6);
    

    document.body.style.backgroundColor = `#${char}${char2}${char3}${char4}${char5}${char6}`;
    hexColor.value = `#${char}${char2}${char3}${char4}${char5}${char6}`;
});

let resetColor = document.getElementById("reset-btn");
resetColor.addEventListener("click", ()=>{
    hexColor.value = "#FFFFFF";
    document.body.style.backgroundColor = "#FFFFFF";
})