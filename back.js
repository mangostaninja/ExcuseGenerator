function genExcusas() {
	
	var quien = ['hermanita pequeña', 'gato', 'primo', 'perro'];
	var accion = ['se comio', 'tiro a la basura', 'se limpio el culo con', 'quemo'];
	var objeto = ['tarea', 'proyecto', 'reporte', 'casa'];
	
	var sujeto = quien[Math.round(Math.random()*(quien.length-1))];
	var hizo = accion[Math.round(Math.random()*(accion.length-1))];
	var que = objeto[Math.round(Math.random()*(objeto.length-1))];
	
	document.getElementById('excusas').innerHTML = '<div>Mi ' + sujeto + ' ' + hizo + '<br> Mi ' + que + '.</div>'
	
}