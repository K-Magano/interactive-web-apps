
let location = ' '
let shipping = (typeof  Number)
let currency = 'R' || '$'


if (location === 'RSA') {
     shipping === 400 && currency === 'R' 
     console.log(new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'R' }).format(number));
// Expected output: "123.456,79 €"
    }

if (location === 'NAM') {
     shipping === 600 && currency === '$' 
     console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: '$' }).format(number));
     
     }
   
else {
    shipping === 800 && currency ==='$'
}

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * 2
batteries = 35 * 2
pens = 5 * 20

 const basket = [

    {item: 'shoes',     price: 300 * 1},
    {item: 'toys',      price: 100 * 5},
    {item: 'shirts',    price: 150 * 2},
    {item: 'batteries',  price: 35 * 2},
    {item: 'pens',      price: 5 * 20}

 ]

 const total = basket.reduce((currentTotal, basket) => {
    return basket.price + currentTotal
 }, 0)
 
console.log('Price:', currency, total)
shipping = null


if (shoes + batteries + pens + shirts > 1000 === 'R' || 600 ==='$' ) {
	if (locationN = NAM, customers < 2) 
			if (locationR = RSA, customers < 2 ) {
		    shipping = 0 || calcShipping
		}
        
	}


if (shipping = 0 && customers !== 1) { 
    
     console.warn(FREE_WARNING = '⚠️Free shipping only applies to single customer orders⚠️')
}


if (location === 'NK') {
    console.warn(BANNED_WARNING = '⚠️Unfortunately we do not ship to your country of residence⚠️')
    
    }

console.log('price', currency, shoes + batteries + pens + shirts + shipping)

//! incomplete, I am done if not, I need to calculate shipping.
//customers = '1' 
//const location = 'RSA'
//currency = null