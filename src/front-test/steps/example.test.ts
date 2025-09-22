import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {
  firstNameLabel,
  lastNameLabel,
  monthLabel,
  dayLabel,
  yearLabel,
  genderMale,
  emailLabel,
  passwordLabel,
  signUpButton
} from '../locators/exampleLocators';
import {
  getElementByRole,
  getElementByRoleAndClickIt,
  getByLabelAndSelectOption,
  getByTextAndClickIt
} from '../utils/interactions';
import { first } from 'cheerio/dist/commonjs/api/traversing';

Given("El usuario ingresa a la pagina de registro de Facebook", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
});

When ("El usuario rellena los campos Nombre y Apellido", async function () {
  for (const page of pages) {
    await page.getByRole('textbox', { name: 'Nombre' }).click();
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Rodrigo');
    await page.getByRole('textbox', { name: 'Apellido' }).click();
    await page.getByRole('textbox', { name: 'Apellido' }).fill('Muro');
  }
});

When('El usuario coloca su mes de nacimiento en el dropdown Month', async function () {
  for (const page of pages) {
    await page.getByLabel('Mes').selectOption('10');
    await page.waitForTimeout(1000);
  }
});

When('El usuario coloca su dia de nacimiento en el dropdown Day', async function () {
  for (const page of pages) {
  await page.getByLabel('Día').selectOption('30');
  await page.waitForTimeout(1000);
  }
});

When('El usuario coloca su año de nacimiento en el dropdown Year', async function () {
  for (const page of pages) {
    await page.getByLabel('Año').selectOption('1997');
    await page.waitForTimeout(1000);
  }
});

When('El usuario clickea el checkbox correspondiente a su genero', async function () {
  for (const page of pages) {
    await page.getByText('Hombre').click();
    await page.waitForTimeout(1000);
  }
});

When('El usuario ingresa su email en el campo Email', async function () {
  for (const page of pages) {
    await page.getByRole('textbox', { name: 'Número de celular o correo' }).click();
    await page.getByRole('textbox', { name: 'Número de celular o correo' }).fill('akali@qarmy.com');
  }
});

When('El usuario ingresa una contraseña en el campo Password', async function () {
  for (const page of pages) {
    await page.getByRole('textbox', { name: 'Contraseña nueva' }).click();
    await page.getByRole('textbox', { name: 'Contraseña nueva' }).fill('Akali1123');
  }
});

When('El usuario clickea el button Sign Up', async function () {
  for (const page of pages) {
   await page.getByRole('button', { name: 'Registrarte' }).click();
   await page.waitForTimeout(1000);
  }
});

Then('La pagina muestra un mensaje de error pidiendo ingresar el resto de los datos obligatorios', async function () {
  for (const page of pages) {
  await page.waitForTimeout(1500);
  }
});

Then('La pagina redirecciona a otra instancia donde pide una confirmacion de email', async function () {
  for (const page of pages) {
  await page.goto('https://www.facebook.com/confirmemail.php?next=https%3A%2F%2Fwww.facebook.com%2F%3Flsrc%3Dlbr&__req=7');
  await page.waitForTimeout(2000);
  }
});
