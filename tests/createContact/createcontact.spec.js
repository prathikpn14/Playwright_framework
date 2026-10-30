import {test,expect} from "../../customFixtures/login"
import Contacts from "../../ObjectRepository/contacts.page"
import Home from "../../ObjectRepository/home.page"
import { random6DigitInteger} from "../../utils/RandomDataUtils"
import excel from "exceljs"
import path from "path"
import { formatDate, getFutureDate } from "../../utils/dateUtils"



test("create contact", async({loginFixture})=>{
    //creating ref var
    const homePage = new Home(loginFixture)
    const contactsPage = new Contacts(loginFixture)
    let book = new excel.Workbook()

    await book.xlsx.readFile(path.join(__dirname,'../../testData/TestScriptData.xlsx'))
    let sheet = book.getWorksheet('Contacts')
    //sheet and row number starts from 1
    let firstName = sheet.getRow(2).getCell(1).toString()
    let lastName = sheet.getRow(2).getCell(2).toString()
    
    await homePage.contactsLink.click()
    await contactsPage.addContactButton.click()
    await contactsPage.firstNameTf.fill(firstName)
    await contactsPage.lastNameTf.fill(lastName + random6DigitInteger())
    await contactsPage.saveBtn.first().click()
    await loginFixture.waitForTimeout(3000)
    
})

test("create contact with date", async({loginFixture})=>{
    //creating ref var
    const homePage = new Home(loginFixture)
    const contactsPage = new Contacts(loginFixture)
    let today = new Date()
    
    let book = new excel.Workbook()

    await book.xlsx.readFile(path.join(__dirname,'../../testData/TestScriptData.xlsx'))
    let sheet = book.getWorksheet('Contacts')
    //sheet and row number starts from 1
    let firstName = sheet.getRow(2).getCell(1).toString()
    let lastName = sheet.getRow(2).getCell(2).toString()

    await homePage.contactsLink.click()
    await contactsPage.addContactButton.click()
    await contactsPage.firstNameTf.fill(firstName)
    await contactsPage.lastNameTf.fill(lastName + random6DigitInteger())
    let formattedStartDate = formatDate(today)   // fetches formatted start date
    await contactsPage.supportStartDateTf.fill(formattedStartDate)
    let formattedEndDate =  getFutureDate(30)  
    //we have created function to directly create and format currentdate+addno.ofdays
    await contactsPage.supportEndDateTf.fill(formattedEndDate)
    await contactsPage.saveBtn.first().click()
    await loginFixture.waitForTimeout(3000)


})