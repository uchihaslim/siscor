LoadReferencia('jerarquia');
LoadReferencia('tipo_de_solicitud');
LoadReferencia('tipo_de_requerimiento');
LoadReferencia('status');
LoadReferencia('cod_area');
LoadReferencia('rayado');
LoadReferencia('tipo_equipo');
LoadReferencia('pieza_danada');
LoadReferencia('pieza_suelta');
LoadReferencia('marca_procesador');
LoadReferencia('tipo_de_ram');
LoadReferencia('capacidad_ram');
LoadReferencia('tipo_disco_duro');
LoadReferencia('capacidad_disco_duro');
LoadReferencia('tipo_de_rt');
LoadReferencia('status_equipo');
LoadReferencia('status_del_caso');

Loadasig('resultado');

user('cedula','persona');
user('credencial','persona');


LoadDespacho('areaa','false');
$('#areaa').change(function(event) {	
	LoadDespacho('areab',$('#areaa').val());
});
$('#areab').change(function(event) {	
	LoadDespacho('areac',$('#areab').val());
});

loadSystem('Sistema','false');
$('#Sistema').change(function(event) {	
	loadSystem('Modulo',$('#Sistema').val());
});
