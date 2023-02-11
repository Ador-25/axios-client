const prefix ='https://localhost:7209/api/Authenticate/'

//gets parameter username & password returns a token if successful
// returns unauthorized if not correct
async function login(username,password){
    const user= username
    const pass= password
    try{
        const res =  await axios.post(prefix+'login',
        {
            username: user,
            password: pass
        }
        )
        return res
    }
    catch(err){
        return 'error'
    }
}

//registers school

// curriculum type => 
// 0:British Curr   
// 1: National Curr
// 2: Others

// institution type=> 
// 0:School
// 1:Coaching
async function registerSchool(
    SchoolEmail,
    SchoolPassword,
    SchoolName,
    SchoolCode,
    SchoolPhoneNumber,
    SchoolAddress,
    SchoolDescription,
    SchoolTypeOfInstitution,
    SchoolCurriculumType){
        //console.log(prefix+'register-school')
        const mail=SchoolEmail
        const pass=SchoolPassword
        const name=SchoolName
        const code=SchoolCode
        const phn=SchoolPhoneNumber
        const addr= SchoolAddress
        const dsc= SchoolDescription
        const t_ins= SchoolTypeOfInstitution
        const t_curr=SchoolCurriculumType

        try{
            const res= await axios.post('https://localhost:7209/api/Authenticate/register-school',
                {
                    email:mail,
                    password:pass,
                    schoolName:name,
                    schoolCode: code,
                    phoneNumber: phn,
                    address:addr,
                    SchoolDescription: dsc,
                    typeOfInstitution:t_ins,
                    curriculumType:t_curr
                }
            )
            console.log('res:')
            console.log(res.data)
            return res
        }
        catch(err){
            console.log(err)
        }


}