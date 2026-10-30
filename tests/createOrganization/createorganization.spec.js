import {test,expect} from "../../customFixtures/login"
import Home from "../../ObjectRepository/home.page"
import Organizations from "../../ObjectRepository/organizations.page"
import excel from 'exceljs'
import path from 'path'
import { random6DigitInteger } from "../../utils/RandomDataUtils"

test("create organization",async({loginFixture})=>{
    //create ref var
    const homePage = new Home(loginFixture)
    const organizationsPage = new Organizations(loginFixture)
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testData/TestScriptData.xlsx"))

    let sheet = book.getWorksheet('Organizations')
    let organizationName = sheet.getRow(2).getCell(1).toString()
    

    await homePage.organizationsLink.click()
    await organizationsPage.addOrganizationBtn.click()
    await organizationsPage.organizationNameTf.fill(organizationName + random6DigitInteger())
    await organizationsPage.saveBtn.first().click()
    await loginFixture.waitForTimeout(3000)

})

// test("create o")