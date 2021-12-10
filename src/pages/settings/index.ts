import Page from "../../core/templates/page";

class SettingPage extends Page{
    static TextObject = {
        MainTitle: "Settings Page"
    };
    constructor(id: string){
        super(id);
    }

    render(): HTMLElement {
        const title = this.createHeaderTitle(SettingPage.TextObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}

export default SettingPage;
