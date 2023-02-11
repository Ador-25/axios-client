const { default: axios } = require("axios")

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
        const endpoint = prefix+'register-school'
        const res= await axios.post(endpoint,
            {
                email:SchoolEmail,
                password:SchoolPassword,
                schoolName:SchoolName,
                schoolCode: SchoolCode,
                phoneNumber: SchoolPhoneNumber,
                address:SchoolAddress,
                SchoolDescription: SchoolDescription,
                typeOfInstitution:SchoolTypeOfInstitution,
                curriculumType:SchoolCurriculumType
            }
        )

}