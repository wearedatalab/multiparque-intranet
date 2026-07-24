/* ============================================================
   Multiparque Intranet — Datos demo
   Demo navegable solo-front · DataLab · wearedatalab.co
   ============================================================ */
window.MP = window.MP || {};

/* ---------- Áreas y colores ---------- */
MP.AREAS = {
  'Dirección':                { color: '#262161', txt: '#fff' },
  'Talento Humano':           { color: '#AB214F', txt: '#fff' },
  'Comunicaciones':           { color: '#740F75', txt: '#fff' },
  'Operaciones':              { color: '#00AEEF', txt: '#fff' },
  'Mantenimiento':            { color: '#F46200', txt: '#fff' },
  'Alimentos y Bebidas':      { color: '#1D8795', txt: '#fff' },
  'Comercial y Eventos':      { color: '#9DBC1E', txt: '#1a1547' },
  'Seguridad y Salud':        { color: '#E5C700', txt: '#1a1547' },
  'Administración y Finanzas':{ color: '#54595F', txt: '#fff' },
  'Tecnología':               { color: '#1B8DFE', txt: '#fff' }
};

MP.ZONAS = ['Administración','Zona de Atracciones','Zona Infantil','Pista de Karts','Lago y Botes','Alimentos y Bebidas','Enfermería','Portería y Seguridad','Zonas Verdes'];

