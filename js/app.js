$('body').terminal({
   
    help: function () {
        this.echo('[[;red;]"help" [[;grey;] - [[;yellow;]Muestra este Menú[[;grey;]\n'
        + '[[;red;]"whoami" [[;grey;] - [[;yellow;]¿Quién soy? Aquí te explico un poco de mi vida[[;grey;]\n'
        + '[[;red;]"projects" [[;grey;] - [[;yellow;]Mostrar todos mis proyectos[[;grey;]\n'
        + '[[;red;]"contact" [[;grey;] - [[;yellow;]Por si quieres charlar un rato[[;grey;]\n'
        + '[[;red;]"cv" [[;grey;] - [[;yellow;]Mostrar mi curriculum, para que sepas en que estoy formado[[;grey;]\n'
        + '[[;red;]"github" [[;grey;] - [[;yellow;]Por si quieres ver un poco de mi codigo 😉[[;grey;]\n'
        + '[[;red;]"rrss" [[;grey;] - [[;yellow;]Mis redes sociales[[;grey;]\n'
       
        
        );
    },
    whoami: function () {
        this.echo('¡Hola! Yo soy Andrés Pantoja, encantado de conocerte.\n'+
        ' Nací en 2002 en Palma de Mallorca, desde bastante pequeño me ha apasionado el mundo de la informática, sobre todo la parte de sistemas y ciberseguridad. Mis hobbies son la practica del Airsoft, la mécanica y viajar.\n'+
        '<img src="./img/yo.png"/>^------- Este soy yo por si no te habias dado cuenta -_-',{raw: true}
        );
    },
    projects: function () {
        this.echo('[[;white;]Mis Proyectos [[;grey;]\n'
        + '[[;red;]🧾 Barcodes [[;grey;] - [[;yellow;]Generador y lector de codigos de barras hecho en Java nativo[[;grey;]\n'
        + '[[;red;]🔺 Figuras Geometricas [[;grey;] - [[;yellow;]Generador de figuras para guardar, mostrarlas utilizando API Servlets Java[[;grey;]\n'
        + '[[;red;]🎯 Text Patterns [[;grey;] - [[;yellow;]Motor Regex hecho en java.[[;grey;]\n'
        + '[[;red;]🎮 Maze Game [[;grey;] - [[;yellow;]Juego de completar laberintos utilizando Java API Servlets.[[;grey;]\n'
        );         
    },
    contact: function () {
        this.echo('[[;white;]Veo que quieres ponerte en contacto conmigo,\naqui tienes mi correo electronico! [[;grey;]\n'
        + '[[;lightblue;]apantojaa2002@gmail.com[[;grey;]\n'
        
        );         
    },
    cv: function () {
        this.echo('[[;white;]Técnico Superior en desarrollo de aplicaciones web\n'
        + 'Actualmente estudiante de segundo año en desarrollo de aplicaciones web en Es Liceu[[;grey;]\n'
        + '[[;lightblue;]Mis especialidades[[;grey;]\n'
        + '[[;white;]   # Sistemas[[;grey;]\n'
        + '[[;white;]   # Telecomunicaciones[[;grey;]\n'
        + '[[;white;]   # Bases de datos MySQL[[;grey;]\n'
        + '[[;white;]   # Diseño Web[[;grey;]\n'
        + '[[;white;]   # Java / JavaScript[[;grey;]\n'
        + '[[;white;]   # Despliegue de aplicaciones[[;grey;]\n'
        + '[[;lightblue;]Intereses[[;grey;]\n'
        + '[[;white;]   # Ciberseguridad[[;grey;]\n'
        + '[[;white;]   # Docker[[;grey;]\n'
        + '[[;white;]   # Nuevas tecnologias[[;grey;]\n'
        
        
        + '[[;lightblue;]Aptitudes[[;grey;]\n'
        + '[[;white;]   # Trabajo en equipo[[;grey;]\n'
        + '[[;white;]   # Capacidad de liderazgo[[;grey;]\n'
        + '[[;white;]   # Pensamiento crítico[[;grey;]\n'
        + '[[;white;]   # Resolución de problemas[[;grey;]\n'
        + '[[;white;]   # Aprendizaje continuo[[;grey;]\n'
        + '[[;lightblue;]Estudios[[;grey;]\n'
        + '[[;pink;] Técnico Superior en Desarrollo de aplicaciones Web[[;grey;]\n'
        + '[[;lightgreen;]   (Septiembre 2021 - Presente | CC Es Liceu)[[;grey;]\n'
        + '[[;pink;] Técnico en sistemas Microinformáticos y Redes[[;grey;]\n'
        + '[[;lightgreen;]   (Septiembre 2019 - Junio 2021  | CC Es Liceu)[[;grey;]\n'
        + '[[;pink;] Titulo profesional Básico en informática y Comunicaciones[[;grey;]\n'
        + '[[;lightgreen;]   (Septiembre 2017 - Junio 2019  | CC Es Liceu)[[;grey;]\n'
        + '[[;pink;] Educación Secundaria Obligatoria[[;grey;]\n'
        + '[[;lightgreen;]   (Septiembre 2017 - Junio 2019  | CC Es Liceu)[[;grey;]\n'


        + '[[;lightblue;]Experiencia Laboral[[;grey;]\n'
        + '[[;pink;]   Tecnico IT - (Erasmus+)[[;grey;]\n'
        + '[[;lightgreen;]   (Abril 2021 - Julio 2021)[[;grey;]\n'
        + '[[;white;]       Ogrody Edukacyjne, Wroclaw, Polonia[[;grey;]\n'
        + '[[;white;]           # Administrador de sistemas informaticos en red[[;grey;]\n'
        + '[[;white;]           # Administracion de servidores Unix/Windows[[;grey;]\n'
        + '[[;white;]           # Tecnico de taller[[;grey;]\n'
        + '[[;white;]           # Reparación Hardware informatico[[;grey;]\n'
        + '[[;pink;]   Tecnico IT - (Erasmus)[[;grey;]\n'
        + '[[;lightgreen;]   (Mayo 2019 - Mayo 2019)[[;grey;]\n'
        + '[[;white;]      Commune di Lucca, Lucca, Italia[[;grey;]\n'
        + '[[;white;]           # Analista de actualizaciones para los equipos informaticos[[;grey;]\n'
        + '[[;white;]           # Mantenimiento de infraestructuras de red[[;grey;]\n'
        + '[[;white;]           # Tecnico de taller[[;grey;]\n'
        + '[[;white;]           # Instalacion de equipos y reinstalacion de sistemas operativos propietarios y libres[[;grey;]\n'
        + '[[;pink;]   Tecnico IT - (Practicas)[[;grey;]\n'
        + '[[;lightgreen;]   (Mayo 2019 - Mayo 2019)[[;grey;]\n'
        + '[[;white;]     Palma de Mallorca, Islas Baleares, España[[;grey;]\n'
        + '[[;white;]           # Mantenimiento de equipos informaticos [[;grey;]\n'
        + '[[;white;]           # Intalación y configuración de redes[[;grey;]\n'
        + '[[;white;]           # Responsable de las copias de seguridad de la empresa[[;grey;]\n'
        + '[[;white;]           # Instalacion y mantenimiento de servidores[[;grey;]\n'
        + '[[;lightblue;]Permisos y carné[[;grey;]\n'
        + '[[;white;]   # Permiso de conducir B[[;grey;]\n'
        + '[[;white;]   # Vehiculo propio[[;grey;]\n'
        
        );
                 
    },
    github: function () {
        
        this.echo('[[;white;]Hecha un vistazo a mi codigo!\n'+
        '[[;blue;]https://github.com/mrandrewx[[;grey;]\n'
        
        ); 
},
rrss: function () {
        this.echo('[[;white;]Hecha un vistazo a mis redes sociales!!\n'+
    
        '[[;red;]Linkedin: [[;blue;]https://www.linkedin.com/in/andrés-p-b3b9441a2/[[;grey;]\n'

        
        
        ); 
}
    
}, {
    greetings: welcome.innerHTML,
    prompt: '[[;lightgreen;]root@mrandrew.xyz[[;white;]:[[;blue;]~[[;white;]$[[;white;] '
});
