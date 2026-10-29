class Contacts{
    constructor(page){
        this.addContactButton = page.locator("//img[contains(@title,'Create Contact')]")
        this.firstNameTf = page.locator("//td[@class='dvtCellLabel' and contains(.,'First')]/following-sibling::td/input[@name='firstname']")
        this.lastNameTf = page.locator("//td[@class='dvtCellLabel' and contains(.,'Last')]/following-sibling::td/input[@name='lastname']")
    }
}

export default Contacts