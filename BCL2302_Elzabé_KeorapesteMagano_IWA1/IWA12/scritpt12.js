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
}

// Edit below line 
/!querySelector vs document.querySelector
   nth-of-typeoF

   const book2 = document.querySelector('#book1')
   const book2Status = book2.querySelector('.status').textContent

const book1Buttons = {
    reserve: document.querySelector('.reserve'), //grey button:nth-of-type
    checkout: document.querySelector(".checkout"), //grey
    checkin: document.querySelector(".checkin") //red
}
const  book2Buttons = {
     reserve: book2.querySelector('button:nth-of-type(1)'),
    checkout: book2.querySelector('button:nth-of-type(2)'),
    checkin: book2.querySelector('button:nth-of-type(3)')
    }

const book3Button = {
    reserve: book3.querySelector(".reserve"), //green
    checkout: book3.querySelector(".checkout"),//green
    checkin: book3.querySelector(".checkin") //grey
        }
            
        if (STATUS_MAP.reserved === reserved){
            book1buttons.checkout.style.text = 'blue'
           }else{
                book1buttons.disabled = true;}


        if (book2Status === 'overdue'){
              book2buttons.checkin.style.text  = 'orange'
              book2buttons.reserve.disabled = true
            book2buttons.checkout.disabled = true 
        } else{book2Buttons.checkin.disabled = true;
                      
            }

    if (STATUS_MAP .shelf === shelf){ 
        book3buttons.reserved.style.text = 'green',
        book3buttons.checkout.style.text =  'green'}else{
        book3buttons.checkin.style.text.disabled = true }



































































































 


checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve[1]=   (STATUS_MAP.status.canReserver === true)? 'enabled' : 'disabled'
checkout[1] = (STATUS_MAP.status.canCheckout === true)? 'enabled' : 'disabled'
checkin[1 ]=  (STATUS_MAP.status.canCheckIn  === true)? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve[2]= (STATUS_MAP.status.canReserver  === true)? 'enabled' : 'disabled'
checkout[2] =( STATUS_MAP.status.canCheckout=== true) ? 'enabled' : 'disabled'
checkin[2]= (STATUS_MAP.status.canCheckIn   === true)?  'enabled' : 'disabled'



Please ensure that the following works correctly:

Enable/disable buttons based on the status/properties in the STATUS_MAP object.
Buttons are only allowed to be black and grayscale (no colour is allowed).
The colour of the status indicator text should correspond to the values in STATUS_MAP.