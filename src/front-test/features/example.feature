Feature: Registro en Facebook

@Smoke
Scenario: El usuario se registra en Facebook sin fecha de nacimiento y demas datos obligatorios
  Given El usuario ingresa a la pagina de registro de Facebook
  When El usuario rellena los campos Nombre y Apellido
  And El usuario clickea el button Sign Up
  Then La pagina muestra un mensaje de error pidiendo ingresar el resto de los datos obligatorios
  
  @Smoke
Scenario: El usuario se registra en Facebook sin genero y demas datos obligatorios
  Given El usuario ingresa a la pagina de registro de Facebook
  When El usuario rellena los campos Nombre y Apellido
  And El usuario coloca su mes de nacimiento en el dropdown Month
  And El usuario coloca su dia de nacimiento en el dropdown Day
  And El usuario coloca su año de nacimiento en el dropdown Year
  And El usuario clickea el button Sign Up
  Then La pagina muestra un mensaje de error pidiendo ingresar el resto de los datos obligatorios

@Smoke 
Scenario: El usuario se registra sin mail ni contraseña
  Given El usuario ingresa a la pagina de registro de Facebook
  When El usuario rellena los campos Nombre y Apellido
  And El usuario coloca su mes de nacimiento en el dropdown Month
  And El usuario coloca su dia de nacimiento en el dropdown Day
  And El usuario coloca su año de nacimiento en el dropdown Year
  And El usuario clickea el checkbox correspondiente a su genero
  And El usuario clickea el button Sign Up
  Then La pagina muestra un mensaje de error pidiendo ingresar el resto de los datos obligatorios

@Smoke
Scenario: El usuario se registra sin contraseña
  Given El usuario ingresa a la pagina de registro de Facebook
  When El usuario rellena los campos Nombre y Apellido
  And El usuario coloca su mes de nacimiento en el dropdown Month
  And El usuario coloca su dia de nacimiento en el dropdown Day
  And El usuario coloca su año de nacimiento en el dropdown Year
  And El usuario clickea el checkbox correspondiente a su genero
  And El usuario ingresa su email en el campo Email
  And El usuario clickea el button Sign Up
  Then La pagina muestra un mensaje de error pidiendo ingresar el resto de los datos obligatorios

@Smoke
Scenario: El usuario se registra de manera exitosa
  Given El usuario ingresa a la pagina de registro de Facebook
  When El usuario rellena los campos Nombre y Apellido
  And El usuario coloca su mes de nacimiento en el dropdown Month
  And El usuario coloca su dia de nacimiento en el dropdown Day
  And El usuario coloca su año de nacimiento en el dropdown Year
  And El usuario clickea el checkbox correspondiente a su genero
  And El usuario ingresa su email en el campo Email
  And El usuario ingresa una contraseña en el campo Password
  And El usuario clickea el button Sign Up
  Then La pagina redirecciona a otra instancia donde pide una confirmacion de email
