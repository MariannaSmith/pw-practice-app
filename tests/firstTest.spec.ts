// import {expect, test} from "@playwright/test"


// test.beforeEach(async({page}) => {
//     await page.goto("http://localhost:4200/")
    
// });


// test.skip("suite1", () => {
//     test.beforeEach(async({page}) => {
//         await page.getByText("Charts").click()
//     });
//     test("the first test1", async ({page}) => {
//         await page.getByText("Form Layouts").click()
    
//     });
    
//     test("navigate to datepicker page1", async ({page}) => {
//         await page.getByText("Datepicker").click()
    
//     });
    
// });

// test.describe("suite2", () => {
//     test.beforeEach(async({page}) => {
//         await page.getByText("Forms").click()
//     });
//     test("the first test2", async ({page}) => {
//         await page.getByText("Form Layouts").click()
    
//     });
    
//     test("navigate to datepicker page2", async ({page}) => {
//         await page.getByText("Datepicker").click()
    
//     });
    
// });

// test('Locator syntax rules', async({page}) => {
//     //by Tag name 
//     await page.locator('input').first().click();

//     //by Id
//     page.locator('#inputEmail1');

//     //by Class value
//     page.locator('.shape-rectangle');

//     //by attribute
//     page.locator('[placeholder="Email"]');

//     //by Class value (full)
//     page.locator('[class="input-full-width size-medium status-basic shape ectangle nb-transition"]');

//     //combine different selectors
//     page.locator('input[placeholder="Email"][nbinput]');

//     //by XPath (NOT RECOMMENDED)
//     page.locator('//*[@id="inputEmail1"]');

//     //by partial text match
//     page.locator(':text("Using")');

//     //by exact text match
//     page.locator(':text-is("Using the Grid")');

// });



// test('Locating child elements', async({page}) => {
//     await page.locator('nb-card nb-radio :text-is("Option1")').click();
    
    
//     await page.locator('nb-card').locator('nb-radio').locator(':text-is("OPtion2")').click();

//     await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click();

//     await page.locator('nb-card').nth(3).getByRole('button').click(); //nth - index of element starts from 0 [0, 1, 2 ,3 ...]
// });

// test('Locating parents elements', async ({page}) => {
//     await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"}).click();

//     await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: "Email"}).click();

//     await page.locator('nb-card').filter({hasText: "BasicForm"}).getByRole('textbox', {name: "Email"}).click();

//     await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: "Password"}).click();

//     await page.locator('nb-card').filter({has:page.locator('nb-checkout')}).filter({hasText: "Sign in"}).getByRole('textbox', {name: "Email"}).click();

//     await page.locator(':text-is("Using te Grid")').locator('..').getByRole('textbox', {name: "Email"}).click();
// });


// test('Reusing the locators', async({page}) => {
//     const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});
//     const emailField = basicForm.getByRole('textbox', {name: "Email"});

//     await emailField.fill('test@test.com');
//     await basicForm.getByRole('textbox', {name: "Password"}).fill('Welcome123');
//     await basicForm.locator('nb-checkbox').click();
//     await basicForm.getByRole('button').click();

//     await expect(emailField).toHaveValue('test@test.com');
// });


// test("User facing locators", async ({page}) => {    
//     await page.getByRole("textbox", {name: "Email"}).first().click
//     await page.getByRole("button", {name: "Sign in"}).first().click
    
//     await page.getByLabel("Email").first().click()
    
//     await page.getByPlaceholder("Jane Doe").click()
    
//     await page.getByText("Using the Grid").click()
    
//     await page.getByTestId("SignIn").click()
//     //await page.getByTitle("IoT Dashboard").click()
// });

// test('Extracting values', async ({page}) => {
    
//     // single test value
//     const basicForm = page.locator('nb-card').filter({hasText: "Basic Form"});
//     const buttonText = await basicForm.locator('buttom').textContent();
//     expect(buttonText).toEqual('Submit');

//     //all text values
//     const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents();
//     expect(allRadioButtonsLabels).toContain("Optionn 1");

//     // //input value
//     // const emailField1 = basicForm.getByRole('textbox', {name: "Email"});
//     // await emailField1.fill('test@test.com');
//     // const emailField1 = await emailField1.inputValue();
//     // expect(emailField1).toEqual('test@test.com');

//     const placeholderValue = await emailField1.getAttribute('placeholder');
//     expect(placeholderValue).toEqual('Email');
// });

// test('Assertions', async ({page}) => {
//     //General assertions
//     const value = 5;
//     expect(value).toEqual(5);

//     const text = await basicFormButton1.textContent();
//     expect(text).toEqual("Submit");

//     //Localor assertion
//     await expect(basicFormButton1).toHaveText("Submit");

//     //Sort assertion
//     await expect.soft(basicFormButton1).toHaveText("Submit");
//     await basicFormButton1.click();

// });

// test.afterAll(() => {

// });
// //then we can delete the same lines below (I will hide it under comments and copy that)
// test("the first test", async ({page}) => {
//     //await page.goto("http://localhost:4200/")
//     //await page.getByText("Forms").click()
//     await page.getByText("Form Layouts").click()

// });

// test("navigate to datepicker page", async ({page}) => {
//     await page.goto("http://localhost:4200/")
//     await page.getByText("Forms").click()
//     await page.getByText("Datepicker").waitFor({ state: "visible" });
//     await page.getByText("Datepicker").click()
// });


// test("navigate to datepicker page", async ({page}) => {
//     //await page.goto("http://localhost:4200/")
//     //await page.getByText("Forms").click()
//     await page.getByText("Datepicker").click()
// });

// test.describe("test suite 1", () => {
//     test("the first test", () => {

//     });
    
//     test("the secons test", () => {

//     });
    
//     test("the third test", () => {

//     });
// });

// test.describe("test suite 2", () => {
//     test("the first test", () => {

//     });
    
//     test("the secons test", () => {

//     });
    
//     test("the third test", () => {

//     });

// });

// test.beforeEach(async({page}) => {
//     await page.goto("http://localhost:4200/")
//     //await page.getByText("Forms").click() - we hidede because we have now several test suites
// });

// test("the first test", async ({page}) => {
//     await page.getByText("Form Layouts").click()

// });

// test("navigate to datepicker page", async ({page}) => {
//     await page.getByText("Datepicker").click()

// });

//     test.beforeEach(async({page}) => {
//         await page.getByText("Charts").click()
//     });
//     test("the first test1", async ({page}) => {
//         await page.getByText("Form Layouts").click()
    
//     });
    
//     test("navigate to datepicker page1", async ({page}) => {
//         await page.getByText("Datepicker").click()
    
//     });
    


// test.describe("suite2", ( => {
//     test.beforeEach(async({page}) => {
//         await page.getByText("Forms").click()
//     });
//     test("the first test2", async ({page}) => {
//         await page.getByText("Form Layouts").click()
    
//     });
    
//     test("navigate to datepicker page2", async ({page}) => {
//         await page.getByText("Datepicker").click()
    
//     });
    
// }));


// //if we need to do same tasks we can use hook:
// test.beforeAll(() => {

// });