import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/');
})

test.describe('Registration enabled', async () => {
    test('input data in fields', async({page}) => {
        await page.getByText('Auth').click();
        await page.getByText('Register').click();

        const registerInputFullName = page.locator('nb-register', {hasText: "Register"}).getByRole('textbox', {name: "Full name"});
        await expect(registerInputFullName).toBeVisible();
        await registerInputFullName.fill('Marianna')
        const inputValue = await registerInputFullName.inputValue();
        expect(inputValue).toEqual('Marianna');
        
        const registerInputEmailAddress = page.locator('nb-register', {hasText: "Register"}).getByRole('textbox', {name: "Email address"});
        await expect(registerInputEmailAddress).toBeVisible();
        await registerInputEmailAddress.fill('marianna.rueil@gmail.com')
        const inputValue2 = await registerInputEmailAddress.inputValue();
        expect(inputValue2).toEqual('marianna.rueil@gmail.com');

        const registerPassword = page.locator('nb-register', {hasText: "Password"}).getByRole('textbox', { name: 'Password:', exact: true })
        await expect(registerPassword).toBeVisible();
        await registerPassword.fill('123123123')
        const inputValue3 = await registerPassword.inputValue();
        expect(inputValue3).toEqual('123123123');

        const registerRepeatPassword = page.locator('nb-register', {hasText: "Repeat password"}).getByRole('textbox', { name: 'Repeat password:', exact: true });
        await expect(registerRepeatPassword).toBeVisible();
        await registerRepeatPassword.fill('123123123')
        const inputValue4 = await registerRepeatPassword.inputValue();
        expect(inputValue4).toEqual('123123123');


        const checkbox = page.locator('nb-checkbox', {hasText: "Agree to"});
        await checkbox.locator('.custom-checkbox').click();
        const nativeCheckbox = checkbox.locator('input');
        await expect(nativeCheckbox).toBeChecked();

        const registerButton = page.locator('nb-register', {hasText: "Register"}).getByRole('button', { name: 'Register', exact: true });
        await expect(registerButton).toBeVisible();
        await page.getByRole('button', { name: 'Register' }).click();
        
    });
});

// test('test1-0', async ({page}) => {
//     //some code
//     await page.getByRole('textbox', {name: 'Email address'}).fill('kakak@gmail.com');
//     await page.getByRole('textbox', {name: 'Password'}).fill('123123');
//     await page.getByRole('textbox', {name: 'Log in'}).click();
//     //usable method
//     const loginPage = new loginPage(page);
//     await loginPage.performLogin();


// });

test.describe('Form Layouts page', async () => {
    test('input fields', async({page}) => {
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
        const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"});
        await expect(usingTheGridEmailInput).toBeVisible();
        await usingTheGridEmailInput.fill('marianna.rueil@gmail.com')
        //await usingTheGridEmailInput.clear()// - to clear filled up field
        //await usingTheGridEmailInput.pressSequentially('marianna.rueil@gmail.com' , {delay: 500})//simulation the key stroukse of the board
        //generic assertion
        const inputValue5 = await usingTheGridEmailInput.inputValue()
        expect(inputValue5).toEqual('marianna.rueil@gmail.com')

        //locator assertion
        //await expect(usingTheGridEmailInput).toHaveValue('marianna.rueil@gmail.com')
        
        
        const usingTheGridPasswordInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Password"});
        await expect(usingTheGridPasswordInput).toBeVisible();
        await usingTheGridPasswordInput.fill('123123123')
        //await usingTheGridPasswordInput.clear()// - to clear filled up field
        //await usingTheGridPasswordInput.pressSequentially('123123123' , {delay: 500})//simulation the key stroukse of the board
        //generic assertion
        const inputValue6 = await usingTheGridPasswordInput.inputValue()
        expect(inputValue6).toEqual('123123123')

        //locator assertion
        //await expect(usingTheGridEmailInput).toHaveValue('marianna.rueil@gmail.com')
 
    });

    test('radio buttons', async({page}) => {
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
        const radioButton = page.locator('nb-card', {hasText: "Using the Grid"});
        //await radioButton.getByLabel('Option 2').check({force: true});
        await radioButton.getByRole('radio', {name: "Option 1"}).check({force: true});
        const radioStatus = await radioButton.getByRole('radio', {name: "Option 1"}).isChecked();
        expect(radioStatus).toBeTruthy();//validation
        await expect(radioButton.getByRole('radio', {name: "Option 1"})).toBeChecked();//validation2
        
        await radioButton.getByRole('radio', {name: "Option 2"}).check({force: true});
        expect(await radioButton.getByRole('radio', {name: "Option 2"}).isChecked()).toBeFalsy();
        expect(await radioButton.getByRole('radio', {name: "Option 2"}).isChecked()).toBeTruthy();
    });


    test('click Sign in', async({page}) => {
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();
        const signInButton = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('button', { name: 'Sign in', exact: true });
        await expect(signInButton).toBeVisible();
        await signInButton.click(); 
    });

});



