module.exports=((input1)=>{
	var result;
	if (input1===1 || input1%1!==0)  
	{  
		result = false;  
	}  
	else if(input1 === 2)  
	{  
		result = true;  
	}
	else  
	{  
		for(var x = 2; x < input1; x++)  
		{  
			if(input1 % x === 0)  
			{  
				result = false;  
			}  
		}  
		result = true;    
	}  
	return result;
});