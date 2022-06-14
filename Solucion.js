var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


const letterSearch = 'j';

names.forEach( name =>
   {
	const nameLower = name.toLowerCase();
    
	if(nameLower.charAt(0)===letterSearch) 
    {
		console.log(`Good Bye ${name}`);
	}else{
		console.log(`Hello ${name}`)
	}

})
