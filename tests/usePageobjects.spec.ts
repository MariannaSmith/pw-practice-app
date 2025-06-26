import {test, expect, Page} from '@playwright/test';
import {NavigationPage} from '../page-objects/navigationPage';

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/');

});

test('navigate to form page 1', async({page}) => {
    const navigateTo = new NavigationPage(page);
    await navigateTo.formLayoutsPage();
});

