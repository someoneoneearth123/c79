const s1 = document.getElementById('student1');
const s2 = document.getElementById('student2');
const s3 = document.getElementById('student3');
const s4 = document.getElementById('student4');
const span = document.getElementById('array');


const submitBtn = document.getElementById('submit');
const sortBtn = document.getElementById('sort');
const clearBtn = document.getElementById('clear');

submitBtn.addEventListener('click', function () {
    const array = [s1.value, s2.value, s3.value, s4.value];
    span.innerHTML = array;
});

sortBtn.addEventListener('click', function () {
    var array = document.getElementById('array').innerHTML.split(',');
    var realArray = [array[0], array[1], array[2], array[3]];
    span.innerHTML = realArray.sort();
});

clearBtn.addEventListener('click', function () {
    s1.value = "";
    s2.value = "";
    s3.value = "";
    s4.value = "";
    span.innerHTML = "";
});