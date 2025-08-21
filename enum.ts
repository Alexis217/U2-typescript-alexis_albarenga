enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function describeColor(color: Color): string {
    return "El color es: " + color;
}

console.log(describeColor(Color.Red));
console.log(describeColor(Color.Green));
console.log(describeColor(Color.Blue));
