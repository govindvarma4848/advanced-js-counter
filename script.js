let countelement = document.getElementsByClassName('countelement')[0];
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let count = 0;

btn1.addEventListener('click', function() {
    increment();
});

btn2.addEventListener('click', function() {
    decrement();
});

function increment() {
    count += 1;
    updateCount();
}

function decrement() {
    count -= 1;
    updateCount();
}

function updateCount() {
    if (count < 0) {
        countelement.innerText = 'Error';
    } else {
        countelement.innerText = count;
    }
}
