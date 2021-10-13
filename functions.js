console.log("first code: even");
function isEven(n)
{
	if(n%2===0)
		return true;

	else
		return false;
}

//or
// function isEven(n)
// {
// 	return num%2 === 0;
// }

console.log("second code: factorial");
function factorial(n)
{
    var result=1;
    for (var i = 2; i <= n; i++) 
    {
    	result *= i;
    }
    return result;
}

//or
// function factorial(n)
// {
//     var result=n;
//     for (var i = n-1; i >= 1; i--) 
//     {
//     	result *= i;
//     }
//     return result;
// }

console.log("third code: kebabtosnake")
function kebabToSnake(str)
{
	var newStr = str.replace(/-/g , "_");
	return newStr;
}

