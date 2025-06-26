// import {test, expect} from '@playwright/test'

// test('drag and drop with iframe', async({page}) => {
//     await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
    
//     const  frame = page.frameLocator('[rel-title="Photo Manager"] iframe');
//     await page.locator('li', {hasText:"High Tatras 2"}).dragTo(frame.locator('trash'));
// });

// import {test, expect} from '@playwright/test';

// test('drag and drop with iframe', async ({ page }) => {
//   await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');

//   const frame = page.frameLocator('[rel-title="Photo Manager"] iframe');

//   const photo2 = frame.locator('li', { hasText: 'High Tatras 2' });
//   const trash = frame.locator('#trash');

//   await photo2.dragTo(trash);

//     //more presice control - THIS IS NOT WORKING ANYMORE
//     const photo4 = frame.locator('li', { hasText: "High Tatras 4"}).hover();
//     await page.mouse.down();
//     await frame.locator('#trash').hover();
//     await page.mouse.up();

//     await expect(frame.locator('#trash li h5')).toHaveText(["High Tatras 2", "High Tatras 4"]);



// });


//ChatGPT
import {test, expect} from '@playwright/test';

test('drag and drop with iframe', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');

  const frame = page.frameLocator('[rel-title="Photo Manager"] iframe');

  const photo2 = frame.locator('li', { hasText: 'High Tatras 2' });
  const trash = frame.locator('#trash');

  await photo2.dragTo(trash);

  // Более точный контроль — вручную через boundingBox - here is much more difficult code as DOM is changed
  const photo4 = await frame.locator('li', { hasText: 'High Tatras 4' }).elementHandle();
  const trashBox = await (await frame.locator('#trash').elementHandle())?.boundingBox();
  const photoBox = await photo4?.boundingBox();

  if (photoBox && trashBox) {
    await page.mouse.move(photoBox.x + photoBox.width / 2, photoBox.y + photoBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(trashBox.x + trashBox.width / 2, trashBox.y + trashBox.height / 2);
    await page.mouse.up();
  }

  await expect(frame.locator('#trash li h5')).toHaveText(['High Tatras 2', 'High Tatras 4']);
});

