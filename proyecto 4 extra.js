let salir = true;
while (salir) {
     // Obtenemos datos iniciales en el cual verificamos si el cliente es mayor o menor de edad 
    let age = Number(prompt("Ingresa tu año de nacimiento"));
    let age_client = 2026 - age;

    // declaramos estas variables ya que mas adelante tomaran valor.
    let base, client_p, age_wife, wife_p, num_son, son_p, recargo, presupuesto, propiedades,salario;

        if (age_client >= 18) {
            // Si el cliente es mayor, solicitamos el resto de la información
            base = Number(prompt("Ingrese el presupuesto base"));
            age_wife = Number(prompt("Edad de su esposa (si no aplica ingrese 0)"));
            num_son = Number(prompt("Número de hijos (si no tiene ingrese 0)"));
            propiedades = Number(prompt("ingrese el numero de propiedades: ")); // (35% por cada propiedad)
            salario = Number(prompt("Ingrese su salario mensual: "));// (5% sobre  salario )


            // 1. Calcular porcentaje del cliente respecto a su edad 
        if (age_client >= 18 && age_client <= 24) {
            client_p = base * 0.10;} // 10%
        else if (age_client >= 25 && age_client <= 49) {
            client_p = base * 0.20;} // 20%
        else {
            client_p = base * 0.30; // 30%
            }

            // 2. Porcentaje de esposa respecto a su edad 
        if (age_wife === 0) {
            wife_p = 0;}
        else if (age_wife >= 18 && age_wife <= 24) {
            wife_p = base * 0.10;}
        else if (age_wife >= 25 && age_wife <= 49) {
            wife_p = base * 0.20;}
        else if (age_wife >= 50) {
            wife_p = base * 0.30;}
        else {
            wife_p = 0; // Por si la esposa es menor de edad
            }

            // 3. Porcentaje hijos (20% por cada hijo)
        son_p = (base * 0.20) * num_son;

            // 4. Totales
            propiedades_p = (base * 0.35) * propiedades; // 35% por cada propiedad
            salario_p = salario * 0.05; // 5% sobre el salario
            recargo = client_p + wife_p + son_p + propiedades_p + salario_p; // se suman todos los porcentajes
            presupuesto = base + recargo; // Se suman los totales 
        
           console.log("--- RESULTADO ---");
            console.log("Recargo por cliente: Q" + client_p);
            console.log("Recargo por esposa: Q" + wife_p);
            console.log("Recargo por hijos: Q" + son_p);
            console.log("Recargo por propiedades: Q" + propiedades_p);
            console.log("Recargo por salario: Q" + salario_p);
        // Se muestra el recargo total y el presupuesto final a retornar al cliente
            console.log("El recargo total es de: Q" + recargo);
            console.log("Total a retorno: Q" + presupuesto);


        } else {
            // Si es menor de edad, le mostraremos el siguiente mensaje 
            console.log("No aplicas, debes ser mayor de edad.");
        }
        let continuar = prompt("¿Desea continuar? (si/no)");
        if (continuar == "no") {
        salir = false;}
         else{
        salir = true;
        }
    }