/* ---------- Usuarios ---------- */
MP.USERS = [
  { id:'camila', nombre:'Camila Rodríguez', cargo:'Gerente General', area:'Dirección', zona:'Administración',
    correo:'camila.rodriguez@multiparque.co', ext:'101', cel:'310 555 0101',
    habilidades:['Liderazgo de equipos','Planeación estratégica','Finanzas','Inglés C1'],
    foto:'assets/img/av-camila.jpg', rol:'direccion', cumple:'03-14', ingreso:'2015-02-09' },

  { id:'andres', nombre:'Andrés Peñaloza', cargo:'Director de Operaciones', area:'Operaciones', zona:'Zona de Atracciones',
    correo:'andres.penaloza@multiparque.co', ext:'120', cel:'311 555 0120',
    habilidades:['Operación de atracciones','Gestión de riesgos','Logística','Liderazgo de equipos'],
    foto:'assets/img/av-andres.jpg', rol:'jefe', cumple:'07-08', ingreso:'2016-08-16' },

  { id:'luisa', nombre:'Luisa Fernanda Ortiz', cargo:'Jefe de Talento Humano', area:'Talento Humano', zona:'Administración',
    correo:'luisa.ortiz@multiparque.co', ext:'115', cel:'312 555 0115',
    habilidades:['Selección de personal','SG-SST','Bienestar laboral','Nómina'],
    foto:'assets/img/av-luisa.jpg', rol:'talento', cumple:'11-02', ingreso:'2018-01-15' },

  { id:'jorge', nombre:'Jorge Iván Castro', cargo:'Coordinador de Comunicaciones', area:'Comunicaciones', zona:'Administración',
    correo:'jorge.castro@multiparque.co', ext:'130', cel:'313 555 0130',
    habilidades:['Redacción','Fotografía','Redes sociales','Producción de video'],
    foto:'assets/img/av-jorge.jpg', rol:'comunicaciones', cumple:'07-26', ingreso:'2019-05-06' },

  { id:'paola', nombre:'Paola Martínez', cargo:'Coordinadora de Eventos', area:'Comercial y Eventos', zona:'Administración',
    correo:'paola.martinez@multiparque.co', ext:'140', cel:'314 555 0140',
    habilidades:['Eventos corporativos','Ventas','Atención al cliente','Protocolo'],
    foto:'assets/img/av-paola.jpg', rol:'jefe', cumple:'05-19', ingreso:'2020-02-03' },

  { id:'ricardo', nombre:'Ricardo Gómez', cargo:'Jefe de Mantenimiento', area:'Mantenimiento', zona:'Pista de Karts',
    correo:'ricardo.gomez@multiparque.co', ext:'150', cel:'315 555 0150',
    habilidades:['Mecánica de karts','Electricidad','Soldadura','Trabajo en alturas'],
    foto:'assets/img/av-ricardo.jpg', rol:'jefe', cumple:'01-30', ingreso:'2012-04-10' },

  { id:'sandra', nombre:'Sandra Milena Vargas', cargo:'Enfermera Jefe', area:'Seguridad y Salud', zona:'Enfermería',
    correo:'sandra.vargas@multiparque.co', ext:'160', cel:'316 555 0160',
    habilidades:['Primeros auxilios','Urgencias','Brigadas de emergencia','SG-SST'],
    foto:'assets/img/av-sandra.jpg', rol:'jefe', cumple:'07-11', ingreso:'2017-09-25' },

  { id:'felipe', nombre:'Felipe Torres', cargo:'Operador de Atracciones', area:'Operaciones', zona:'Pista de Karts',
    correo:'felipe.torres@multiparque.co', ext:'—', cel:'317 555 0170',
    habilidades:['Manejo de karts','Atención al cliente','Primeros auxilios'],
    foto:'assets/img/av-felipe.jpg', rol:'colaborador', cumple:'09-04', ingreso:'2023-11-14' },

  { id:'daniela', nombre:'Daniela Rincón', cargo:'Auxiliar de Taquilla', area:'Operaciones', zona:'Portería y Seguridad',
    correo:'daniela.rincon@multiparque.co', ext:'105', cel:'318 555 0105',
    habilidades:['Caja y facturación','Atención al cliente','Excel intermedio'],
    foto:'assets/img/av-daniela.jpg', rol:'colaborador', cumple:'12-17', ingreso:'2024-06-01' },

  { id:'oscar', nombre:'Óscar Ramírez', cargo:'Supervisor de Seguridad', area:'Seguridad y Salud', zona:'Portería y Seguridad',
    correo:'oscar.ramirez@multiparque.co', ext:'161', cel:'319 555 0161',
    habilidades:['Seguridad física','Manejo de emergencias','Brigadas de emergencia'],
    foto:'assets/img/av-oscar.jpg', rol:'colaborador', cumple:'02-23', ingreso:'2019-10-07' },

  { id:'mariajose', nombre:'María José Pardo', cargo:'Chef · Alimentos y Bebidas', area:'Alimentos y Bebidas', zona:'Alimentos y Bebidas',
    correo:'maria.pardo@multiparque.co', ext:'170', cel:'320 555 0170',
    habilidades:['Cocina colombiana','Manipulación de alimentos','Manejo de inventarios'],
    foto:'assets/img/av-mariajose.jpg', rol:'jefe', cumple:'07-19', ingreso:'2021-03-08' },

  { id:'julian', nombre:'Julián Herrera', cargo:'Analista de Tecnología', area:'Tecnología', zona:'Administración',
    correo:'julian.herrera@multiparque.co', ext:'180', cel:'321 555 0180',
    habilidades:['Soporte técnico','Redes','Administración de plataformas','SQL'],
    foto:'assets/img/av-julian.jpg', rol:'admin', cumple:'04-27', ingreso:'2022-07-18' },

  { id:'adriana', nombre:'Adriana Salcedo', cargo:'Contadora', area:'Administración y Finanzas', zona:'Administración',
    correo:'adriana.salcedo@multiparque.co', ext:'190', cel:'322 555 0190',
    habilidades:['Contabilidad NIIF','Excel avanzado','Presupuestos','Facturación electrónica'],
    foto:'assets/img/av-adriana.jpg', rol:'colaborador', cumple:'08-21', ingreso:'2014-01-20' },

  { id:'kevin', nombre:'Kevin Muñoz', cargo:'Recreacionista', area:'Operaciones', zona:'Zona Infantil',
    correo:'kevin.munoz@multiparque.co', ext:'—', cel:'323 555 0123',
    habilidades:['Recreación infantil','Animación','Teatro','Primeros auxilios'],
    foto:'assets/img/av-kevin.jpg', rol:'colaborador', cumple:'07-30', ingreso:'2024-12-02' },

  { id:'natalia', nombre:'Natalia Cifuentes', cargo:'Diseñadora Gráfica', area:'Comunicaciones', zona:'Administración',
    correo:'natalia.cifuentes@multiparque.co', ext:'131', cel:'324 555 0131',
    habilidades:['Diseño gráfico','Ilustración','Motion graphics','Fotografía'],
    foto:'assets/img/av-natalia.jpg', rol:'comunicaciones', cumple:'06-09', ingreso:'2023-02-13' },

  { id:'hernan', nombre:'Hernán Quintero', cargo:'Jardinero Jefe', area:'Mantenimiento', zona:'Zonas Verdes',
    correo:'hernan.quintero@multiparque.co', ext:'—', cel:'325 555 0152',
    habilidades:['Jardinería','Paisajismo','Riego tecnificado','Compostaje'],
    foto:'assets/img/av-hernan.jpg', rol:'colaborador', cumple:'10-12', ingreso:'2010-06-01' }
];

