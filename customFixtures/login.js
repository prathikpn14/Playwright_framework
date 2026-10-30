import {test as base,expect} from "@playwright/test"
import Landing from "../ObjectRepository/landing.page"

const test = base.extend({
    loginFixture : async({page},use)=>{
        //setup code
        let landingPage = new Landing(page)
        
        
        //initializing data required
        // let url = dataFile.url
        // let username = dataFile.username
        // let password = dataFile.password 
        let url = process.env.BASE_URL
        let username = process.env.USERNAMEqa
        let password = process.env.PASSWORDqa


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