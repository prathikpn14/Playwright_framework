class Organizations{
    constructor(page){
        this.addOrganizationBtn = page.locator("//img[contains(@title,'Create Organization')]")
        this.organizationNameTf = page.locator("//input[@name='accountname']")
        this.saveBtn = page.locator("//input[contains(@value,'Save')]")
    }
}

export default Organizations