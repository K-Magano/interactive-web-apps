FREE_WARNING = '⚠️Free shipping only applies to single customer orders⚠️'
BANNED_WARNING = '⚠️Unfortunately we do not ship to your country of residence⚠️'
NONE_SELECTED = '0'


let location = 'RSA'
let currency = "R"
let customers = 1 
let shipping = (typeof Number)



if (location === 'RSA') {shipping === 400 && currency === 'R' }

if (location === 'NAM') {shipping === 600 && currency === '$' }
   
else {shipping === 800 && currency ==='$'}

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * 2 //NONE_SELECTED did the calculations to see how many shirts and pens needed to be in the cart to give the R1270
batteries = 35 * 2 
pens = 5 * 20 //NONE_SELECTED 
let totalCost = shoes + toys +shirts+batteries+ pens

shipping = 0


if (shoes + batteries + pens + shirts > 1000 === 'R' || 600 ==='$' ) 
     {if (location === NAM, customers < 2) 
	    if (location === RSA, customers < 2 ) {
		    shipping = 0 || calcShipping
		}
        {console.warn(FREE_WARNING ) } // because there is more than one customer 
     }

if (shipping === 0 && customers !== 1) 

if (location === 'NK') {console.warn(BANNED_WARNING)}//We don't ship to this region

console.log('price', currency,  totalCost + shipping)



//
