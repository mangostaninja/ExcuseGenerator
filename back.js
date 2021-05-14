function genExcuses() {
	
	var who = ['little sister', 'cat', 'cousin', 'dog'];
	var action = ['eat', 'trow to the trash', 'clean his ass', 'burn'];
	var object = ['homework', 'proyect', 'report', 'house'];
	
	var subject = who[Math.round(Math.random()*(who.length-1))];
	var made = action[Math.round(Math.random()*(action.length-1))];
	var what = object[Math.round(Math.random()*(object.length-1))];
	
 
    document.getElementById('excuses').innerHTML = '<div>My ' + subject + ' ' + made + '<br> my ' + what + '.</div>'
	
}