/* Perfiles de acceso para la demo del login */
MP.DEMO_PROFILES = [
  { id:'camila',  etiqueta:'Dirección' },
  { id:'luisa',   etiqueta:'Talento Humano' },
  { id:'jorge',   etiqueta:'Comunicaciones' },
  { id:'felipe',  etiqueta:'Colaborador · Karts' },
  { id:'julian',  etiqueta:'Administrador' }
];

MP.ROL_NOMBRE = {
  direccion:'Dirección', talento:'Talento Humano', comunicaciones:'Comunicaciones',
  jefe:'Jefe de área', colaborador:'Colaborador', admin:'Administrador'
};

/* ---------- Gestor documental ---------- */
MP.CARPETAS = [
  { id:'politicas',  nombre:'Políticas',               icono:'shield' },
  { id:'manuales',   nombre:'Manuales de Operación',   icono:'book' },
  { id:'seguridad',  nombre:'Seguridad y Protocolos',  icono:'alert' },
  { id:'talento',    nombre:'Talento Humano',          icono:'heart' },
  { id:'marca',      nombre:'Marca y Comunicaciones',  icono:'palette' }
];

MP.DOCS = [
  { id:'d01', carpeta:'politicas', titulo:'Política de Tratamiento de Datos Personales', tipo:'pdf',
    version:'v3', visibilidad:'Todo el parque', tamano:'840 KB', fecha:'2026-05-12', autor:'Adriana Salcedo', descargas:212, frecuente:true,
    contenido:'Ley 1581 de 2012 habeas data autorización de datos personales colaboradores visitantes tratamiento finalidad derechos del titular',
    historial:[{v:'v2', fecha:'2024-08-01', autor:'Adriana Salcedo'},{v:'v1', fecha:'2022-03-15', autor:'Camila Rodríguez'}] },

  { id:'d02', carpeta:'politicas', titulo:'Reglamento Interno de Trabajo', tipo:'pdf',
    version:'v5', visibilidad:'Todo el parque', tamano:'1.6 MB', fecha:'2026-02-20', autor:'Luisa Fernanda Ortiz', descargas:340, frecuente:true,
    contenido:'jornada laboral horarios permisos sanciones deberes derechos de los trabajadores comité de convivencia',
    historial:[{v:'v4', fecha:'2024-02-11', autor:'Luisa Fernanda Ortiz'},{v:'v3', fecha:'2022-01-19', autor:'Luisa Fernanda Ortiz'}] },

  { id:'d03', carpeta:'politicas', titulo:'Política de Seguridad y Salud en el Trabajo', tipo:'pdf',
    version:'v2', visibilidad:'Todo el parque', tamano:'620 KB', fecha:'2026-01-30', autor:'Sandra Milena Vargas', descargas:198, frecuente:false,
    contenido:'SG-SST prevención de riesgos laborales elementos de protección personal EPP matriz de peligros',
    historial:[{v:'v1', fecha:'2023-06-10', autor:'Sandra Milena Vargas'}] },

  { id:'d04', carpeta:'politicas', titulo:'Código de Ética y Conducta', tipo:'pdf',
    version:'v1', visibilidad:'Todo el parque', tamano:'510 KB', fecha:'2025-11-05', autor:'Camila Rodríguez', descargas:126, frecuente:false,
    contenido:'valores corporativos conflicto de interés regalos transparencia canal de denuncias respeto',
    historial:[] },

  { id:'d05', carpeta:'manuales', titulo:'Manual de Operación · Pista de Karts', tipo:'pdf',
    version:'v4', visibilidad:'Área: Operaciones', tamano:'3.2 MB', fecha:'2026-07-10', autor:'Andrés Peñaloza', descargas:87, frecuente:true,
    contenido:'karts encendido apagado revisión diaria combustible cascos estatura mínima señalización pista procedimiento de pits',
    historial:[{v:'v3', fecha:'2025-09-02', autor:'Andrés Peñaloza'},{v:'v2', fecha:'2024-05-21', autor:'Ricardo Gómez'}] },

  { id:'d06', carpeta:'manuales', titulo:'Manual de Apertura y Cierre del Parque', tipo:'pdf',
    version:'v2', visibilidad:'Jefes de área', tamano:'1.1 MB', fecha:'2026-04-18', autor:'Andrés Peñaloza', descargas:44, frecuente:false,
    contenido:'checklist apertura rondas de cierre llaves alarmas iluminación taquillas conteo de caja',
    historial:[{v:'v1', fecha:'2023-10-05', autor:'Andrés Peñaloza'}] },

  { id:'d07', carpeta:'manuales', titulo:'Protocolo de Atención · Zona Infantil', tipo:'pdf',
    version:'v3', visibilidad:'Área: Operaciones', tamano:'980 KB', fecha:'2026-06-02', autor:'Kevin Muñoz', descargas:63, frecuente:false,
    contenido:'acompañamiento de menores manillas de identificación niños extraviados juegos inflables recreación',
    historial:[{v:'v2', fecha:'2025-01-15', autor:'Andrés Peñaloza'}] },

  { id:'d08', carpeta:'seguridad', titulo:'Plan de Emergencias y Evacuación', tipo:'pdf',
    version:'v6', visibilidad:'Todo el parque', tamano:'4.8 MB', fecha:'2026-07-15', autor:'Sandra Milena Vargas', descargas:157, frecuente:true,
    contenido:'rutas de evacuación puntos de encuentro brigadas sismo incendio simulacro alarma coordinador de emergencias',
    historial:[{v:'v5', fecha:'2025-07-20', autor:'Sandra Milena Vargas'},{v:'v4', fecha:'2024-07-22', autor:'Óscar Ramírez'}] },

  { id:'d09', carpeta:'seguridad', titulo:'Protocolo de Primeros Auxilios', tipo:'pdf',
    version:'v2', visibilidad:'Todo el parque', tamano:'2.1 MB', fecha:'2026-03-11', autor:'Sandra Milena Vargas', descargas:171, frecuente:false,
    contenido:'botiquín RCP heridas quemaduras traslado enfermería reporte de atención emergencias médicas',
    historial:[{v:'v1', fecha:'2024-04-02', autor:'Sandra Milena Vargas'}] },

  { id:'d10', carpeta:'seguridad', titulo:'Procedimiento de Reporte de Incidentes', tipo:'docx',
    version:'v1', visibilidad:'Todo el parque', tamano:'240 KB', fecha:'2026-05-28', autor:'Óscar Ramírez', descargas:52, frecuente:false,
    contenido:'incidente accidente casi accidente formato de reporte investigación acciones correctivas',
    historial:[] },

  { id:'d11', carpeta:'talento', titulo:'Formato de Solicitud de Vacaciones', tipo:'xlsx',
    version:'v2', visibilidad:'Todo el parque', tamano:'96 KB', fecha:'2026-01-12', autor:'Luisa Fernanda Ortiz', descargas:284, frecuente:true,
    contenido:'vacaciones solicitud fechas jefe inmediato aprobación días hábiles saldo',
    historial:[{v:'v1', fecha:'2023-01-10', autor:'Luisa Fernanda Ortiz'}] },

  { id:'d12', carpeta:'talento', titulo:'Manual de Inducción Multiparque', tipo:'pdf',
    version:'v7', visibilidad:'Todo el parque', tamano:'6.4 MB', fecha:'2026-06-25', autor:'Luisa Fernanda Ortiz', descargas:119, frecuente:false,
    contenido:'historia del parque misión visión valores organigrama zonas beneficios reglamento primeros días',
    historial:[{v:'v6', fecha:'2025-06-30', autor:'Luisa Fernanda Ortiz'},{v:'v5', fecha:'2024-06-14', autor:'Luisa Fernanda Ortiz'}] },

  { id:'d13', carpeta:'talento', titulo:'Beneficios y Convenios para Colaboradores', tipo:'pdf',
    version:'v1', visibilidad:'Todo el parque', tamano:'720 KB', fecha:'2026-07-01', autor:'Luisa Fernanda Ortiz', descargas:203, frecuente:true,
    contenido:'convenios descuentos educación gimnasio caja de compensación día de la familia auxilios',
    historial:[] },

  { id:'d14', carpeta:'marca', titulo:'Manual de Marca Multiparque', tipo:'pdf',
    version:'v2', visibilidad:'Área: Comunicaciones', tamano:'12.8 MB', fecha:'2026-02-14', autor:'Natalia Cifuentes', descargas:38, frecuente:false,
    contenido:'logotipo paleta de colores azul navy verde lima cian tipografía aplicaciones piezas gráficas usos incorrectos',
    historial:[{v:'v1', fecha:'2024-09-01', autor:'Natalia Cifuentes'}] },

  { id:'d15', carpeta:'marca', titulo:'Plantillas de Presentación Corporativa', tipo:'pptx',
    version:'v1', visibilidad:'Todo el parque', tamano:'8.2 MB', fecha:'2026-03-20', autor:'Natalia Cifuentes', descargas:74, frecuente:false,
    contenido:'plantilla powerpoint diapositivas presentaciones internas informes',
    historial:[] }
];

