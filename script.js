// Watch

var time = prompt ('Введите время в формате 24')

if(time >= 0 && time < 5) {
    console.log(time + " часов ночи")
} else if (time >= 5 && time <= 12 ){
    console.log(time + " часов утра")
} else if (time > 12 && time < 18 ){
    // console.log(time + " часов дня")
    if (time == 13) {
        console.log('час дня')
    } else if (time == 14) {
        console.log('2 часа дня')
    } else if (time == 15) {
        console.log('3 часа дня')
    } else if (time == 16) {
        console.log('4 часа дня')
    } else if (time == 17) {
        console.log('5 часов дня')
    }
} else if (time >= 18 && time <= 24 ){
    if (time == 18) {
        console.log('6 часов вечера')
    } else if (time == 19) {
        console.log('7 часов вечера')
    } else if (time == 20) {
        console.log('8 часов вечера')
    } else if (time == 21) {
        console.log('9 часов вечера')
    } else if (time == 22) {
        console.log('10 часов вечера')
    } else if (time == 23) {
        console.log('11 часов ночи')
    } else if (time == 24) {
        console.log('12 часов ночи')
    }
} else {
    alert('Пожалуйста введети цифру от 0 до 24')
}