test('checkboxes', async ({page}) => {
    await page.getByText('Modal & Overlays').click();
    await page.getByText('Toastr').click();

    await page.getByRole('checkbox', {name: "Hide on click"}).uncheck({force: true});
    await page.getByRole('checkbox', {name: "Prevent arising of duplicate toast"}).check({force: true});
    await page.getByRole('checkbox', {name: "Show toast with icon"}).uncheck({force: true});

    const allBoxes = page.getByRole('checkbox');
    for(const box of await allBoxes.all()){
        await box.check({force: true});
        expect(await box.isChecked()).toBeTruthy();//.toBeFalsy();
    }

   
})
test('lists and dropdowns', async({page}) => {
    const dropDownMenu = page.locator('ngx-header nb-select');
    await dropDownMenu.click();

    page.getByRole('list');//list has UL tag
    page.getByRole('listitem');//list has LI tag
    
    //const optionList = page.getByRole('list').locator('nb-option');
    const optionList = page.locator('nb-option-list nb-option');
    await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"]);
    await optionList.filter({hasText: "Cosmic"}).click();
    const header = page.locator('nb-layout-header');
    await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)');

    const colors = {
        "Light": "rgb(255, 255, 255)",
        "Dark": "rgb(34, 43, 69)",
        "Cosmic": "rgb(50, 50, 89)",
        "Corporate": "rgb(255, 255, 255)"
    };

    await dropDownMenu.click();
    for(const color in colors){
        await optionList.filter({hasText: color}).click();
        await expect(header).toHaveCSS('background-color', colors[color]);
        if(color != "Corporate")
            await dropDownMenu.click();
    };
});

test('tooltips', async({page}) => {
    await page.getByText('Modal & Overlays').click();
    await page.getByText('Tooltip').click();

    const toolTipCard = page.locator('nb-card', {hasText: "Tooltip Placements"});
    await toolTipCard.getByRole('button', {name: "Top"}).hover();

        page.getByRole('tooltip'); //if you have a role tooltip created
        const tooltip = await page.locator('nb-tooltip').textContent();
        expect(tooltip).toEqual('This is a tooltip');
});


test('dialog box', async({page}) => {
    await page.getByText('Tables & Data').click(); 
    await page.getByText('Smart Table').click();
    
    page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Are you sure you want to delete?');
        dialog.accept();
    });
 
    await page.getByRole('table').locator('tr', { hasText: "twitter@outlook.com" }).locator('.nb-trash').click();
    await expect(page.locator('table tr').first()).not.toHaveText("twitter@outlook.com");

});

test('web tables', async({page}) => {
    await page.getByText('Tables & Data').click(); 
    await page.getByText('Smart Table').click();

    //1) get the row by any text in this row
    const targetRow = page.getByRole('row', { name: "snow@gmail.com"});
    await targetRow.locator('.nb-edit').click();

    await page.locator('input-editor').getByPlaceholder('Age').clear(); //after field with text became a placeholder
    await page.locator('input-editor').getByPlaceholder('Age').fill('33');
    await page.locator('.nb-checkmark').click();
});

