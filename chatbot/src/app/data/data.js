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
    respuesta: "Las inscripciones del ciclo 02 - 2025 en la Universidad Don Bosco (UDB) serán el 18 de junio y puedes realizar la inscripción desde el portal estudiantil de la Universidad Don Bosco (UDB) https://admacad.udb.edu.sv/portalweb/",
    synonyms: ["inscripciones", "periodo de inscripción", "cuándo inscribirse", "fechas de inscripción", "matrícula", "matricularse", "cuando matricularme", "inscripción UDB", "registro de cursos"]
  },
  {
    key: "requisitos graduacion",
    pregunta: "¿Cuáles son los requisitos para graduarse?",
    respuesta: "Debes completar todos los créditos académicos, realizar el servicio social y aprobar el examen de grado en la Universidad Don Bosco (UDB). Consulta el reglamento académico para más detalles. Para mayor información visite: https://www.udb.edu.sv/udb/pagina/proceso_de_graduacion o https://www.udb.edu.sv/udb/pagina/documentos_graduacion",
    synonyms: ["requisitos de graduación", "graduación", "requisitos para graduarse", "examen de grado", "créditos académicos"]
  },
  {
    key: "cambio carrera",
    pregunta: "¿Cómo puedo cambiar de carrera?",
    respuesta: "Para cambiar de carrera en la Universidad Don Bosco (UDB), debes presentar una solicitud en el Departamento de Registro Académico y cumplir con los requisitos establecidos. Más información para relizar cambio de carrera en: https://www.udbvirtual.edu.sv/assets/files/manuales/cambio_carrera.pdf",
    synonyms: ["cambio de carrera", "cambiar carrera", "solicitud de cambio de carrera", "requisitos para cambiar de carrera"]
  },
  {
    key: "becas",
    pregunta: "¿Qué tipos de becas ofrece la universidad?",
    respuesta: "La Universidad Don Bosco (UDB) ofrece becas académicas, deportivas y culturales. Consulta el Departamento de Becas para más información o puedes encontrar información en la pagina oficial de la Universidad Don Bosco (UDB): https://www.udb.edu.sv/udb/pagina/becas",
    synonyms: ["becas", "tipos de becas", "becas académicas", "becas deportivas", "becas culturales"]
  },
  {
    key: "asesoria academica",
    pregunta: "¿Dónde puedo obtener asesoría académica?",
    respuesta: "Puedes obtener asesoría académica en el Departamento de Asesoría Académica de la Universidad Don Bosco (UDB). Ellos te ayudarán a planificar tu carrera y a resolver dudas académicas. También en: https://www.udb.edu.sv/udb/pagina/servicios_estudiantiles puedes encontrar la información de diversos programas de acompañamiento, tutorias y atención psicopedagógica que la Universidad Don Bosco, ofrece.",
    synonyms: ["asesoría académica", "consejería académica", "orientación académica", "apoyo académico"]
  },
  {
    key: "calificaciones",
    pregunta: "¿Cómo puedo consultar mis calificaciones?",
    respuesta: "Puedes consultar tus calificaciones en el portal estudiantil de la Universidad Don Bosco (UDB) ingresando con tu usuario y contraseña, puedes encontralo en: https://admacad.udb.edu.sv/portalweb/",
    synonyms: ["calificaciones", "consultar calificaciones", "ver notas", "mis calificaciones", "notas académicas"]
  },

  // Apoyo estudiantil
  {
    key: "apoyo emocional",
    pregunta: "¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales?",
    respuesta: "Puedes comunicarte al Departamento de Asistencia Psicopedagógica de la Universidad Don Bosco (UDB) al Tel. 2251-8200, para mayor información, visita: https://www.udb.edu.sv/udb/pagina/asistencia_psicopedagogica",
    synonyms: ["estrés", "estresado", "estresada", "problemas emocionales", "ayuda emocional", "apoyo psicológico", "psicólogo", "ansiedad", "depresión", "apoyo emocional", "ayuda psicológica", "emociones", "salud mental"]
  },
  {
    key: "discapacidades",
    pregunta: "¿Cuáles son los recursos disponibles para estudiantes con discapacidades?",
    respuesta: "La Universidad Don Bosco (UDB) se destaca por su compromiso con la inclusión, ofreciendo a sus estudiantes adaptaciones físicas, apoyo académico personalizado y un equipo de orientación especializado. Además, la UDB firmó un convenio de cooperación interinstitucional con la Fundación Red de Sobrevivientes y Personas con Discapacidad de El Salvador, con el objetivo de promover la inclusión laboral para personas con discapacidad mediante la educación formal y profesional. Para obtener más detalles sobre este acuerdo, puede leer la noticia completa en el siguiente enlace: https://www.udb.edu.sv/udb/noticia/udb_y_fundacion_red_de_sobrevivientes_y_personas_con_discapacidad_firman_convenio_interinstitucional",
    synonyms: ["discapacidad", "adaptaciones", "accesibilidad", "estudiantes con discapacidades", "inclusión", "apoyo a discapacitados", "ayuda a discapacitados"]
  },
  {
    key: "tutoria",
    pregunta: "¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mi rendimiento académico?",
    respuesta: "Para consultar quién es tu tutor asignado, ingresa al Portal Web de la Universidad Don Bosco (UDB) con tu usuario y contraseña. También puedes preguntar en tu Escuela respectiva. Puedes encontrar más información en el siguiente enlace: https://www.udb.edu.sv/udb/pagina/tutoria_estudiantil",
    synonyms: ["tutor", "asesoramiento académico", "tutoría académica", "ayuda académica", "apoyo académico", "consejería académica"]
  },
  {
    key: "becas",
    pregunta: "¿Cómo puedo solicitar una beca?",
    respuesta: "Puedes solicitar una beca a través del Departamento de Becas de la Universidad Don Bosco (UDB). Visita su oficina o consulta su página web para más información: https://www.udb.edu.sv/udb/pagina/becas",
    synonyms: ["beca", "ayuda financiera", "apoyo económico", "solicitar beca", "becas universitarias"]
  },
  {
    key: "actividades extracurriculares",
    pregunta: "¿Qué actividades extracurriculares están disponibles?",
    respuesta: "La Universidad Don Bosco (UDB) ofrece a sus estudiantes una amplia gama de actividades extracurriculares, que incluyen clubes deportivos, culturales y académicos, diseñados para complementar la formación integral y fomentar el desarrollo personal y social. Puedes consultar el calendario de actividades y obtener más información a través de la pagina oficial de la UDB, en el siguiente enlace: https://www.udb.edu.sv/udb/pagina/servicios_estudiantiles",
    synonyms: ["actividades extracurriculares", "clubes", "deportes", "cultura", "actividades universitarias"]
  },
  {
    key: "biblioteca",
    pregunta: "¿Cuáles son los horarios de la biblioteca?",
    respuesta: "La biblioteca de la Universidad Don Bosco (UDB) está disponible para la comunidad universitaria con el siguiente horario de atención: Lunes a viernes: 8:00 AM a 8:00 PM, Sábados: 9:00 AM a 1:00 PM; Además, también puedes acceder a la biblioteca de la UDB en línea a través del siguiente enlace: https://biblio.udb.edu.sv/biblioteca/",
    synonyms: ["biblioteca", "horarios de biblioteca", "libros", "estudio", "recursos bibliográficos"]
  },
  {
    key: "cursos en línea",
    pregunta: "¿La universidad ofrece cursos en línea?",
    respuesta: "La Universidad Don Bosco ofrece una amplia variedad de cursos en línea y programas de capacitación continua. Puedes inscribirte directamente a través del portal estudiantil, y para obtener información detallada sobre los cursos, la programación, los servicios que ofrecen a empresas y los contactos de la directora, puedes visitar la página del Departamento de Capacitación Continua en el siguiente enlace: https://www.udb.edu.sv/udb/pagina/servicios_a_empresas_departamento_de_capacitacion_continua",
    synonyms: ["cursos en línea", "educación a distancia", "clases virtuales", "aprendizaje en línea"]
  },
  {
    key: "servicio social",
    pregunta: "¿Cómo puedo cumplir con mi servicio social?",
    respuesta: "Para cumplir con tu servicio social en la Universidad Don Bosco (UDB), debes registrarte en el Departamento de Servicio Social y elegir un proyecto aprobado. Puedes encontrar los detalles para realizar la inscripción en el siguiente enlace: https://www.udbvirtual.edu.sv/assets/guia_virtual/docs/pasos_para_realizar_el_servicio_social_estudiantil.pdf",
    synonyms: ["servicio social", "voluntariado", "proyectos sociales", "requisitos de servicio social"]
  },
  {
    key: "intercambios estudiantiles",
    pregunta: "¿La universidad ofrece programas de intercambio estudiantil?",
    respuesta: "La Universidad Don Bosco (UDB) mantiene convenios con diversas instituciones internacionales, facilitando programas de intercambio estudiantil que enriquecen la formación académica y cultural de sus estudiantes. Para obtener información detallada sobre estos programas y las oportunidades disponibles, se recomienda consultar la sección de movilidad académica en el sitio web oficial de la UDB: https://www.udb.edu.sv/udb/pagina/movilidad",
    synonyms: ["intercambio estudiantil", "programas de intercambio", "estudios en el extranjero", "movilidad estudiantil"]
  },
  {
    key: "salud",
    pregunta: "¿Qué servicios de salud están disponibles en la universidad?",
    respuesta: "La Universidad Don Bosco (UDB) cuenta con un Centro de Cuidados y Procedimientos de Enfermería que ofrece servicios médicos básicos y atención de emergencias a su comunidad educativa. Para más información, puedes visitar: https://www.udb.edu.sv/udb/pagina/enfermeria",
    synonyms: ["servicios de salud", "centro de salud", "atención médica", "emergencias médicas"]
  },
  {
    key: "alimentación",
    pregunta: "¿Dónde puedo encontrar opciones de alimentación en el campus?",
    respuesta: "El campus de la Universidad Don Bosco (UDB) cuenta con varias cafeterías y comedores que ofrecen una variedad de opciones de alimentación.",
    synonyms: ["alimentación", "comida en el campus", "cafeterías", "comedores", "opciones de comida"]
  },
  {
    key: "transporte",
    pregunta: "¿La universidad ofrece servicios de transporte?",
    respuesta: "La Universidad Don Bosco (UDB) ofrece un servicio de transporte para facilitar el traslado de estudiantes y personal desde diversas localidades hacia sus campus. Este servicio abarca múltiples rutas, incluyendo Apopa, Cojutepeque, Ilobasco, Metrocentro, Quezaltepeque, Santa Ana, Santo Domingo, Santa Lucía, San Martín, San Rafael Cedros, Santa Tecla, Santa Tecla-Antiguo Cuscatlán, Zacamil y Zacamil-Carretera de Oro. Cada ruta cuenta con horarios específicos de salida y retorno, adaptados a las necesidades de la comunidad universitaria. Para obtener información detallada sobre las rutas, horarios y puntos de referencia de cada recorrido, puedes consultar el documento oficial de transporte de la UDB en: https://www.udb.edu.sv/udb_files/recursos_archivos/pdf/transporte-udb-2025.pdf",
    synonyms: ["transporte", "servicios de transporte", "autobuses universitarios", "rutas de transporte"]
  },

  // Servicios de campus
  {
    key: "eventos",
    pregunta: "¿Hay algún evento importante en el campus esta semana?",
    respuesta: "Sí, en esta semana que viene habrá Misa de miércoles de Ceniza en el campus de la Universidad Don Bosco (UDB). Puedes encontrar una agenda de los eventos programados en la Universidad Don Bosco, en el siguiente enlace: https://www.udb.edu.sv/udb/eventos",
    synonyms: ["eventos", "actividades", "qué hay esta semana", "qué eventos hay", "actividades en el campus", "eventos importantes", "qué pasa esta semana", "eventos actuales", "calendario de eventos"]
  },
  {
    key: "biblioteca",
    pregunta: "¿Dónde está la biblioteca y cuáles son sus horarios?",
    respuesta: "La biblioteca de la Universidad Don Bosco (UDB) se encuentra al noroeste del campus. Horarios: lunes a viernes de 7:00 am a 5:00 pm y sábados de 8:00 am a 12:00 pm. Para más información, puedes visitar: https://biblio.udb.edu.sv/biblioteca/",
    synonyms: ["biblioteca", "dónde está la biblioteca", "horarios biblioteca", "horario biblioteca", "cómo llegar a la biblioteca", "biblioteca UDB", "servicios biblioteca", "libros campus", "consulta biblioteca"]
  },
  {
    key: "servicios estudiantiles",
    pregunta: "¿Cómo puedo contactar al departamento de servicios estudiantiles?",
    respuesta: "Puedes visitar al departamento de servicios estudiantiles de la Universidad Don Bosco (UDB) en el edificio DAC, planta baja o puedes conocer de ellos a través de el sitio web oficial de la Universidad Don Bosco en: https://www.udb.edu.sv/udb/pagina/servicios_estudiantiles",
    synonyms: ["servicios estudiantiles", "contactar servicios estudiantiles", "departamento estudiantil", "atención estudiantes", "soporte estudiantes", "ayuda estudiantes", "correo servicios estudiantiles", "teléfono servicios estudiantiles", "información servicios estudiantiles"]
  },
  {
    key: "centro de salud",
    pregunta: "¿Qué servicios ofrece el centro de salud del campus?",
    respuesta: "El centro de salud de la Universidad Don Bosco (UDB) ofrece consultas médicas, atención de emergencia y campañas de vacunación. Conoce acerca de ello en: https://www.udb.edu.sv/udb/pagina/enfermeria",
    synonyms: ["centro de salud", "servicios médicos", "atención médica", "emergencias", "vacunación"]
  },
  {
    key: "cafeterias",
    pregunta: "¿Cuántas cafeterías hay en el campus y dónde están ubicadas?",
    respuesta: "El campus de la Universidad Don Bosco (UDB) cuenta con dos cafeterías: una ubicada al este del campus y otras 2 al suroeste, cerca de aeronáutica.",
    synonyms: ["cafeterías", "comida en el campus", "dónde comer", "opciones de comida", "cafeterías universitarias"]
  },
  {
    key: "laboratorios",
    pregunta: "¿Qué laboratorios están disponibles para los estudiantes?",
    respuesta: "La Universidad Don Bosco (UDB) cuenta con laboratorios de informática, química, física y biología. Consulta los horarios y disponibilidad en el portal estudiantil.",
    synonyms: ["laboratorios", "laboratorios disponibles", "laboratorios universitarios", "laboratorios de informática", "laboratorios de ciencias"]
  },
  {
    key: "centro de copiado",
    pregunta: "¿Dónde puedo encontrar el centro de copiado en el campus?",
    respuesta: "La Universidad Don Bosco (UDB) dispone de un Centro de Reproducción que ofrece una amplia gama de servicios de artes gráficas, incluyendo impresiones digitales (hasta 13x40”), fotocopias, encuadernados, laminados, escaneados, carnés y libros. Este centro se encuentra en el Edificio B, nivel 1, y su horario de atención es de lunes a viernes de 7:00 a.m. a 7:00 p.m., y los sábados de 7:00 a.m. a 3:00 p.m. Para consultas específicas, puedes contactar al Técnico Operador del Centro de Reproducción, Melvin Alfonso Flores Rodríguez, al correo electrónico melvin.flores@udb.edu.sv o al teléfono 2251-8200, extensión 1761.",
    synonyms: ["centro de copiado", "impresión", "fotocopiado", "encuadernación", "servicios de copiado", "centro de reproducción"]
  },
  {
    key: "orientacion vocacional",
    pregunta: "¿Dónde puedo obtener orientación vocacional?",
    respuesta: "Puedes obtener orientación vocacional en el Departamento de Orientación Vocacional de la Universidad Don Bosco (UDB). Ellos te ayudarán a elegir la carrera adecuada para ti. Si deseas conocer un poco más y obtener información de contacto, visita el siguiente enlace: https://www.udb.edu.sv/udb/pagina/poc_programa_de_orientacion_de_carrera",
    synonyms: ["orientación vocacional", "elección de carrera", "consejería vocacional", "asesoramiento vocacional"]
  },

  // Vida estudiantil
  {
    key: "clubes",
    pregunta: "¿Qué clubes o actividades extracurriculares están disponibles en el campus?",
    respuesta: "La Universidad Don Bosco (UDB) tiene clubes de robótica, teatro, deportes, debate y muchos más. Revisa la sección de servicios estudiantiles en el portal i visita https://www.udb.edu.sv/udb/pagina/servicios_estudiantiles en donde encontraras información de diferentes clubes.",
    synonyms: ["clubes", "actividades extracurriculares", "clubes disponibles", "grupos estudiantiles", "clubes del campus", "actividades para estudiantes", "grupos universitarios", "asociaciones estudiantiles", "clubes UDB", "club"]
  },
  {
    key: "actividades",
    pregunta: "¿Hay alguna actividad interesante planeada para el fin de semana?",
    respuesta: "Esta semana no está agendada ninguna actividad, pero puedes revisar la cartelera de eventos en el portal estudiantil de la Universidad Don Bosco (UDB) o en su sitio web: https://www.udb.edu.sv/udb/eventos",
    synonyms: ["actividades", "eventos fin de semana", "qué hay el fin de semana", "actividades para el finde", "qué hacer en el campus", "cartelera de eventos", "planes para el fin de semana", "eventos programados"]
  },
  {
    key: "alimentacion",
    pregunta: "¿Cuáles son las opciones de alimentación disponibles en el campus?",
    respuesta: "El campus de la Universidad Don Bosco (UDB) cuenta con dos cafeterías, una ubicada al este del campus, y la otra, al suroeste, cerca de aeronáutica.",
    synonyms: ["alimentación", "cafeterías", "comida campus", "dónde comer", "opciones de comida", "comida en la universidad", "qué puedo comer en el campus", "dónde almorzar", "comida UDB"]
  },
  {
    key: "deportes",
    pregunta: "¿Qué instalaciones deportivas están disponibles en el campus?",
    respuesta: "El campus de la Universidad Don Bosco (UDB) cuenta con canchas de fútbol, baloncesto, voleibol y un gimnasio. Puedes inscribirte en las actividades deportivas a través del portal estudiantil o conocer de dichas actividades en el siguiente enlace: https://www.udb.edu.sv/udb/pagina/servicios_estudiantiles_deportes",
    synonyms: ["deportes", "instalaciones deportivas", "canchas", "gimnasio", "actividades deportivas", "deportes en el campus"]
  },
  {
    key: "voluntariado",
    pregunta: "¿Cómo puedo participar en actividades de voluntariado?",
    respuesta: "Puedes obtener orientación vocacional en el Departamento de Orientación Vocacional de la Universidad Don Bosco (UDB). Ellos te ayudarán a elegir la carrera adecuada para ti. Para conocer más y obtener información de contacto, visita el siguiente enlace: https://www.udb.edu.sv/udb/noticia/voluntarios_pocudb_jovenes_con_iniciativa_y_compromiso_educativo",
    synonyms: ["voluntariado", "actividades de voluntariado", "participar en voluntariado", "voluntariado universitario"]
  },
  {
    key: "eventos culturales",
    pregunta: "¿Qué eventos culturales se realizan en la universidad?",
    respuesta: "La Universidad Don Bosco (UDB) organiza diversos eventos culturales, como conciertos, obras de teatro y exposiciones de arte. Para conocer más sobre estas actividades y obtener información de contacto, visita el siguiente enlace: https://www.udb.edu.sv/udb/pagina/arte_cultura",
    synonyms: ["eventos culturales", "conciertos", "teatro", "exposiciones de arte", "cultura en el campus"]
  },
  {
    key: "asesoria academica",
    pregunta: "¿Dónde puedo obtener asesoría académica?",
    respuesta: "Puedes obtener asesoría académica en el Departamento de Asesoría Académica de la Universidad Don Bosco (UDB). Ellos te ayudarán a planificar tu carrera y a resolver dudas académicas., puedes encontrar sus contactos en el siguiente enlace: https://www.udb.edu.sv/udb/directorio/area/39",
    synonyms: ["asesoría académica", "consejería académica", "orientación académica", "apoyo académico"]
  },
  {
    key: "seguridad",
    pregunta: "¿Qué medidas de seguridad existen en el campus?",
    respuesta: "El campus de la Universidad Don Bosco (UDB) cuenta con vigilancia las 24 horas, cámaras de seguridad y un sistema de identificación para el acceso a las instalaciones.",
    synonyms: ["seguridad", "medidas de seguridad", "vigilancia", "seguridad en el campus"]
  },

  // Desarrollo profesional
  {
    key: "pasantias",
    pregunta: "¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera?",
    respuesta: "Consulta al Programa de Acompañamiento e inserción laboral INCORPORATE de la Universidad Don Bosco (UDB). Puedes contactarlos por el Tel. 2251-8200 o visitar en: https://www.udb.edu.sv/udb/intermediacion-laboral/oportunidadeslaborales para conocer oportunidades laborales y pasantias.",
    synonyms: ["pasantías", "prácticas", "prácticas profesionales", "inserción laboral", "oportunidades laborales", "pasantía", "práctica", "empleo estudiantil", "trabajo para estudiantes"]
  },
  {
    key: "curriculum",
    pregunta: "¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae?",
    respuesta: "El Programa de Orientación De Carrera POC UDB ofrece talleres y asesoría personalizada para elaborar un currículum profesional, visita en: https://www.udb.edu.sv/udb/pagina/poc_programa_de_orientacion_de_carrera para conocer más de este programa.",
    synonyms: ["currículum", "cv", "hoja de vida", "cómo hacer un currículum", "elaborar cv", "crear currículum", "currículum vitae", "documento laboral", "documento de experiencia"]
  },
  {
    key: "entrevistas",
    pregunta: "¿Hay talleres disponibles para prepararme para entrevistas de trabajo?",
    respuesta: "Sí, consulta al Programa de Orientación de Carrera POC UDB para conocer los talleres y charlas disponibles (Tel. 2251-8200). O puedes obtener más información en el siguiente enlace: https://www.udb.edu.sv/udb/pagina/poc_programa_de_orientacion_de_carrera",
    synonyms: ["entrevista de trabajo", "entrevistas laborales", "preparación entrevistas", "taller entrevistas", "consejos entrevista", "práctica entrevista", "entrevista laboral", "mejorar entrevista"]
  },
  {
    key: "networking",
    pregunta: "¿Cómo puedo mejorar mis habilidades de networking?",
    respuesta: "La Universidad Don Bosco (UDB) ofrece el Diplomado de Especialización en Redes Informáticas (CCNA), diseñado para dominar la arquitectura, estructura y funciones de redes computacionales e Internet. Este programa abarca desde el diseño de Redes de Área Local hasta la implementación de Redes Privadas Virtuales (VPN) con IPsec. La modalidad es virtual (teórico-práctico) con una duración de 120 horas distribuidas en 6 módulos de 20 horas cada uno. Para más información, puedes contactar al Director del Diplomado, Ing. Dennis Cervantes, al correo electrónico diplomados@udb.edu.sv o al teléfono (503) 2527-2305 o puedes encontrar más acerca de ello en: https://www.udb.edu.sv/udb/carreras/carrera/diplomado_de_especializacion_en_redes_informaticas_ccna",
    synonyms: ["networking", "redes profesionales", "contactos laborales", "eventos de networking", "ferias de empleo", "conexiones profesionales"]
  },
  {
    key: "mentoria",
    pregunta: "¿La universidad ofrece programas de mentoría?",
    respuesta: "La Universidad Don Bosco (UDB) ofrece diversos programas de mentoría para apoyar el desarrollo académico y profesional de sus estudiantes y egresados. Para obtener más información sobre las oportunidades de mentoría en la UDB, se recomienda contactar a la Vicerrectoría Académica, que coordina programas de mentoría y desarrollo profesional. Puedes comunicarte al teléfono 2251-8200 ext. 1708 o al correo electrónico vicerrectoriaacademica@udb.edu.sv.",
    synonyms: ["mentoría", "mentores", "programas de mentoría", "guía profesional", "asesoramiento profesional"]
  },
  {
    key: "desarrollo habilidades",
    pregunta: "¿Qué recursos están disponibles para desarrollar habilidades blandas?",
    respuesta: "El Programa de Orientación de Carrera POC UDB ofrece talleres y cursos para desarrollar habilidades blandas como comunicación, liderazgo y trabajo en equipo, conoce más de este programa en el siguiente enlace: https://www.udb.edu.sv/udb/pagina/poc_programa_de_orientacion_de_carrera",
    synonyms: ["habilidades blandas", "desarrollo personal", "comunicación", "liderazgo", "trabajo en equipo", "habilidades interpersonales"]
  },
  {
    key: "ferias de empleo",
    pregunta: "¿Cuándo se realizan las ferias de empleo en la universidad?",
    respuesta: "La Universidad Don Bosco (UDB) organiza dos ferias de empleo al año, generalmente en los meses de marzo y octubre. Estas ferias están dirigidas a estudiantes activos, egresados y graduados, con el objetivo de facilitar su inserción en el mercado laboral. Por ejemplo, en octubre de 2021, se llevó a cabo la doceava edición de la Feria de Trabajo de la UDB, realizada de manera virtual y con la participación de 50 instituciones empleadoras, incluyendo 16 multinacionales, lee más de esta noticia en: https://www.udb.edu.sv/udb/noticia/feria-de-trabajo-virtual-udb-se-realiza-con-exito",
    synonyms: ["ferias de empleo", "eventos de empleo", "oportunidades laborales", "reclutamiento", "empleo universitario"]
  },
  {
    key: "asesoria profesional",
    pregunta: "¿Dónde puedo obtener asesoría profesional personalizada?",
    respuesta: "Puedes obtener asesoría profesional personalizada en el Programa de Orientación de Carrera POC UDB. Ellos te ayudarán a planificar tu carrera y a prepararte para el mercado laboral, conoce acerca del POC en el siguiente enlace: https://www.udb.edu.sv/udb_r/pagina/programa_orientacion_carrera",
    synonyms: ["asesoría profesional", "consejería profesional", "orientación de carrera", "planificación de carrera", "asesoramiento laboral"]
  },
  {
    key: "emprendimiento",
    pregunta: "¿La universidad ofrece apoyo para estudiantes emprendedores?",
    respuesta: "Sí, la universidad cuenta con un Centro de Emprendimiento que ofrece recursos y asesoría para estudiantes que desean iniciar su propio negocio, puedes conocer acerca de Dirección de Emprendimiento e Innovación en el siguiente enlace: https://www.udb.edu.sv/udb_r/pagina/direccion_de_emprendimiento_e_innovacion",
    synonyms: ["emprendimiento", "emprendedores", "iniciar negocio", "apoyo emprendedores", "centro de emprendimiento"]
  },
  {
    key: "certificaciones",
    pregunta: "¿Puedo obtener certificaciones profesionales a través de la universidad?",
    respuesta: "Sí, la universidad ofrece programas de certificación en diversas áreas profesionales. Consulta el catálogo de cursos para más información: https://www.udb.edu.sv/udb/pagina/programa_formacion_continua",
    synonyms: ["certificaciones", "certificaciones profesionales", "programas de certificación", "cursos de certificación"]
  },
  {
    key: "bolsa de trabajo",
    pregunta: "¿La universidad tiene una bolsa de trabajo para estudiantes y egresados?",
    respuesta: "Sí, la universidad cuenta con una bolsa de trabajo donde puedes encontrar ofertas laborales exclusivas para estudiantes y egresados, visita https://www.udb.edu.sv/udb/intermediacion-laboral/oportunidadeslaborales para conocer de estas oportunidades laborales.",
    synonyms: ["bolsa de trabajo", "ofertas laborales", "empleo para estudiantes", "trabajo para egresados", "oportunidades de empleo"]
  },
  {
    key: "habilidades tecnicas",
    pregunta: "¿Dónde puedo mejorar mis habilidades técnicas?",
    respuesta: "La universidad ofrece cursos y talleres para mejorar tus habilidades técnicas en diversas áreas. Consulta el catálogo de cursos en el portal estudiantil o en el sitio oficial de la UDB: https://www.udb.edu.sv/udb/pagina/programa_formacion_continua o conoce acerca de la UDB Virtual que ofrece variedad de ofertas academicas: https://www.udbvirtual.edu.sv/",
    synonyms: ["habilidades técnicas", "cursos técnicos", "talleres técnicos", "mejorar habilidades técnicas", "capacitación técnica"]
  },
]

export default data;