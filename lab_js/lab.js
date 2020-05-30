class UserTemplate{

    constructor(name,password,age,loginDate) {
        this.name = name
        this.password = password
        this.age = age
        this.connected = false
        this.loginDate = loginDate
    }
    
    login() {
        this.connected = true;
        console.log('your login status :', this.connected)
    }

    logout() {
        this.connected = false;
        console.log('your login status :', this.connected)
    }

    checkStatus() {
        if(this.connected == true) {
            console.log('Now you are login')
        }else {
            console.log('Please login')
        }
    }
}