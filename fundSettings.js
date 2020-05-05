module.exports = {

    url: 'https://dev.fundopolis.com',

    elements:{
        userLoginInput: '.form-login-styles__input-imXBfJ.ejqHzX[placeholder="Email"]',
        userPassInput: '.form-login-styles__input-imXBfJ.ejqHzX[placeholder="Password"]',
    },
    commands:[{
        NavLogin() {
            return this
                .click('.button-login-styles__button-oOxGt.ljLyuK');
        },

        setLogin(value) {
            return this
                .setValue('@userLoginInput', value);
        },

        setPassword(value) {
            return this
                .setValue('@userPassInput', value);
        },

        login() {
            return this
                .click('.form-login-styles__buttonLogin-jZUkEs[type="button"]');
        }

    }],

};