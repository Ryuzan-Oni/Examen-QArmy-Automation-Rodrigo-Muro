import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {
  firstNameLabel,
  lastNameLabel,
  userLabel,
  genderMale,
  emailLabel,
  passwordLabel,
  signUpButton,
  countryLabel
} from '../locators/exampleLocators';
import {
  getByTestId,
  getByTestIdAndFillIt,
  getByTestIdAndClickIt,
  getByTestIdAndSelectOption
} from '../utils/interactions';
import { first } from 'cheerio/dist/commonjs/api/traversing';

Given("El usuario ingresa a la pagina de registro", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
});

When ("El usuario rellena los campos Nombre y Apellido", async function () {
  for (const page of pages) {
    await page.getByTestId(firstNameLabel).click();
    await page.getByTestId(firstNameLabel).fill("Rodrigo");
    await page.getByTestId(lastNameLabel).click();
    await page.getByTestId(lastNameLabel).fill("Muro");
  }
});

When('El usuario clickea el checkbox correspondiente a su genero', async function () {
  for (const page of pages) {
    await page.getByTestId(genderMale).click();
    await page.waitForTimeout(1000);
  }
});

When('El usuario ingresa su email en el campo Email', async function () {
  for (const page of pages) {
    await page.getByTestId(emailLabel).click();
    await page.getByTestId(emailLabel).fill("Akali@Qarmy.com");
  }
});

When('El usuario selecciona su pais en el dropdown Pais', async function () {
  for (const page of pages) {
    await page.getByTestId(countryLabel).click();
    await page.getByTestId(countryLabel).selectOption("AR");
    await page.waitForTimeout(1000);
  }
});

When('El usuario ingresa su username en el campo Usuario', async function () {
  for (const page of pages) {
    await page.getByTestId(userLabel).click();
    await page.getByTestId(userLabel).fill("Akali");
  }
});

When('El usuario ingresa una contraseña en el campo Password', async function () {
  for (const page of pages) {
    await page.getByTestId(passwordLabel).click();
    await page.getByTestId(passwordLabel).fill("Qarmy1212/");
  }
});

When('El usuario clickea el button Sign Up', async function () {
  for (const page of pages) {
    await page.getByTestId(signUpButton).click();
    await page.waitForTimeout(1000);
  }
});

Then('La pagina muestra un mensaje pidiendo los datos faltantes', async function () {
  for (const page of pages) {
  await page.waitForTimeout(2000);
  }
});


Then('La pagina redirecciona a otra instancia donde pide una confirmacion de email', async function () {
  for (const page of pages) {
  await page.goto('https://qarmy.ar/practica/automation/exito.html');
  await page.waitForTimeout(2000);
  }
});
