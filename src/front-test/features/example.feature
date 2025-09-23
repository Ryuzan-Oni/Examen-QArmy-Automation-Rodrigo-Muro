Feature: Registro QArmy

@Smoke
Scenario: El usuario se registra sin nombre de usuario
  Given El usuario ingresa a la pagina de registro
  When El usuario rellena los campos Nombre y Apellido
  And El usuario clickea el checkbox correspondiente a su genero
  And El usuario ingresa su email en el campo Email
  And El usuario selecciona su pais en el dropdown Pais
  And El usuario ingresa una contraseña en el campo Password
  And El usuario clickea el button Sign Up
  Then La pagina muestra un mensaje pidiendo los datos faltantes

@Smoke
Scenario: El usuario se registra sin contraseña
  Given El usuario ingresa a la pagina de registro
  When El usuario rellena los campos Nombre y Apellido
  And El usuario clickea el checkbox correspondiente a su genero
  And El usuario ingresa su email en el campo Email
  And El usuario selecciona su pais en el dropdown Pais
  And El usuario ingresa su username en el campo Usuario
  And El usuario clickea el button Sign Up
  Then La pagina muestra un mensaje pidiendo los datos faltantes

@Smoke
Scenario: El usuario se sin seleccionar su pais
  Given El usuario ingresa a la pagina de registro
  When El usuario rellena los campos Nombre y Apellido
  And El usuario clickea el checkbox correspondiente a su genero
  And El usuario ingresa su email en el campo Email
  And El usuario ingresa su username en el campo Usuario
  And El usuario ingresa una contraseña en el campo Password
  And El usuario clickea el button Sign Up
  Then La pagina muestra un mensaje pidiendo los datos faltantes

@Smoke
Scenario: El usuario se registra sin su email
  Given El usuario ingresa a la pagina de registro
  When El usuario rellena los campos Nombre y Apellido
  And El usuario clickea el checkbox correspondiente a su genero
  And El usuario selecciona su pais en el dropdown Pais
  And El usuario ingresa su username en el campo Usuario
  And El usuario ingresa una contraseña en el campo Password
  And El usuario clickea el button Sign Up
  Then La pagina muestra un mensaje pidiendo los datos faltantes


@Smoke
Scenario: El usuario se registra de manera exitosa
  Given El usuario ingresa a la pagina de registro
  When El usuario rellena los campos Nombre y Apellido
  And El usuario clickea el checkbox correspondiente a su genero
  And El usuario ingresa su email en el campo Email
  And El usuario selecciona su pais en el dropdown Pais
  And El usuario ingresa su username en el campo Usuario
  And El usuario ingresa una contraseña en el campo Password
  And El usuario clickea el button Sign Up
  Then La pagina redirecciona a otra instancia donde pide una confirmacion de email
