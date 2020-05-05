const target = { width: 1366, height: 768};
module.exports = {
    '@tags': ['login'],
    'Fundopolis login'(browser){

        const user = browser.page.fundSettings();
        const userLogin = 'yaroslav.b@twsgo.com';
        const userPassword = '111111';

        user
            .navigate() //go to the default url from fundSettings file
            .NavLogin() //click on the Login at the header
            .setLogin(userLogin)
            .setPassword(userPassword)
            .login();

        browser
            .waitForElementVisible('.avatar-styles__image-kGGwlb')
            .assert.urlContains('citizen')
            .saveScreenshot('tests_output/login.png')
    }
}