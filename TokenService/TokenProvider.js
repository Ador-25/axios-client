class TokenProvider{
    constructor(deviceType){
        this.deviceType= deviceType
    }
    getToken(){
        if(this.deviceType==='mobile'){
            return new MobileToken().getToken()
        }
        else return new WebToken().getToken()
    }
    setToken(token){
        if(this.deviceType==='mobile'){
            new MobileToken(token).setToken()
        }
        else{
            new WebToken(token).setToken()
        }
    }
}