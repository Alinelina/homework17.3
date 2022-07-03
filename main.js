// 3. Напишите функцию `formatDate(date)`, форматирующую `date` по следующему принципу: 
//     - Если спустя `date` прошло менее 1 секунды, вывести `"прямо сейчас"`.
//     - В противном случае, если с `date` прошло меньше 1 минуты, вывести `"n сек. назад"`.
//     - В противном случае, если меньше часа, вывести `"m мин. назад"`.
//     - В противном случае, полная дата в формате `"DD.MM.YY HH:mm"`. А именно: `"день.месяц.год часы:минуты"`, всё в виде двух цифр, т.е. `31.12.16 10:00`.

function formatDate(date) {
    const diff = new Date() - date;
    console.log(diff);

    if (diff < 1000) {
        return `Прямо сейчас`;
    } else if (diff < 60000) {
        return `${Math.round(diff / 1000)} cек. назад`;
    } else if (diff < 1000 * 60 * 60) {
        return `${Math.round(diff / (60 * 1000))} мин. назад`;
    } else {
        return `${new Intl.DateTimeFormat('ru-RU', {day:'2-digit', month:'2-digit', year:'2-digit'}).format(date)} ${new Intl.DateTimeFormat('ru-RU', {hour:'2-digit', minute:'2-digit'}).format(date)}`;
    }
}

alert( formatDate(new Date(new Date - 1)) ); 
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );
alert( formatDate(new Date(new Date - 30 * 1000)) );