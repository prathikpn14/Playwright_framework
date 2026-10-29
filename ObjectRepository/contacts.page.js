class Contacts{
    constructor(page){
        this.addContactButton = page.locator("//img[contains(@title,'Create Contact')]")
    }
}

export default Contacts