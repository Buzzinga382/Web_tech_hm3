// Cоздать функцию greeting, которая принимает имя и выводит приветствие, 
// используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, 
// передав туда данное значение.


const username = prompt('Please enter your name:');

greeting(username);



function greeting(name){
    console.log(`Wazzup, ${name[0].toUpperCase() + name.slice(1)}`);
}