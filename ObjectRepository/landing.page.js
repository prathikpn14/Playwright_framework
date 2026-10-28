//landing page POM class
class Landing{
    constructor(page){
        //webelement declaration
        this.usnTf = page.locator("//input[@name='user_name']")
        this.pswTf = page.locator("//input[@name='user_password']")
        this.submitBtn = page.locator('#submitButton')
    }
    
}

export default Landing