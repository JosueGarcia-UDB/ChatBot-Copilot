const data = [

  // Información académica
  { 
    key: "calendario", 
    pregunta: "¿Cuál es el calendario académico?", 
    respuesta: "El calendario académico de la Universidad Don Bosco (UDB) comenzó el 20 de enero, y lo puedes visitar en https://www.udb.edu.sv/udb/eventos/categoria/1",
    synonyms: ["calendario académico", "inicio de clases", "fechas importantes", "inicio semestre", "cuando comienzan clases", "cuándo empieza el ciclo", "fechas del ciclo", "ciclo escolar", "calendario UDB"]
},
{ 
    key: "horario clases", 
    pregunta: "¿Dónde puedo encontrar mi horario de clases?", 
    respuesta: "Puedes encontrar tu horario de clases en el portal estudiantil de la Universidad Don Bosco (UDB) https://admacad.udb.edu.sv/PortalWeb/",
    synonyms: ["horario de clases", "mi horario", "ver horario", "dónde veo mi horario", "dónde está el horario", "consultar horario", "clases horarios", "mi cronograma de clases"]
},
{ 
    key: "inscripciones", 
    pregunta: "¿Cuándo son los períodos de inscripción?", 
    respuesta: "Las inscripciones del ciclo 02 - 2025 en la Universidad Don Bosco (UDB) serán el 18 de junio",
    synonyms: ["inscripciones", "periodo de inscripción", "cuándo inscribirse", "fechas de inscripción", "matrícula", "matricularse", "cuando matricularme", "inscripción UDB", "registro de cursos"]
},
{
    key: "requisitos graduacion",
    pregunta: "¿Cuáles son los requisitos para graduarse?",
    respuesta: "Debes completar todos los créditos académicos, realizar el servicio social y aprobar el examen de grado en la Universidad Don Bosco (UDB). Consulta el reglamento académico para más detalles.",
    synonyms: ["requisitos de graduación", "graduación", "requisitos para graduarse", "examen de grado", "créditos académicos"]
},
{
    key: "cambio carrera",
    pregunta: "¿Cómo puedo cambiar de carrera?",
    respuesta: "Para cambiar de carrera en la Universidad Don Bosco (UDB), debes presentar una solicitud en el Departamento de Registro Académico y cumplir con los requisitos establecidos.",
    synonyms: ["cambio de carrera", "cambiar carrera", "solicitud de cambio de carrera", "requisitos para cambiar de carrera"]
},
{
    key: "becas",
    pregunta: "¿Qué tipos de becas ofrece la universidad?",
    respuesta: "La Universidad Don Bosco (UDB) ofrece becas académicas, deportivas y culturales. Consulta el Departamento de Becas para más información.",
    synonyms: ["becas", "tipos de becas", "becas académicas", "becas deportivas", "becas culturales"]
},
{
    key: "asesoria academica",
    pregunta: "¿Dónde puedo obtener asesoría académica?",
    respuesta: "Puedes obtener asesoría académica en el Departamento de Asesoría Académica de la Universidad Don Bosco (UDB). Ellos te ayudarán a planificar tu carrera y a resolver dudas académicas.",
    synonyms: ["asesoría académica", "consejería académica", "orientación académica", "apoyo académico"]
},
{
    key: "calificaciones",
    pregunta: "¿Cómo puedo consultar mis calificaciones?",
    respuesta: "Puedes consultar tus calificaciones en el portal estudiantil de la Universidad Don Bosco (UDB) ingresando con tu usuario y contraseña.",
    synonyms: ["calificaciones", "consultar calificaciones", "ver notas", "mis calificaciones", "notas académicas"]
},

  // Apoyo estudiantil
  {
    key: "apoyo emocional",
    question: "¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales?",
    answer: "Puedes comunicarte al Departamento de Asistencia Psicopedagógica de la Universidad Don Bosco (UDB) al Tel. 2251-8200",
    synonyms: ["estrés", "estresado", "estresada", "problemas emocionales", "ayuda emocional", "apoyo psicológico", "psicólogo", "ansiedad", "depresión", "apoyo emocional", "ayuda psicológica", "emociones", "salud mental"]
},
{
    key: "discapacidades",
    question: "¿Cuáles son los recursos disponibles para estudiantes con discapacidades?",
    answer: "La Universidad Don Bosco (UDB) ofrece adaptaciones físicas, apoyo académico personalizado y un equipo de orientación especializado.",
    synonyms: ["discapacidad", "adaptaciones", "accesibilidad", "estudiantes con discapacidades", "inclusión", "apoyo a discapacitados", "ayuda a discapacitados"]
},
{
    key: "tutoria",
    question: "¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mi rendimiento académico?",
    answer: "Para consultar quién es tu tutor asignado ingresa al Portal Web de la Universidad Don Bosco (UDB) con tu usuario y contraseña. También puedes preguntar en tu Escuela respectiva.",
    synonyms: ["tutor", "asesoramiento académico", "tutoría académica", "ayuda académica", "apoyo académico", "consejería académica"]
},
{
    key: "becas",
    question: "¿Cómo puedo solicitar una beca?",
    answer: "Puedes solicitar una beca a través del Departamento de Becas de la Universidad Don Bosco (UDB). Visita su oficina o consulta su página web para más información.",
    synonyms: ["beca", "ayuda financiera", "apoyo económico", "solicitar beca", "becas universitarias"]
},
{
    key: "actividades extracurriculares",
    question: "¿Qué actividades extracurriculares están disponibles?",
    answer: "La Universidad Don Bosco (UDB) ofrece una variedad de actividades extracurriculares, incluyendo clubes deportivos, culturales y académicos. Consulta el calendario de actividades en el portal estudiantil.",
    synonyms: ["actividades extracurriculares", "clubes", "deportes", "cultura", "actividades universitarias"]
},
{
    key: "biblioteca",
    question: "¿Cuáles son los horarios de la biblioteca?",
    answer: "La biblioteca de la Universidad Don Bosco (UDB) está abierta de lunes a viernes de 8:00 AM a 8:00 PM y los sábados de 9:00 AM a 1:00 PM.",
    synonyms: ["biblioteca", "horarios de biblioteca", "libros", "estudio", "recursos bibliográficos"]
},
{
    key: "cursos en línea",
    question: "¿La universidad ofrece cursos en línea?",
    answer: "Sí, la Universidad Don Bosco (UDB) ofrece una variedad de cursos en línea. Puedes inscribirte a través del portal estudiantil.",
    synonyms: ["cursos en línea", "educación a distancia", "clases virtuales", "aprendizaje en línea"]
},
{
    key: "servicio social",
    question: "¿Cómo puedo cumplir con mi servicio social?",
    answer: "Para cumplir con tu servicio social en la Universidad Don Bosco (UDB), debes registrarte en el Departamento de Servicio Social y elegir un proyecto aprobado.",
    synonyms: ["servicio social", "voluntariado", "proyectos sociales", "requisitos de servicio social"]
},
{
    key: "intercambios estudiantiles",
    question: "¿La universidad ofrece programas de intercambio estudiantil?",
    answer: "Sí, la Universidad Don Bosco (UDB) tiene convenios con varias instituciones internacionales para programas de intercambio estudiantil. Consulta en el Departamento de Relaciones Internacionales.",
    synonyms: ["intercambio estudiantil", "programas de intercambio", "estudios en el extranjero", "movilidad estudiantil"]
},
{
    key: "salud",
    question: "¿Qué servicios de salud están disponibles en la universidad?",
    answer: "La Universidad Don Bosco (UDB) cuenta con un centro de salud que ofrece servicios médicos básicos y atención de emergencia.",
    synonyms: ["servicios de salud", "centro de salud", "atención médica", "emergencias médicas"]
},
{
    key: "alimentación",
    question: "¿Dónde puedo encontrar opciones de alimentación en el campus?",
    answer: "El campus de la Universidad Don Bosco (UDB) cuenta con varias cafeterías y comedores que ofrecen una variedad de opciones de alimentación.",
    synonyms: ["alimentación", "comida en el campus", "cafeterías", "comedores", "opciones de comida"]
},
{
    key: "transporte",
    question: "¿La universidad ofrece servicios de transporte?",
    answer: "Sí, la Universidad Don Bosco (UDB) ofrece servicios de transporte para estudiantes. Consulta los horarios y rutas en el portal estudiantil.",
    synonyms: ["transporte", "servicios de transporte", "autobuses universitarios", "rutas de transporte"]
},

  // Servicios de campus
  {
    key: "eventos",
    question: "¿Hay algún evento importante en el campus esta semana?",
    answer: "Sí, en esta semana que viene habrá Misa de miércoles de Ceniza en el campus de la Universidad Don Bosco (UDB).",
    synonyms: ["eventos", "actividades", "qué hay esta semana", "qué eventos hay", "actividades en el campus", "eventos importantes", "qué pasa esta semana", "eventos actuales", "calendario de eventos"]
},
{
    key: "biblioteca",
    question: "¿Dónde está la biblioteca y cuáles son sus horarios?",
    answer: "La biblioteca de la Universidad Don Bosco (UDB) se encuentra al noroeste del campus. Horarios: lunes a viernes de 7:00 am a 5:00 pm y sábados de 8:00 am a 12:00 pm.",
    synonyms: ["biblioteca", "dónde está la biblioteca", "horarios biblioteca", "horario biblioteca", "cómo llegar a la biblioteca", "biblioteca UDB", "servicios biblioteca", "libros campus", "consulta biblioteca"]
},
{
    key: "servicios estudiantiles",
    question: "¿Cómo puedo contactar al departamento de servicios estudiantiles?",
    answer: "Puedes visitar al departamento de servicios estudiantiles de la Universidad Don Bosco (UDB) en el edificio DAC, planta baja",
    synonyms: ["servicios estudiantiles", "contactar servicios estudiantiles", "departamento estudiantil", "atención estudiantes", "soporte estudiantes", "ayuda estudiantes", "correo servicios estudiantiles", "teléfono servicios estudiantiles", "información servicios estudiantiles"]
},
{
    key: "centro de salud",
    question: "¿Qué servicios ofrece el centro de salud del campus?",
    answer: "El centro de salud de la Universidad Don Bosco (UDB) ofrece consultas médicas, atención de emergencia y campañas de vacunación. Está ubicado cerca de la entrada principal.",
    synonyms: ["centro de salud", "servicios médicos", "atención médica", "emergencias", "vacunación"]
},
{
    key: "cafeterias",
    question: "¿Cuántas cafeterías hay en el campus y dónde están ubicadas?",
    answer: "El campus de la Universidad Don Bosco (UDB) cuenta con dos cafeterías: una ubicada al este del campus y otras 2 al suroeste, cerca de aeronáutica.",
    synonyms: ["cafeterías", "comida en el campus", "dónde comer", "opciones de comida", "cafeterías universitarias"]
},
{
    key: "laboratorios",
    question: "¿Qué laboratorios están disponibles para los estudiantes?",
    answer: "La Universidad Don Bosco (UDB) cuenta con laboratorios de informática, química, física y biología. Consulta los horarios y disponibilidad en el portal estudiantil.",
    synonyms: ["laboratorios", "laboratorios disponibles", "laboratorios universitarios", "laboratorios de informática", "laboratorios de ciencias"]
},
{
    key: "centro de copiado",
    question: "¿Dónde puedo encontrar el centro de copiado en el campus?",
    answer: "El centro de copiado de la Universidad Don Bosco (UDB) está ubicado en el edificio principal, planta baja. Ofrece servicios de impresión, fotocopiado y encuadernación.",
    synonyms: ["centro de copiado", "impresión", "fotocopiado", "encuadernación", "servicios de copiado"]
},
{
    key: "orientacion vocacional",
    question: "¿Dónde puedo obtener orientación vocacional?",
    answer: "Puedes obtener orientación vocacional en el Departamento de Orientación Vocacional de la Universidad Don Bosco (UDB). Ellos te ayudarán a elegir la carrera adecuada para ti.",
    synonyms: ["orientación vocacional", "elección de carrera", "consejería vocacional", "asesoramiento vocacional"]
},

  // Vida estudiantil
  {
    key: "clubes",
    question: "¿Qué clubes o actividades extracurriculares están disponibles en el campus?",
    answer: "La Universidad Don Bosco (UDB) tiene clubes de robótica, teatro, deportes, debate y muchos más. Revisa la sección de servicios estudiantiles en el portal.",
    synonyms: ["clubes", "actividades extracurriculares", "clubes disponibles", "grupos estudiantiles", "clubes del campus", "actividades para estudiantes", "grupos universitarios", "asociaciones estudiantiles", "clubes UDB"]
},
{
    key: "actividades",
    question: "¿Hay alguna actividad interesante planeada para el fin de semana?",
    answer: "Esta semana no está agendada ninguna actividad, pero puedes revisar la cartelera de eventos en el portal estudiantil de la Universidad Don Bosco (UDB).",
    synonyms: ["actividades", "eventos fin de semana", "qué hay el fin de semana", "actividades para el finde", "qué hacer en el campus", "cartelera de eventos", "planes para el fin de semana", "eventos programados"]
},
{
    key: "alimentacion",
    question: "¿Cuáles son las opciones de alimentación disponibles en el campus?",
    answer: "El campus de la Universidad Don Bosco (UDB) cuenta con dos cafeterías, una ubicada al este del campus, y la otra, al suroeste, cerca de aeronáutica.",
    synonyms: ["alimentación", "cafeterías", "comida campus", "dónde comer", "opciones de comida", "comida en la universidad", "qué puedo comer en el campus", "dónde almorzar", "comida UDB"]
},
{
    key: "deportes",
    question: "¿Qué instalaciones deportivas están disponibles en el campus?",
    answer: "El campus de la Universidad Don Bosco (UDB) cuenta con canchas de fútbol, baloncesto, voleibol y un gimnasio. Puedes inscribirte en las actividades deportivas a través del portal estudiantil.",
    synonyms: ["deportes", "instalaciones deportivas", "canchas", "gimnasio", "actividades deportivas", "deportes en el campus"]
},
{
    key: "voluntariado",
    question: "¿Cómo puedo participar en actividades de voluntariado?",
    answer: "Puedes inscribirte en actividades de voluntariado a través del Departamento de Responsabilidad Social Universitaria de la Universidad Don Bosco (UDB).",
    synonyms: ["voluntariado", "actividades de voluntariado", "participar en voluntariado", "voluntariado universitario"]
},
{
    key: "eventos culturales",
    question: "¿Qué eventos culturales se realizan en la universidad?",
    answer: "La Universidad Don Bosco (UDB) organiza eventos culturales como conciertos, obras de teatro y exposiciones de arte. Consulta el calendario de eventos en el portal estudiantil.",
    synonyms: ["eventos culturales", "conciertos", "teatro", "exposiciones de arte", "cultura en el campus"]
},
{
    key: "asesoria academica",
    question: "¿Dónde puedo obtener asesoría académica?",
    answer: "Puedes obtener asesoría académica en el Departamento de Asesoría Académica de la Universidad Don Bosco (UDB). Ellos te ayudarán a planificar tu carrera y a resolver dudas académicas.",
    synonyms: ["asesoría académica", "consejería académica", "orientación académica", "apoyo académico"]
},
{
    key: "seguridad",
    question: "¿Qué medidas de seguridad existen en el campus?",
    answer: "El campus de la Universidad Don Bosco (UDB) cuenta con vigilancia las 24 horas, cámaras de seguridad y un sistema de identificación para el acceso a las instalaciones.",
    synonyms: ["seguridad", "medidas de seguridad", "vigilancia", "seguridad en el campus"]
},

  // Desarrollo profesional
  {
    key: "pasantias",
    question: "¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera?",
    answer: "Consulta al Programa de Acompañamiento e inserción laboral INCORPORATE de la Universidad Don Bosco (UDB). Puedes contactarlos por el Tel. 2251-8200.",
    synonyms: ["pasantías", "prácticas", "prácticas profesionales", "inserción laboral", "oportunidades laborales", "pasantía", "práctica", "empleo estudiantil", "trabajo para estudiantes"]
},
{
    key: "curriculum",
    question: "¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae?",
    answer: "El Programa de Orientación De Carrera POC UDB ofrece talleres y asesoría personalizada para elaborar un currículum profesional.",
    synonyms: ["currículum", "cv", "hoja de vida", "cómo hacer un currículum", "elaborar cv", "crear currículum", "currículum vitae", "documento laboral", "documento de experiencia"]
},
{
    key: "entrevistas",
    question: "¿Hay talleres disponibles para prepararme para entrevistas de trabajo?",
    answer: "Sí, consulta al Programa de Orientación de Carrera POC UDB para conocer los talleres y charlas disponibles (Tel. 2251-8200).",
    synonyms: ["entrevista de trabajo", "entrevistas laborales", "preparación entrevistas", "taller entrevistas", "consejos entrevista", "práctica entrevista", "entrevista laboral", "mejorar entrevista"]
},
{
    key: "networking",
    question: "¿Cómo puedo mejorar mis habilidades de networking?",
    answer: "Participa en eventos y ferias de empleo organizadas por la universidad. También puedes unirte a clubes y asociaciones estudiantiles.",
    synonyms: ["networking", "redes profesionales", "contactos laborales", "eventos de networking", "ferias de empleo", "conexiones profesionales"]
},
{
    key: "mentoria",
    question: "¿La universidad ofrece programas de mentoría?",
    answer: "Sí, la universidad ofrece programas de mentoría donde puedes ser guiado por profesionales experimentados en tu campo de estudio.",
    synonyms: ["mentoría", "mentores", "programas de mentoría", "guía profesional", "asesoramiento profesional"]
},
{
    key: "desarrollo habilidades",
    question: "¿Qué recursos están disponibles para desarrollar habilidades blandas?",
    answer: "El Programa de Orientación de Carrera POC UDB ofrece talleres y cursos para desarrollar habilidades blandas como comunicación, liderazgo y trabajo en equipo.",
    synonyms: ["habilidades blandas", "desarrollo personal", "comunicación", "liderazgo", "trabajo en equipo", "habilidades interpersonales"]
},
{
    key: "ferias de empleo",
    question: "¿Cuándo se realizan las ferias de empleo en la universidad?",
    answer: "Las ferias de empleo se realizan dos veces al año. Consulta el calendario académico para conocer las fechas exactas.",
    synonyms: ["ferias de empleo", "eventos de empleo", "oportunidades laborales", "reclutamiento", "empleo universitario"]
},
{
    key: "asesoria profesional",
    question: "¿Dónde puedo obtener asesoría profesional personalizada?",
    answer: "Puedes obtener asesoría profesional personalizada en el Programa de Orientación de Carrera POC UDB. Ellos te ayudarán a planificar tu carrera y a prepararte para el mercado laboral.",
    synonyms: ["asesoría profesional", "consejería profesional", "orientación de carrera", "planificación de carrera", "asesoramiento laboral"]
},
{
    key: "emprendimiento",
    question: "¿La universidad ofrece apoyo para estudiantes emprendedores?",
    answer: "Sí, la universidad cuenta con un Centro de Emprendimiento que ofrece recursos y asesoría para estudiantes que desean iniciar su propio negocio.",
    synonyms: ["emprendimiento", "emprendedores", "iniciar negocio", "apoyo emprendedores", "centro de emprendimiento"]
},
{
    key: "certificaciones",
    question: "¿Puedo obtener certificaciones profesionales a través de la universidad?",
    answer: "Sí, la universidad ofrece programas de certificación en diversas áreas profesionales. Consulta el catálogo de cursos para más información.",
    synonyms: ["certificaciones", "certificaciones profesionales", "programas de certificación", "cursos de certificación"]
},
{
    key: "bolsa de trabajo",
    question: "¿La universidad tiene una bolsa de trabajo para estudiantes y egresados?",
    answer: "Sí, la universidad cuenta con una bolsa de trabajo donde puedes encontrar ofertas laborales exclusivas para estudiantes y egresados.",
    synonyms: ["bolsa de trabajo", "ofertas laborales", "empleo para estudiantes", "trabajo para egresados", "oportunidades de empleo"]
},
{
    key: "habilidades tecnicas",
    question: "¿Dónde puedo mejorar mis habilidades técnicas?",
    answer: "La universidad ofrece cursos y talleres para mejorar tus habilidades técnicas en diversas áreas. Consulta el catálogo de cursos en el portal estudiantil.",
    synonyms: ["habilidades técnicas", "cursos técnicos", "talleres técnicos", "mejorar habilidades técnicas", "capacitación técnica"]
},
]

export default data;