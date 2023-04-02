// Необходимо пользователя попросить ввести температуру в градусах Цельсия, 
// преобразовать введенное пользователем значение в соответствующую температуру 
// в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): 
// Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.


const celsius = prompt('Please enter temperature in Celsius:');

alert(`Celsius: ${celsius}, Fahrenheit: ${celsiusToFahrenheit(celsius)}`);




function celsiusToFahrenheit(number) {
    return Math.floor((9 / 5 * number + 32) * 100) / 100;
}