module.exports=((input1,input2)=>{
	var gcd = function(input1, input2) {
	    if ( ! input2) {
	        gcd=input1;
	    }
	    if(input1<0 || input2<0){
	    	gcd="please enter the positive value";
	    }
	    return gcd(input2, input1 % input2);
	};
	gcd=Math.round(gcd);	
	return gcd;
});
