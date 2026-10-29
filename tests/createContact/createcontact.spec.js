import {test,expect} from "../../customFixtures/login"
import Contacts from "../../ObjectRepository/contacts.page"
import Home from "../../ObjectRepository/home.page"


test("create contact", async({page,loginFixture})=>{
    //creating ref var
    let homePage = new Home(page)
    let contactsPage = new Contacts()

    
    await homePage.contactsLink.click()

    
})