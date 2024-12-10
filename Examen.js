// ALGORITMO 1: Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el
// programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
// importante es realizar el desarrollo en el menor tiempo posible.
function algoritmo1(array, requiredSum) {
    let index = 0;

    for (index; index < array.length - 1; index++) {
        if ((array[index] + array[index + 1]) == requiredSum) {
            return true;
        }
    }
    return false;
}

function ordenamientoBubblesort(array) {
    let index = 0;
    let temporary = 0;
    let limit = array.length - 1

    while (limit > 0) {
        if ((index + 1) != limit) {
            if (array[index] > array[index + 1]) {
                temporary = array[index + 1];
				array[index + 1] = array[index];
				array[index] = temporary;
            }
        }

        index++;

        if (index == limit) {
            index = 0;
            limit--;
        }
    }
}

// ALGORITMO 2: Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
// que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.
function algoritmo2(array, requiredSum) {
    let suma = 0;
    let left = 0;
    let rigth = array.length - 1;

    // Este ordenamiento me permite simplificar la busqueda ya que en caso que el array
    // tenga demasiados numeros entonces tendra menos ejecuciones que el algorimto1, ya que
    // dependiendo si el numero de la suma es mayor al numero requerido, decrementare el puntero rigth
    // y en caso que sea menor incremento el puntero left hasta que los dos se acerquen bien y en caso
    // que el valor de los punteros sean iguales, quiere decir que el numero requerido no se encuentra y devuelvo el valor false
    ordenamientoBubblesort(array);

    while (left < rigth) {
        suma = array[left] + array[rigth];

        if (suma === requiredSum) {
            return true;
        }

        if (suma < requiredSum) {
            left++;
        } else {
            rigth--;
        }
    }
    return false;
}

let array1 = [1, 4, 3, 9];
let array2 = [1, 2, 4, 4];
let requiredSum = 8;

console.log("Algoritmo 1: array1: [1, 4, 3, 9], RESULT: ", algoritmo1(array1, requiredSum));
console.log("Algoritmo 1: array2: [1, 2, 4, 4], RESULT: ", algoritmo1(array2, requiredSum));

console.log("Algoritmo 2: array1: [1, 4, 3, 9], RESULT: ", algoritmo2(array1, requiredSum));
console.log("Algoritmo 2: array2: [1, 2, 4, 4], RESULT: ", algoritmo2(array2, requiredSum));