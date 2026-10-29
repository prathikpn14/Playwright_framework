import {test,expect} from "../../customFixtures/login"
import Contacts from "../../ObjectRepository/contacts.page"
import Home from "../../ObjectRepository/home.page"
import excel from "exceljs"
import path from "path"


test("create contact", async({page,loginFixture})=>{
    //creating ref var
    const homePage = new Home(page)
    const contactsPage = new Contacts(page)
    let book = new excel.Workbook()

    await book.xlsx.readFile(path.join(__dirname,'../../testData/TestScriptData.xlsx'))
    let sheet = book.getWorksheet('Contacts')
    //sheet and row number starts from 1
    let firstName = sheet.getRow(2).getCell(1).toString()
    let lastName = sheet.getRow(2).getCell(2).toString()
    
    await homePage.contactsLink.click()
    await contactsPage.addContactButton.click()
    await contactsPage.firstNameTf.fill(firstName)
    await contactsPage.lastNameTf.fill(lastName)
    await page.waitForTimeout(3000)
    
})