/* ---------- Noticias y comunicados ---------- */
MP.NEWS = [
  { id:'n01', titulo:'Horarios especiales por temporada de vacaciones', categoria:'Institucional',
    fecha:'2026-07-22', autor:'Camila Rodríguez', imagen:null, fijado:true, destacado:false, likes:38,
    resumen:'A partir del lunes 27 de julio el parque opera en horario extendido: 9:00 a. m. a 7:00 p. m. Revisa cómo cambia la programación de tu zona.',
    cuerpo:'<p>Equipo Multiparque:</p><p>Con la temporada de vacaciones en su punto más alto, desde el <strong>lunes 27 de julio</strong> y hasta el <strong>domingo 16 de agosto</strong> el parque operará en horario extendido de <strong>9:00 a. m. a 7:00 p. m.</strong>, todos los días.</p><p>Los jefes de cada área publicarán esta semana la programación de turnos ajustada. Recuerda que los cambios de turno deben solicitarse con mínimo 48 horas de anticipación a través de tu jefe inmediato.</p><p>Gracias por la energía con la que están recibiendo a miles de familias. ¡Este es el momento del año en el que más sonrisas entregamos!</p>' },

  { id:'n02', titulo:'¡Multiparque está de aniversario! Una semana de sorpresas para el equipo', categoria:'Institucional',
    fecha:'2026-07-21', autor:'Jorge Iván Castro', imagen:'assets/img/news-aniversario.jpg', fijado:false, destacado:true, likes:74,
    resumen:'Celebramos un año más haciendo felices a las familias de Bogotá. Del 27 al 31 de julio tendremos actividades, detalles y reconocimientos para todo el equipo.',
    cuerpo:'<p>¡Estamos de fiesta! Multiparque cumple un año más de historia haciendo felices a las familias de Bogotá, y queremos celebrarlo con quienes lo hacen posible: <strong>ustedes</strong>.</p><p>Del <strong>27 al 31 de julio</strong> viviremos la Semana de Aniversario con:</p><ul><li>Desayuno de celebración por zonas (lunes y martes).</li><li>Entrega de reconocimientos por años de servicio (miércoles).</li><li>Tarde de juegos y karts solo para colaboradores (viernes al cierre).</li></ul><p>La programación detallada por zona estará en el calendario corporativo. ¡Los esperamos a todos!</p>' },

  { id:'n03', titulo:'Resultados de la jornada de inspección de atracciones', categoria:'Seguridad',
    fecha:'2026-07-18', autor:'Sandra Milena Vargas', imagen:'assets/img/news-seguridad.jpg', fijado:false, destacado:false, likes:29,
    resumen:'La inspección semestral cerró con 100 % de atracciones aprobadas. Conoce los hallazgos menores y los compromisos de mantenimiento.',
    cuerpo:'<p>El pasado 16 y 17 de julio realizamos, junto al equipo de Mantenimiento, la <strong>inspección semestral de atracciones</strong> con acompañamiento del ente certificador.</p><p><strong>Resultado: 100 % de las atracciones aprobadas.</strong></p><p>Se identificaron 6 hallazgos menores (señalización y pintura) que ya están programados en el plan de mantenimiento de agosto. Felicitaciones al equipo de la Pista de Karts, que obtuvo la calificación más alta del parque.</p><p>Recuerda: si detectas cualquier novedad en una atracción, repórtala de inmediato con el <em>Procedimiento de Reporte de Incidentes</em> disponible en el gestor documental.</p>' },

  { id:'n04', titulo:'Bienvenidos los nuevos compañeros de la temporada', categoria:'Talento Humano',
    fecha:'2026-07-15', autor:'Luisa Fernanda Ortiz', imagen:'assets/img/news-talento.jpg', fijado:false, destacado:false, likes:56,
    resumen:'Doce nuevos colaboradores se unen a Operaciones y Alimentos y Bebidas para la temporada de vacaciones. ¡Ayúdalos a sentirse en casa!',
    cuerpo:'<p>Esta semana dimos la bienvenida a <strong>12 nuevos compañeros</strong> que refuerzan los equipos de Operaciones y Alimentos y Bebidas durante la temporada.</p><p>Todos completaron su inducción y ya los encuentras en el <strong>directorio de empleados</strong> con su foto, zona y habilidades.</p><p>Si ves una cara nueva en tu zona, preséntate y compártele los tips que solo alguien de Multiparque conoce. ¡Bienvenidos a la familia!</p>' },

  { id:'n05', titulo:'Así vivimos el arranque de la temporada de vacaciones', categoria:'Eventos',
    fecha:'2026-07-08', autor:'Natalia Cifuentes', imagen:'assets/img/news-vacaciones.jpg', fijado:false, destacado:false, likes:63,
    resumen:'Más de 8.000 visitantes nos acompañaron el primer fin de semana. El lago y los botes fueron los grandes protagonistas.',
    cuerpo:'<p>El primer fin de semana de vacaciones superó todas las expectativas: <strong>más de 8.000 visitantes</strong> disfrutaron del parque entre el sábado y el domingo.</p><p>El lago y los botes fueron la atracción más visitada, seguidos por la pista de karts y la zona infantil.</p><p>Gracias al equipo de Operaciones por la coordinación impecable y a Alimentos y Bebidas por mantener tiempos de atención récord. ¡Vamos por más fines de semana así!</p>' },

  { id:'n06', titulo:'Nueva jornada de pausas activas y bienestar', categoria:'Talento Humano',
    fecha:'2026-07-03', autor:'Luisa Fernanda Ortiz', imagen:'assets/img/news-bienestar.jpg', fijado:false, destacado:false, likes:41,
    resumen:'Desde julio, todos los miércoles a las 9:30 a. m. tendremos pausas activas por zonas, lideradas por el equipo de Seguridad y Salud.',
    cuerpo:'<p>Tu bienestar es prioridad. A partir de este mes, todos los <strong>miércoles a las 9:30 a. m.</strong> realizaremos pausas activas de 15 minutos en cada zona del parque.</p><p>Las sesiones son lideradas por brigadistas y el equipo de Enfermería. No necesitas inscribirte: cuando escuches la señal en tu zona, ¡únete!</p><p>Además, en agosto abriremos inscripciones para el torneo interno de fútbol 5. Atentos al calendario.</p>' },

  { id:'n07', titulo:'Actualización del Plan de Emergencias: lo que debes saber', categoria:'Seguridad',
    fecha:'2026-06-28', autor:'Óscar Ramírez', imagen:null, fijado:false, destacado:false, likes:22,
    resumen:'La versión 6 del plan ya está en el gestor documental. Cambian dos puntos de encuentro y se suman brigadistas en la Zona Infantil.',
    cuerpo:'<p>Ya está disponible en el gestor documental la <strong>versión 6 del Plan de Emergencias y Evacuación</strong>. Los cambios principales:</p><ul><li>El punto de encuentro 2 se traslada frente a la taquilla norte.</li><li>La Zona Infantil suma 2 brigadistas por turno en temporada alta.</li><li>Se actualiza el directorio de emergencias con los nuevos números de la enfermería.</li></ul><p>El <strong>simulacro general</strong> será el sábado 1 de agosto a las 8:00 a. m., antes de la apertura. La asistencia es obligatoria para todo el personal del turno.</p>' },

  { id:'n08', titulo:'Festival de Luces: prepárate para las noches de agosto', categoria:'Eventos',
    fecha:'2026-06-20', autor:'Paola Martínez', imagen:'assets/img/news-festival.jpg', fijado:false, destacado:false, likes:88,
    resumen:'En agosto el parque abrirá en horario nocturno los viernes y sábados con un festival de luces, música y gastronomía. Así nos estamos preparando.',
    cuerpo:'<p>Agosto llega con un plan que nunca habíamos hecho: el <strong>Festival de Luces Multiparque</strong>. Los viernes y sábados, del 8 al 29 de agosto, el parque abrirá de 6:00 p. m. a 10:00 p. m. con recorridos iluminados, música en vivo y una feria gastronómica.</p><p>Para el equipo esto significa turnos nocturnos voluntarios con recargo, que podrás postular desde la intranet a partir del 25 de julio.</p><p>Comunicaciones publicará el detrás de cámaras del montaje. ¡Va a ser inolvidable!</p>' }
];

