/*module.exports=*/((input1)=>{
	var result;
	input1.reverse();
	if(input1>17732)
	{
		result="NUMBER EXCEEDED";
	}
	else if(isNaN(input1))
	{
		result=NaN;
	}
	else
	{
		var arr=input1.split();
		
		for(var i=0;i<input1.length();i++){
			if(input1.charAt(i)=='-')
				result+result+"MINUS ";
			if(input1.charAt(i)=='1')
				result+result+"ONE ";
			if(input1.charAt(i)=='2')
				result+result+"TWO ";
			if(input1.charAt(i)=='3')
				result+result+"THREE ";
			if(input1.charAt(i)=='4')
				result+result+"FOUR ";
			if(input1.charAt(i)=='5')
				result+result+"FIVE ";
			if(input1.charAt(i)=='6')
				result+result+"SIX ";
			if(input1.charAt(i)=='7')
				result+result+"SEVEN ";
			if(input1.charAt(i)=='8')
				result+result+"EIGHT ";
			if(input1.charAt(i)=='9')
				result+result+"NINE ";
			if(input1.charAt(i)=='0')
				result+result+"ZERO ";
		}	
	}
	
	return result;
});
console.log((456));