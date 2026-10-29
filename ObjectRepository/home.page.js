class Home{
    constructor(page){
        this.calenderLink = page.getByRole("link",{name:"Calendar"})
        this.organizationLink = page.getByRole("link",{name:"Organizations"})
        this.contactsLink = page.getByRole("link",{name:"Contacts"})
    }
}

export default Home