MP.NEWS_CATS = {
  'Institucional': '#262161',
  'Talento Humano': '#AB214F',
  'Seguridad': '#E5C700',
  'Eventos': '#00AEEF'
};

/* ---------- Calendario ---------- */
MP.EVENTS = [
  { id:'e01', titulo:'Día de la Independencia · Festivo', fecha:'2026-07-20', hora:'Todo el día', tipo:'corporativo', area:null, lugar:'Parque abierto · horario festivo', desc:'Festivo nacional. El parque opera con horario de festivo (9:00 a. m. a 6:00 p. m.).' },
  { id:'e02', titulo:'Capacitación · Uso de la nueva intranet', fecha:'2026-07-24', hora:'9:00 a. m.', tipo:'corporativo', area:null, lugar:'Sala de Capacitación', desc:'Sesión práctica para todo el equipo administrativo. Los equipos operativos tendrán sesiones por zona la semana siguiente.' },
  { id:'e03', titulo:'Operativo fin de semana · Temporada alta', fecha:'2026-07-25', hora:'8:00 a. m.', tipo:'equipo', area:'Operaciones', lugar:'Punto de encuentro · Taquilla norte', desc:'Briefing de apertura y asignación de refuerzos por zona.' },
  { id:'e04', titulo:'Semana de Aniversario · Desayuno por zonas', fecha:'2026-07-27', hora:'7:30 a. m.', tipo:'corporativo', area:null, lugar:'Restaurante principal', desc:'Arranque de la Semana de Aniversario. Desayuno para los equipos de Administración y Zonas Verdes.' },
  { id:'e05', titulo:'Comité directivo mensual', fecha:'2026-07-28', hora:'10:00 a. m.', tipo:'equipo', area:'Dirección', lugar:'Sala de Juntas', desc:'Revisión de resultados de temporada y avance del Festival de Luces.' },
  { id:'e06', titulo:'Pausas activas por zonas', fecha:'2026-07-29', hora:'9:30 a. m.', tipo:'corporativo', area:null, lugar:'Cada zona del parque', desc:'Sesión de 15 minutos liderada por brigadistas y Enfermería.' },
  { id:'e07', titulo:'Reconocimientos por años de servicio', fecha:'2026-07-29', hora:'4:00 p. m.', tipo:'corporativo', area:null, lugar:'Tarima central', desc:'Entrega de reconocimientos de la Semana de Aniversario.' },
  { id:'e08', titulo:'Cierre contable de julio', fecha:'2026-07-31', hora:'2:00 p. m.', tipo:'equipo', area:'Administración y Finanzas', lugar:'Oficina de Contabilidad', desc:'Entrega de soportes y legalizaciones de todas las áreas antes de las 12 m.' },
  { id:'e09', titulo:'Tarde de juegos para colaboradores', fecha:'2026-07-31', hora:'6:30 p. m.', tipo:'corporativo', area:null, lugar:'Pista de Karts', desc:'Cierre de la Semana de Aniversario: karts y botes solo para el equipo, con refrigerio.' },
  { id:'e10', titulo:'Simulacro general de evacuación', fecha:'2026-08-01', hora:'8:00 a. m.', tipo:'corporativo', area:null, lugar:'Todo el parque', desc:'Simulacro previo a la apertura. Asistencia obligatoria para el personal del turno. Ver Plan de Emergencias v6.' },
  { id:'e11', titulo:'Celebración cumpleaños julio–agosto', fecha:'2026-08-05', hora:'3:30 p. m.', tipo:'equipo', area:'Talento Humano', lugar:'Restaurante principal', desc:'Torta, música y sorpresas para los cumpleañeros de julio y agosto.' },
  { id:'e12', titulo:'Batalla de Boyacá · Festivo', fecha:'2026-08-07', hora:'Todo el día', tipo:'corporativo', area:null, lugar:'Parque abierto · horario festivo', desc:'Festivo nacional. Horario de festivo.' },
  { id:'e13', titulo:'Festival de Luces · Noche de apertura', fecha:'2026-08-08', hora:'6:00 p. m.', tipo:'corporativo', area:null, lugar:'Todo el parque', desc:'Primera noche del Festival de Luces. Turnos nocturnos confirmados por Operaciones.' },
  { id:'e14', titulo:'Mantenimiento preventivo · Flota de karts', fecha:'2026-08-12', hora:'6:00 a. m.', tipo:'equipo', area:'Mantenimiento', lugar:'Taller · Pista de Karts', desc:'Revisión de motores y frenos de toda la flota antes del fin de semana.' },
  { id:'e15', titulo:'Capacitación · Primeros auxilios básicos', fecha:'2026-08-15', hora:'8:00 a. m.', tipo:'equipo', area:'Seguridad y Salud', lugar:'Sala de Capacitación', desc:'Cupos para 20 colaboradores. Inscripciones con Sandra Vargas.' }
];

