class Animal {
    speak() {}
}

class Dog extends Animal {
    speak() {}
}



// Method overloading

class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;

    add(a: number | string, b: number | string) {
        return (a as any) + (b as any);
    }
}

const calculator = new Calculator();

calculator.add(10, 20);       // number
calculator.add("Hello", "!"); // string




// Overloading

// Parameters/signature

// add(number, number) vs add(string, string)

// Overriding

// Implementation in child

// Dog.speak() replaces Animal.speak()