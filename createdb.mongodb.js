use(`mi_base_de_datos_dyvr`)

db.usuarios.insertOne({
    nombre: "Donald Trompetas",
    edad: 2389,
    email: "odioatodos@gmail.com",
    isActive: true,
    saldo: 48743953945739459,
    fecharegistro: new Date(),
    genero: "Albert Einstein Prime",
    ciudad: "Berlin",
    inidiomas: ["español", "ingles", "ruso", "aleman de 1939"],
    numerosdetelefono: ["77 81 76 99 0934", "77 81 76 99 0934"]
})