/* ---------- Accesos rápidos por rol (dashboard) ---------- */
MP.QUICK_LINKS = {
  direccion: [
    { icono:'chart',  titulo:'Consumo de infraestructura', sub:'Panel en tiempo real', href:'admin.html#infra' },
    { icono:'users',  titulo:'Directorio completo', sub:'16 colaboradores', href:'directorio.html' },
    { icono:'doc',    titulo:'Gestor documental', sub:'15 documentos vigentes', href:'documentos.html' },
    { icono:'megaphone', titulo:'Publicar comunicado', sub:'Editor de noticias', href:'noticias.html#nueva' }
  ],
  talento: [
    { icono:'users',  titulo:'Directorio de empleados', sub:'Actualizar perfiles', href:'directorio.html' },
    { icono:'doc',    titulo:'Documentos de TH', sub:'Formatos y manuales', href:'documentos.html#talento' },
    { icono:'cake',   titulo:'Cumpleaños del mes', sub:'4 en julio', href:'directorio.html' },
    { icono:'megaphone', titulo:'Publicar noticia de TH', sub:'Editor de noticias', href:'noticias.html#nueva' }
  ],
  comunicaciones: [
    { icono:'megaphone', titulo:'Publicar noticia', sub:'Editor con imágenes y video', href:'noticias.html#nueva' },
    { icono:'calendar', titulo:'Calendario de eventos', sub:'Festival de Luces', href:'calendario.html' },
    { icono:'doc',    titulo:'Manual de Marca', sub:'Versión v2 vigente', href:'documentos.html#marca' },
    { icono:'users',  titulo:'Directorio', sub:'Fotos y perfiles', href:'directorio.html' }
  ],
  colaborador: [
    { icono:'doc',    titulo:'Mis documentos frecuentes', sub:'Manuales de tu zona', href:'documentos.html' },
    { icono:'calendar', titulo:'Próximos eventos', sub:'Semana de Aniversario', href:'calendario.html' },
    { icono:'users',  titulo:'Buscar un compañero', sub:'Por nombre o habilidad', href:'directorio.html' },
    { icono:'heart',  titulo:'Beneficios y convenios', sub:'Documento actualizado', href:'documentos.html#talento' }
  ]
};
MP.QUICK_LINKS.jefe = MP.QUICK_LINKS.colaborador;
MP.QUICK_LINKS.admin = MP.QUICK_LINKS.direccion;
