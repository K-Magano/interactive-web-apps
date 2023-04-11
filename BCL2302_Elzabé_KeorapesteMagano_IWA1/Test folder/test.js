// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};

const book1 = document.querySelector('#book1');
const book2 = document.querySelector('#book2');
const book3 = document.querySelector('#book3');

const book1Status = book1.querySelector('.status').textContent;
const book2Status = book2.querySelector('.status').textContent;
const book3Status = book3.querySelector('.status').textContent;

const book1Buttons = {
    reserve: book1.querySelector('button:nth-of-type(1)'),
    checkout: book1.querySelector('button:nth-of-type(2)'),
    checkin: book1.querySelector('button:nth-of-type(3)')
};

const book2Buttons = {
    reserve: book2.querySelector('button:nth-of-type(1)'),
    checkout: book2.querySelector('button:nth-of-type(2)'),
    checkin: book2.querySelector('button:nth-of-type(3)')
};

const book3Buttons = {
    reserve: book3.querySelector('button:nth-of-type(1)'),
    checkout: book3.querySelector('button:nth-of-type(2)'),
    checkin: book3.querySelector('button:nth-of-type(3)')
};

if (book1Status === 'reserved') {
    book1Buttons.checkout.style.backgroundColor = 'blue';
} else {
    book1Buttons.checkout.disabled = true;
}

if (book2Status === 'overdue') {
    book2Buttons.checkin.style.color = 'orange';
    book2Buttons.reserve.disabled = true;
    book2Buttons.checkout.disabled = true;
} else {
    book2Buttons.checkin.disabled = true;
}

if (book3Status === 'shelf') {
    book3Buttons.reserve.style.backgroundColor = 'green';
    book3Buttons.checkout.style.backgroundColor = 'green';
} else {
    book3Buttons.checkin.disabled = true;
}
