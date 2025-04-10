/**
 * Función que verifica si una cadena de paréntesis, corchetes y llaves es válida.
 * Una cadena es válida si:
 * - Los paréntesis abiertos deben cerrarse con el mismo tipo de paréntesis.
 * - Los paréntesis abiertos deben cerrarse en el orden correcto.
 * @param s Cadena a validar
 * @returns true si la cadena es válida, false en caso contrario
 */
function isValid(s: string): boolean {
    // Si la longitud de la cadena es impar, no puede ser válida
    if (s.length % 2 !== 0) return false;
    
    // Usamos una pila para almacenar los paréntesis de apertura
    const stack: string[] = [];
    
    // Mapa que relaciona cada paréntesis de cierre con su correspondiente de apertura
    const parenthesesMap: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    // Recorremos cada carácter de la cadena
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        // Si es un paréntesis de cierre
        if (char in parenthesesMap) {
            // Verificamos si el último elemento en la pila coincide con el paréntesis de apertura correspondiente
            // Si la pila está vacía o no coincide, la cadena no es válida
            if (stack.pop() !== parenthesesMap[char]) {
                return false;
            }
        } else {
            // Si es un paréntesis de apertura, lo añadimos a la pila
            stack.push(char);
        }
    }
    
    // La cadena es válida si la pila está vacía al final
    return stack.length === 0;
}

// Ejemplos de prueba
console.log(isValid('()[]()'));      // true
console.log(isValid('([])'));        // true
console.log(isValid('([)]'));        // false
console.log(isValid('{[]}'));        // true
console.log(isValid(''));            // true
console.log(isValid('{'));           // false