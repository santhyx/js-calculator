let solution = 0;
let maths;

GetNumericValue();

Add = () => {
    solution += GetNumericValue();
}

Minus = () => {
    solution -= solution += GetNumericValue();
}

Multiply = () => {
    solution *= GetNumericValue();
}

Divide = () => {
    if (GetNumericValue === 0) {
        throw {
            message: "dont divide by 0"
        };
    }
    solution /= GetNumericValue();
}