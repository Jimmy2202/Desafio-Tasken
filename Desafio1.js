let number = Number(prompt("Digite o número: "));

if (number <= 0) {
    console.log("Abortado");
} else {
    const array = Array.from({ length: number }, (_, i) => (number - i) ** 2);
    
    for (let i = 0; i < number; i++) {
        console.log(array.slice(i).join(" "));
    }
}
