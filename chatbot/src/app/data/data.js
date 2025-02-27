const data = [

  // Información académica
  {
    key: "calendario",
    pregunta: "¿Cuál es el calendario académico?",
    respuesta: "El calendario académico comenzó el 20 de enero, y lo puedes visitar en https://www.udb.edu.sv/udb/eventos/categoria/1",
    synonyms: ["calendario académico", "inicio de clases", "fechas importantes", "inicio semestre", "cuando comienzan clases", "cuándo empieza el ciclo", "fechas del ciclo", "ciclo escolar", "calendario UDB"]
  },
  {
    key: "horario clases",
    pregunta: "¿Dónde puedo encontrar mi horario de clases?",
    respuesta: "Puedes encontrar tu horario de clases en el portal estudiantil https://admacad.udb.edu.sv/PortalWeb/",
    synonyms: ["horario de clases", "mi horario", "ver horario", "dónde veo mi horario", "dónde está el horario", "consultar horario", "clases horarios", "mi cronograma de clases"]
  },
  {
    key: "inscripciones",
    pregunta: "¿Cuándo son los períodos de inscripción?",
    respuesta: "Las inscripciones del ciclo 02 - 2025 será el 18 de junio",
    synonyms: ["inscripciones", "periodo de inscripción", "cuándo inscribirse", "fechas de inscripción", "matrícula", "matricularse", "cuando matricularme", "inscripción UDB", "registro de cursos"]
  },

  // Apoyo estudiantil
  {
    key: "apoyo emocional",
    pregunta: "¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales?",
    respuesta: "Puedes comunicarte al Departamento de Asistencia Psicopedagógica al Tel. 2251-8200",
    synonyms: ["estrés", "estresado", "estresada", "problemas emocionales", "ayuda emocional", "apoyo psicológico", "psicólogo", "ansiedad", "depresión", "apoyo emocional", "ayuda psicológica", "emociones", "salud mental"]
  },
  {
    key: "discapacidades",
    pregunta: "¿Cuáles son los recursos disponibles para estudiantes con discapacidades?",
    respuesta: "La universidad ofrece adaptaciones físicas, apoyo académico personalizado y un equipo de orientación especializado.",
    synonyms: ["discapacidad", "adaptaciones", "accesibilidad", "estudiantes con discapacidades", "inclusión", "apoyo a discapacitados", "ayuda a discapacitados"]
  },
  {
    key: "tutoria",
    pregunta: "¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mi rendimiento académico?",
    respuesta: "Para consultar quién es tu tutor asignado ingresa al Portal Web con tu usuario y contraseña. También puedes preguntar en tu Escuela respectiva.",
    synonyms: ["tutor", "asesoramiento académico", "tutoría académica", "ayuda académica", "apoyo académico", "consejería académica"]
  },

  // Servicios de campus
  {
    key: "eventos",
    pregunta: "¿Hay algún evento importante en el campus esta semana?",
    respuesta: "Sí, en esta semana que viene habrá Misa de miércoles de Ceniza en el campus.",
    synonyms: ["eventos", "actividades", "qué hay esta semana", "qué eventos hay", "actividades en el campus", "eventos importantes", "qué pasa esta semana", "eventos actuales", "calendario de eventos"]
  },
  {
    key: "biblioteca",
    pregunta: "¿Dónde está la biblioteca y cuáles son sus horarios?",
    respuesta: "La biblioteca se encuentra al noroeste del campus. Horarios: lunes a viernes de 7:00 am a 5:00 pm y sábados de 8:00 am a 12:00 pm.",
    synonyms: ["biblioteca", "dónde está la biblioteca", "horarios biblioteca", "horario biblioteca", "cómo llegar a la biblioteca", "biblioteca UDB", "servicios biblioteca", "libros campus", "consulta biblioteca"]
  },
  {
    key: "servicios estudiantiles",
    pregunta: "¿Cómo puedo contactar al departamento de servicios estudiantiles?",
    respuesta: "Puedes visitar al departamento de servicios estudiantiles en el edificio DAC, planta baja",
    synonyms: ["servicios estudiantiles", "contactar servicios estudiantiles", "departamento estudiantil", "atención estudiantes", "soporte estudiantes", "ayuda estudiantes", "correo servicios estudiantiles", "teléfono servicios estudiantiles", "información servicios estudiantiles"]
  },

  // Vida estudiantil
  {
    key: "clubes",
    pregunta: "¿Qué clubes o actividades extracurriculares están disponibles en el campus?",
    respuesta: "Tenemos clubes de robótica, teatro, deportes, debate y muchos más. Revisa la sección de servicios estudiantiles en el portal.",
    synonyms: ["clubes", "actividades extracurriculares", "clubes disponibles", "grupos estudiantiles", "clubes del campus", "actividades para estudiantes", "grupos universitarios", "asociaciones estudiantiles", "clubes UDB"]
  },
  {
    key: "actividades",
    pregunta: "¿Hay alguna actividad interesante planeada para el fin de semana?",
    respuesta: "Esta semana no está agendada ninguna actividad, pero puedes revisar la cartelera de eventos en el portal estudiantil.",
    synonyms: ["actividades", "eventos fin de semana", "qué hay el fin de semana", "actividades para el finde", "qué hacer en el campus", "cartelera de eventos", "planes para el fin de semana", "eventos programados"]
  },
  {
    key: "alimentacion",
    pregunta: "¿Cuáles son las opciones de alimentación disponibles en el campus?",
    respuesta: "Contamos con dos cafeterías, una ubicada al este del campus, y la otra, al suroeste, cerca de aeronáutica.",
    synonyms: ["alimentación", "cafeterías", "comida campus", "dónde comer", "opciones de comida", "comida en la universidad", "qué puedo comer en el campus", "dónde almorzar", "comida UDB"]
  },

  // Desarrollo profesional
  {
    key: "pasantias",
    pregunta: "¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera?",
    respuesta: "Consulta al Programa de Acompañamiento e inserción laboral INCORPORATE. Puedes contactarlos por el Tel. 2251-8200.",
    synonyms: ["pasantías", "prácticas", "prácticas profesionales", "inserción laboral", "oportunidades laborales", "pasantía", "práctica", "empleo estudiantil", "trabajo para estudiantes"]
  },
  {
    key: "curriculum",
    pregunta: "¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae?",
    respuesta: "El Programa de Orientación De Carrera POC UDB ofrece talleres y asesoría personalizada para elaborar un currículum profesional.",
    synonyms: ["currículum", "cv", "hoja de vida", "cómo hacer un currículum", "elaborar cv", "crear currículum", "currículum vitae", "documento laboral", "documento de experiencia"]
  },
  {
    key: "entrevistas",
    pregunta: "¿Hay talleres disponibles para prepararme para entrevistas de trabajo?",
    respuesta: "Sí, consulta al Programa de Orientación de Carrera POC UDB para conocer los talleres y charlas disponibles (Tel. 2251-8200).",
    synonyms: ["entrevista de trabajo", "entrevistas laborales", "preparación entrevistas", "taller entrevistas", "consejos entrevista", "práctica entrevista", "entrevista laboral", "mejorar entrevista"]
  }

]

export default data;