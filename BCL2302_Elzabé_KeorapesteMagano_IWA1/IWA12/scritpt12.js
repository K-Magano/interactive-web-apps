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

/**
 * Used a CSS attribute selector, where ^= means "starts with".
 * All elements on the current page whose id attribute starts with "book".
 */
const blackCheckIn = document.getElementsByClassName('checkin')
blackCheckIn[0].style.color = 'black'
blackCheckIn[1].style.color = 'gray'
blackCheckIn[2].style.color = 'gray' // Gray to show disabled

const books = document.querySelectorAll('[id^="book"]')

books.forEach(book => {
  const status = book.querySelector('.status');
  const reserve = book.querySelector('.reserve');
  const checkout = book.querySelector('.checkout');
  const checkin = book.querySelector('.checkin');

  const statusValue = status.innerText;
  
  status.style.color = STATUS_MAP[statusValue].color;
  reserve.disabled = !STATUS_MAP[statusValue].canReserve;
  checkout.disabled = !STATUS_MAP[statusValue].canCheckout;
  checkin.disabled = !STATUS_MAP[statusValue].canCheckIn;
});




