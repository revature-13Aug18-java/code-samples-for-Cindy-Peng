export class UserSettingsFormData{
    username: string;
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;

    constructor(username, oldPassword, newPassword, confirmPassword){
        this.username = username;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
    }
}