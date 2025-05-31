
const addBtn = document.querySelector('#myBtn4');
const nameInput = document.querySelector("#name")
const priceInput = document.querySelector("#name2")
const categoryInput = document.querySelector("#name3")
const list = document.querySelector('#list');
const model = document.querySelector("#model");
const cenle = document.querySelector("#cenle");
const delButModel = document.querySelector("#del");
const total = document.querySelector('#total')
const total2 = document.querySelector('#total2')

let sum = 0;



addBtn.addEventListener('click', Task)


function Task() {
    if (nameInput.value !== "" && priceInput.value !== "" && categoryInput !== "") {

        const newItem = document.createElement("li");

        newItem.classList.add('item');

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'удалить'
        newItem.innerHTML = `
        <h1 class="expense expense-title">${nameInput.value}</h1>
        <p class="expense expense-category">${categoryInput.value}</p>
        <p class="expense expense-price">${priceInput.value}</p>
        `;

        sum = sum + +priceInput.value;
        console.log(sum);
        total.textContent = sum;

        newItem.appendChild(deleteButton)
        list.appendChild(newItem);

        nameInput.value = '';

        // total2.textContent = (priceInput.value - sum)

        deleteButton.addEventListener('click', () => {
            total2.textContent = +total2.textContent + +newItem.querySelector('.expense-price').textContent;

            // console.log(total2.textContent = (sum - priceInput.value))

            currentItem = newItem;

            if (currentItem) {
                list.removeChild(currentItem);
                model.style.display = 'none';
                currentItem = null;
            }
        })


    } else {
        alert('Заполните поле');
    }


}

// delButModel.addEventListener('click', () => {
//     if (currentItem) {
//         list.removeChild(currentItem);
//         model.style.display = 'none';
//         currentItem = null;
//     }
// });


// cenle.addEventListener('click', () => {
//     model.style.display = 'none';
//     currentItem = null;
// });


// let captionsList = document.querySelectorAll('.caption-item');
// let unitsList = document.querySelectorAll('.unit');

// captionsList.forEach(function (item, index) {
//     item.addEventListener('mouseover', function () {
//         unitsList[index].classList.add('hovered');
//     });

//     item.addEventListener('mouseout', function () {
//         unitsList[index].classList.remove('hovered');
//     });
// });

// addBtn.addEventListener('click', Task2)

// function Task2() {
//     if (priceInput.value !== "") {

//         const newItem = document.createElement("li");

//         newItem.classList.add('item');

//         const deleteButton = document.createElement('button')
//         deleteButton.textContent = 'удалить'
//         newItem.innerHTML = `<span>${priceInput.value}</span>`;
//         newItem.appendChild(deleteButton)
//         list.appendChild(newItem);

//         priceInput.value = '';





//         deleteButton.addEventListener('click', () => {
//             currentItem = newItem;

//             if (currentItem) {
//                 list.removeChild(currentItem);
//                 model.style.display = 'none';
//                 currentItem = null;
//             }
//         })


//     } else {
//         alert('Заполните поле');
//     }


// }








// addBtn.addEventListener('click', Task3)



// function Task3() {
//     if (categoryInput.value !== "") {

//         const newItem = document.createElement("li");

//         newItem.classList.add('item');

//         const deleteButton = document.createElement('button')
//         deleteButton.textContent = 'удалить'
//         newItem.innerHTML = `<span>${categoryInput.value}</span>`;
//         newItem.appendChild(deleteButton)
//         list.appendChild(newItem);

//         categoryInput.value = '';





//         deleteButton.addEventListener('click', () => {
//             currentItem = newItem;

//             if (currentItem) {
//                 list.removeChild(currentItem);
//                 model.style.display = 'none';
//                 currentItem = null;
//             }
//         })


//     } else {
//         alert('Заполните поле');
//     }


// }

