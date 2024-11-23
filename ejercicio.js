function pantallaBienvenida() {
    alert(
        "Bienvenido GreenAlert: Descubre, actúa y protege el planeta con GreenAlert. \n\n" +
        "Nuestro propósito es ayudarte a comprender las causas y efectos del cambio climático " +
        "y a descubrir acciones prácticas que puedes tomar para reducir tu impacto ambiental. " +
        "¡Da el primer paso hacia un planeta más verde con tu guía hacia un futuro sostenible, GreenAlert. !"
    );
}

function mostrarMenu() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt("Selecciona una opción:\n" +
            "1. Introducción al Cambio Climático\n" +
            "2. Medir tu Huella de Carbono\n" +
            "3. Consejos Prácticos para Reducir tu Impacto\n" +
            "4. Salir\n\n" +
            "Escribe el número de la opción que deseas elegir."
        );

        switch (opcion) {
            case "1":
                mostrarIntroduccion();
                break;
            case "2":
                medirHuellaCarbono();
                break;
            case "3":
                mostrarConsejos(null);
                break;
            case "4":
                alert("Gracias por usar GreenAlert. ¡Hasta la próxima!");
                continuar = false;
                break;
            default:
                alert("Por favor, selecciona una opción válida (1, 2, 3 o 4).");
        }
    }
}

function mostrarIntroduccion() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt(
            "Introducción al Cambio Climático:\n\n" +
            "1. ¿Qué es el Cambio Climático?\n" +
            "2. Causas Principales del Cambio Climático\n" +
            "3. Consecuencias del Cambio Climático\n" +
            "4. Volver al Menú Principal\n\n" +
            "Escribe el número de la sección que deseas explorar."
        );

        switch (opcion) {
            case "1":
                alert(
                    "¿Qué es el Cambio Climático?\n\n" +
                    "El cambio climático se refiere a alteraciones significativas y duraderas " +
                    "en el clima global. Está principalmente relacionado con el aumento de " +
                    "la temperatura promedio de la Tierra debido a actividades humanas."
                );
                break;
            case "2":
                alert(
                    "Causas Principales del Cambio Climático:\n\n" +
                    "1. Quema de Combustibles Fósiles: Producen gases de efecto invernadero como el CO₂.\n" +
                    "2. Deforestación: Reduce la capacidad de los bosques para absorber CO₂.\n" +
                    "3. Agricultura Intensiva: Genera metano y óxido nitroso, potentes gases de efecto invernadero.\n" +
                    "4. Consumo Energético: Uso excesivo de electricidad proveniente de fuentes no renovables."
                );
                break;
            case "3":
                alert(
                    "Consecuencias del Cambio Climático:\n\n" +
                    "1. Calentamiento Global: Aumento de la temperatura promedio de la Tierra.\n" +
                    "2. Fenómenos Climáticos Extremos: Huracanes, sequías, inundaciones más frecuentes y severas.\n" +
                    "3. Pérdida de Biodiversidad: Hábitats destruidos y especies en peligro de extinción.\n" +
                    "4. Impacto en la Salud Humana: Enfermedades relacionadas con el calor, mala calidad del aire, " +
                    "y acceso reducido a agua potable."
                );
                break;
            case "4":
                continuar = false;
                mostrarMenu();
                break;
            default:
                alert("Por favor, selecciona una opción válida (1, 2, 3 o 4).");
        }
    }
}

