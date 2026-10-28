import {test as base,expect} from "@playwright/test"
import dataFile from "../testData/commonData.json"
import Landing from "../ObjectRepository/landing.page"

const test = base.extend({
    loginFixture : async({page},use)=>{
        //setup code
        let landingPage = new Landing(page)
        
        
        //initializing data required
        let url = dataFile.url
        let username = dataFile.username
        let password = dataFile.password 

        //script starts
        await page.goto(url)
        await expect(page).toHaveTitle('vtiger CRM 5 - Commercial Open Source CRM')
    
        await landingPage.usnTf.fill(username)
        await landingPage.pswTf.fill(password)
        await landingPage.submitBtn.click()

        expect(await page.title()).toContain("Home - vtiger CRM 5")
        await use(page)

        //teardown code
        
    }
})

export {test,expect};