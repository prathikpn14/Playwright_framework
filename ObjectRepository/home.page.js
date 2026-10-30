class Home{
    constructor(page){
        this.calenderLink = page.getByRole("link",{name:"Calendar"})
        this.organizationsLink = page.getByRole("link",{name:"Organizations"})
        this.contactsLink = page.getByRole("link",{name:"Contacts"})
    }
}

export default Home