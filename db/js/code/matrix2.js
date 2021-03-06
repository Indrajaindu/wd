var transpose = function(a){
	var r = [];
	for(var j = 0; j < a[0].length; j++){
		r[j] = [];
		for(var i = 0; i < a.length; i++){
			r[j][i] = a[i][j];
		}
	}

	return r;
}

var add = function(a,b){
	var r = [];
	for(var i = 0; i < a.length; i++){
		r[i] = [];
		for(var j = 0; j < a[i].length; j++){
			r[i][j] = a[i][j] + b[i][j];
		}
	}
	return r;
}

var times = function(a, b){
	var r = [];
	for(var i = 0; i < a.length; i++){
		r[i] = [];
		for(var j = 0; j < b[0].length; j++){
			r[i][j] = 0;
			for(var k = 0; k < a[i].length; k++){
				r[i][j] = r[i][j] + a[i][k] * b[k][j];
			}
		}
	}
	return r;
} 

var a = [[3,2,1],[1,2,3]];
var b = transpose(a);
var c = add(a,a);
var d = times(a,b);

console.log("a = %j", a);
console.log("b = %j", b);
console.log("c = %j", c);
console.log("d = %j", d);