const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.facebook.com/r.php');
  await page.getByRole('textbox', { name: 'Nombre' }).click();
  await page.getByRole('textbox', { name: 'Nombre' }).fill('Rodrigo');
  await page.getByRole('textbox', { name: 'Apellido' }).click();
  await page.getByRole('textbox', { name: 'Apellido' }).fill('Muro');
  await page.getByRole('button', { name: 'Registrarte' }).click();
  await page.getByLabel('Día').selectOption('30');
  await page.getByLabel('Mes').selectOption('10');
  await page.getByLabel('Año').selectOption('1997');

  // ---------------------
  await context.close();
  await browser.close();
})();