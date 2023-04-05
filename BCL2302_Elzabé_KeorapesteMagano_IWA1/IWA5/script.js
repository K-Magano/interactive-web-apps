FREE_WARNING = '⚠️Free shipping only applies to single customer orders⚠️'
BANNED_WARNING = '⚠️Unfortunately we do not ship to your country of residence⚠️'
NONE_SELECTED = '0'


const location = 'RSA'
let currency = "R"
let customers = 1 
let shipping = (typeof Number)



if (location === 'RSA') {shipping === 400 && currency === 'R' }

if (location === 'NAM') {shipping === 600 && currency === '$' }
   
else {shipping === 800 && currency ==='$'}

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * 2
batteries = 35 * 2
pens = 5 * 20
let totalCost = shoes + toys +shirts+batteries+ pens

shipping = 0


if (shoes + batteries + pens + shirts > 1000 === 'R' || 600 ==='$' ) 
     {if (location === NAM, customers < 2) 
	    if (location === RSA, customers < 2 ) {
		    shipping = 0 || calcShipping
		}
        {console.warn(FREE_WARNING ) }
     }

if (shipping === 0 && customers !== 1) 

if (location === 'NK') {console.warn(BANNED_WARNING)}

console.log('price', currency,  totalCost + shipping)



//! incomplete, I am done if not, I need to calculate shipping.