test('web tables2', async({page}) => {
    await page.getByText('Tables & Data').click(); 
    await page.getByText('Smart Table').click();
    
    //2) get the row based on the value in the specific column
    await page.locator('.ng2-smart-pagination-nav').getByText('2').click();
    const targetRowbyId = page.getByRole('row', { name: "11"}).filter({ has: page.locator('td').nth(1).getByText('11')}); //here we added filter for column
    await targetRowbyId.locator('.nb-edit').click();
    
    await page.locator('input-editor').getByPlaceholder('First Name').clear();
    await page.locator('input-editor').getByPlaceholder('First Name').fill("Marianna");
    await page.locator('.nb-checkmark').click();
    await expect(targetRowbyId.locator('td').nth(2)).toHaveText("Marianna")

});

test('web tables3', async({page}) => {
    await page.getByText('Tables & Data').click(); 
    await page.getByText('Smart Table').click();

    //3) test filter of the table
    const ages = ["20", "30", "40","200"];

    for(let age of ages){
        await page.locator('input-filter').getByPlaceholder('Age').clear();
        await page.locator('input-filter').getByPlaceholder('Age').fill(age);
        await page.waitForTimeout(500);
        const ageRows = page.locator('tbody tr');

        for(let row of await ageRows.all()){
            const cellValue = await row.locator('td').last().textContent()
            if(age == "200"){
                expect(await page.getByRole('table').textContent()).toContain('No data found');
                } else {
                    expect(cellValue).toEqual(age);
            }  
        }   
     }
});

test('datepicker', async({page}) => {
    await page.getByText('Forms').click(); 
    await page.getByText('Datepicker').click();

    const calendarInputField = page.getByPlaceholder("Form Picker")
    await calendarInputField.click();

    //for selecting correct date we need to specify datepicker, as on calendare opened are the end of the previous month and the next one after current
    //await page.locator('[class ="day-cell ng-star-inserted"]').getByText('1', {exact: true}).click();
    //await expect(calendarInputField).toHaveValue('Jun 1, 2025')

    
    //for tomorrow date, or any future date
    let date = new Date(); //date here is js object performs operations, new - is creating a new instance of date
    date.setDate(date.getDate() + 1721);
    const expectedDate = date.getDate().toString();
    const expectedMonthShot = date.toLocaleString('En-US', {month: 'short'});
    const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'});
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShot} ${expectedDate}, ${expectedYear}`;
    

    let calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent();
    const expectdMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
    while(!calendarMonthAndYear.includes(expectdMonthAndYear)){
        await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
        calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent();
    }

    await page.locator('[class ="day-cell ng-star-inserted"]').getByText(expectedDate, {exact: true}).click();
    await expect(calendarInputField).toHaveValue(dateToAssert);



});

test('sliders', async({page}) => {
        //update attridutes
        // const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle');
        // await tempGauge.evaluate( node => {
        //     node.setAttribute('cx', '232.63098833543773');
        //     node.setAttribute('cy', '232.6309883354377');
        // });
        // await tempGauge.click();

        //mouse movement 
        const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger');
        await tempBox.scrollIntoViewIfNeeded();

        const box = await tempBox.boundingBox();
        const x = box.x + box.width / 2;
        const y = box.y + box.height / 2;
        await page.mouse.move(x, y);
        await page.mouse.down();
        //down to 30 degrees
        // await page.mouse.move(x + 100, y);
        // await page.mouse.move(x + 100, y + 100);
        // await page.mouse.up();
        //down to 12 (min) degrees
        await page.mouse.move(x - 100, y);
        await page.mouse.move(x - 100, y + 200);
        await page.mouse.up();
});
