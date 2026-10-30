class Contacts{
    constructor(page){
        this.addContactButton = page.locator("//img[contains(@title,'Create Contact')]")
        this.firstNameTf = page.locator("//td[@class='dvtCellLabel' and contains(.,'First')]/following-sibling::td/input[@name='firstname']")
        this.lastNameTf = page.locator("//td[@class='dvtCellLabel' and contains(.,'Last')]/following-sibling::td/input[@name='lastname']")
        this.supportStartDateTf = page.locator("//input[@name='support_start_date']")
        this.supportEndDateTf = page.locator("//input[@name='support_end_date']")

        this.saveBtn = page.locator("//input[contains(@value,'Save')]")

    }
}

export default Contacts