function medirHuellaCarbono() {
    alert(
        "Calculadora de Huella de Carbono:\n\n" +
        "Responde a estas preguntas sobre tus hábitos diarios para estimar tu impacto ambiental."
    );

    let huella = 0;
    let respuestas = {};

    function preguntar(textoEnviado, opcionesValidas) {
        let respuesta;
        do {
            respuesta = prompt(textoEnviado).toLowerCase();
            if (!opcionesValidas.includes(respuesta)) {
                alert("Por favor, ingresa una respuesta válida: " + opcionesValidas.join(", "));
            }
        } while (!opcionesValidas.includes(respuesta));
        return respuesta;
    }

    const transporte = preguntar(
        "1. ¿Con qué frecuencia usas transporte público?\n" +
        "a) Diario\n" +
        "b) Semanal\n" +
        "c) Nunca",
        ["a", "b", "c"]
    );

    if (transporte === "a") {
        huella += 1;
        respuestas.transporte = "a";
    } else if (transporte === "b") {
        huella += 3;
        respuestas.transporte = "b";
    } else if (transporte === "c") {
        huella += 5;
        respuestas.transporte = "c";
    }

    const carro = preguntar(
        "2. ¿Usas tu propio vehículo regularmente? (si / no)",
        ["si", "no"]
    );
    respuestas.carro = carro === "si";
    if (carro === "si") huella += 5;

    const carne = preguntar(
        "3. ¿Consumes carne roja más de 3 veces por semana? (si / no)",
        ["si", "no"]
    );
    respuestas.carne = carne === "si";
    if (carne === "si") huella += 4;

    const energia = preguntar(
        "4. ¿Mantienes encendidos aparatos electrónicos cuando no los usas? (si / no)",
        ["si", "no"]
    );
    respuestas.energia = energia === "si";
    if (energia === "si") huella += 2;

    const reciclaje = preguntar(
        "5. ¿Reciclas de manera regular? (si / no)",
        ["si", "no"]
    );
    respuestas.reciclaje = reciclaje === "si";
    if (reciclaje === "no") huella += 3;

    const plasticos = preguntar(
        "6. ¿Utilizas productos plásticos de un solo uso? (si / no)",
        ["si", "no"]
    );
    respuestas.plasticos = plasticos === "si";
    if (plasticos === "si") huella += 3;

    const aireAcondicionado = preguntar(
        "7. ¿Usas aire acondicionado con frecuencia? (si / no)",
        ["si", "no"]
    );
    respuestas.aireAcondicionado = aireAcondicionado === "si";
    if (aireAcondicionado === "si") huella += 4;

    const compras = preguntar(
        "8. ¿Realizas compras frecuentes de ropa o productos electrónicos? (si / no)",
        ["si", "no"]
    );
    respuestas.compras = compras === "si";
    if (compras === "si") huella += 3;

    const agua = preguntar(
        "9. ¿Dejas el grifo abierto mientras te cepillas los dientes, te bañas o lavas los platos? (si / no)",
        ["si", "no"]
    );
    respuestas.agua = agua === "si";
    if (agua === "si") huella += 4;

    const local = preguntar(
        "10. ¿Compras alimentos de nuestros campesinos y de temporada regularmente? (si / no)",
        ["si", "no"]
    );
    respuestas.local = local === "si";
    if (local === "no") huella += 3;

    let resultado = "Tu huella de carbono estimada es de " + huella + " toneladas de CO2 al año.\n\n";

    if (huella <= 10) {
        resultado += "¡Felicitaciones! Tus hábitos son relativamente sostenibles.";
    } else if (huella <= 20) {
        resultado += "Tienes un impacto medio, puede mejorar.";
    } else {
        resultado += "Tu impacto es alto. Considera cambiar algunos hábitos para ayudar al planeta.";
    }

    alert(resultado);
    mostrarConsejos(respuestas);
}


function mostrarConsejos(respuestas) {

    let consejos = "Consejos para reducir tu impacto ambiental:\n\n";

    if (respuestas === null) {
        consejos +=
            "No has completado la prueba de huella de carbono.\n" +
            "Te recomendamos comenzar con los siguientes pasos:\n\n" +
            "- Reduce el uso de plástico de un solo uso.\n" +
            "- Opta por transporte público o bicicleta siempre que sea posible.\n" +
            "- Consume productos locales y de temporada.\n" +
            "- Ahorra agua cerrando el grifo cuando no lo necesites.\n" +
            "- Recicla para disminuir la cantidad de residuos en los vertederos.\n\n" +
            "¡Completa la prueba para recibir consejos más específicos!";
    } else {
        if (respuestas.transporte.toLowerCase() === "c") {
            consejos += "- Usar transporte público, bicicleta o caminar en lugar de tu vehículo privado puede reducir significativamente tus emisiones de CO2.\n";
        } else if (respuestas.transporte.toLowerCase() === "b") {
            consejos += "- Considera aumentar el uso de transporte público o compartir viajes para reducir tus emisiones.\n";
        }

        if (respuestas.carro) {
            consejos += "- Optar por vehículos eléctricos o híbridos, o usar transporte público, puede disminuir tu huella de carbono.\n";
        }

        if (respuestas.carne) {
            consejos += "- Reducir el consumo de carne roja a una vez por semana puede disminuir tu huella de carbono en 0.8 toneladas al año.\n";
        }

        if (respuestas.energia) {
            consejos += "- Apagar los dispositivos electrónicos y luces cuando no los uses puede ahorrar energía y reducir tus emisiones.\n";
        }

        if (!respuestas.reciclaje) {
            consejos += "- Implementar un sistema de reciclaje en casa ayuda a reducir la cantidad de desechos en vertederos.\n";
        }

        if (respuestas.plasticos) {
            consejos += "- Reemplaza productos plásticos de un solo uso con alternativas reutilizables como bolsas de tela o botellas de acero inoxidable.\n";
        }

        if (respuestas.aireAcondicionado) {
            consejos += "- Mantener el aire acondicionado a una temperatura moderada o usar ropa adecuada puede reducir tu consumo energético.\n";
        }

        if (respuestas.compras) {
            consejos += "- Reduce las compras impulsivas y opta por productos de mayor calidad que duren más tiempo.\n";
        }

        if (respuestas.agua) {
            consejos += "- Cierra el grifo mientras te cepillas los dientes para ahorrar hasta 8 litros de agua por minuto.\n";
        }

        if (!respuestas.local) {
            consejos += "- Comprar alimentos locales y de temporada reduce las emisiones asociadas con el transporte y el almacenamiento.\n";
        }

    }
    alert(consejos);

}

pantallaBienvenida();
mostrarMenu();