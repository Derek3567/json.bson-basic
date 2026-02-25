use("mi_base_de_datos_dyvr");

db.createCollection("productos");


// El metodo insertOne sirve para insertar un doc en la coleccion 
db.productos.insertOne({
    nombre: "CHAVARIN",
    precio: null,
    categoria: "PARTICULA ELEMENTAL",
    stock: 1,
    enOferta: true,
    fechadeingreso: new Date("2026-02-25")
}),


use("mi_base_de_datos_dyvr");
db.productos.insertOne({
    nombre: "Redmagic S27 Ultra Pro Max S Ti XT",
    marca: "Talco Studios",
    material: "Adamantium",
    camaras: "Triple modulo Pro Fusion",
    bateria: 85000,
    procesador: "Snapdragon Intel Ryzen i9 285kX3D super ti maximus extreme",
    incluye:["cargador", "el celular viene por separado"],
    enOferta: false,
    conectividad:{
        cargador: "tipo C",
        velocidad_de_carga: "watts",
        USB_version: 6.0,
        bluetooth: 5,
        wifi: 7
    }
}),


use("mi_base_de_datos_dyvr");
// Derek Yohan Vallejo Rojas
db.productos.insertMany([
    {
        nombre:"S26 Ultra",
        precio: 40000,
        categoria: "electronica",
        stock:"si",
        enOferta: false,
        descuento: 40000,

        especificaciones:{
            conexion: "bluetooth",
            bateria: "9000 mAh",
            dpi: 24600,
            botones: 4378
        },
        color:["negro", "blanco", "azul", "indigo"],
        proveedores: [{
            nombre: "Logitech",
            precio: 5,
            ciudad: "Pyonyong"
        }]
    },




    {
        nombre:"Thunderrobot K98 RGB",
        precio: 800,
        categoria: "electronica",
        stock:"si",
        enOferta: false,
        descuento: null,

        especificaciones:{
            conexion: "alambrico",
            swiches: "mecanicos cherry red",
            rgb: true,
            idioma: "Español"
        },
        
        soporte:{
            windows: true,
            macOS: false,
            linux: true,
            inux: false
        },

        garantia:{
            duracion: "5 minutos",
            tipo: "internacional",
            cobertura: "Explosion Nuclear Rusa"
        }
    }
]),



use("mi_base_de_datos_dyvr");
// Derek Yohan Vallejo Rojas
db.productos.insertMany([
    {
        nombre:"S27 Ultra",
        precio: 450000,
        categoria: "electronica",
        stock:"si",
        enOferta: false,
        descuento: 50000,

        especificaciones:{
            conexion: "bluetooth",
            bateria: "9000 mAh",
            dpi: 249600,
            botones: 43748
        },
        color:["negro", "blanco", "azul", "indigo"],
        proveedores: [{
            nombre: "Logitech",
            precio: 5,
            ciudad: "Pyonyong"
        }]
    },




    {
        nombre:"Thunderrobot K78 RGB",
        precio: 700,
        categoria: "electronica",
        stock:"3",
        enOferta: false,
        descuento: null,

        especificaciones:{
            conexion: "alambrico",
            swiches: "mecanicos cherry blue",
            rgb: true,
            idioma: "Chino"
        },
        
        soporte:{
            windows: false,
            macOS: false,
            linux: true,
            inux: false
        },

        garantia:{
            duracion: "5 segundos",
            tipo: "internacional",
            cobertura: "Explosion Nuclear Israeli"
        }
    }
])