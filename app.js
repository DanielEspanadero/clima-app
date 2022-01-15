const { leerInput,
    inquirerMenu,
    pausa
} = require('./helpers/inquirer');

const Busquedas = require('./models/busquedas')
console.clear()

const main = async () => {

    const busquedas = new Busquedas()
    let opt;

    do {
        opt = await inquirerMenu()

        switch (opt) {
            case 1:
                //Mostrar mensaje

                //Buscar los lugares

                //Seleccionar el lugar

                //Clima

                //Mostrar resultados

                console.log('\nInformación de la ciudad\n'.brightGreen);
                console.log('Ciudad:', );
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Tempreratura:', );
                console.log('Mínima:', );
                console.log('Máxima:', );
                break
        }


        if (opt !== 0) await pausa();

    } while (opt !== 0)
};

main()