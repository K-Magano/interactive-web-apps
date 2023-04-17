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


//!Buttons are only allowed to be black and grayscale (no colour is allowed).
/*changing the text color of (check-in) */
const blackCheckIn = document.getElementsByClassName('checkin')
blackCheckIn[0].style.color = 'black'
blackCheckIn[1].style.color = 'gray'
blackCheckIn[2].style.color = 'gray' // Gray to show disabled


/**
 * Used a CSS attribute selector, where ^= means "starts with" for all  elements with "book".
 */
const books = document.querySelectorAll('[id^="book"]')
/*Used a forEach loop  to look through arrays and find "books". */
books.forEach(book => {
/* querySelector method to find specific HTML elements by class names  
within the book element. */
  const status = book.querySelector('.status');
  const reserve = book.querySelector('.reserve');
  const checkout = book.querySelector('.checkout');
  const checkin = book.querySelector('.checkin');
  /* variable statusValue to get the text content of the status */
  const statusValue = status.innerText;

/**
 * Changing the color of the statues text and disabling the buttons,
 * fetches the color style  of the corresponding object in the STATUS_MAP.


enabling and disabling the buttons by  corresponding to the  object in the STATUS_MAP.
 If canReserve is true, then the reserve button is enabled. 
 If canReserve is false, then the reserve button is disabled.
*/

  status.style.color = STATUS_MAP[statusValue].color;
  reserve.disabled = !STATUS_MAP[statusValue].canReserve;
  checkout.disabled = !STATUS_MAP[statusValue].canCheckout;
  checkin.disabled = !STATUS_MAP[statusValue].canCheckIn;
});




