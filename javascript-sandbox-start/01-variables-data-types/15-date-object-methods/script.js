let x;
let d = new Date();

// Date methods

x = d.toString();
// console.log(x);

x = d.getTime();
// console.log(x);
x = d.valueOf();
// console.log(x);

x = d.getFullYear(); // 2023
// console.log(x);

x = d.getMonth(); // 6
// console.log(x);
x = d.getMonth() + 1;
// console.log(x); // 7

x = d.getDate(); // 24
// console.log(x);

x = d.getDay(); // 1
// console.log(x);

x = d.getHours(); // 8
// console.log(x); 

x = d.getMinutes(); // 50
// console.log(x);

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // 2023-7-24
// console.log(x);

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
});



console.log(x);