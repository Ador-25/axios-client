const prefix ='https://localhost:7209/api/'
function prefixBuilder(suffix){
    return prefix+suffix+'/'
}
const token = new WebToken().getToken();



// get all sections in a school
async function getSectionsInSchool() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const tempUrl = prefixBuilder('Sections')+'school/all-sections'
      const res = await axios.get(tempUrl);
      return res
    } catch (err) {
      // will handle error here


    }
  }


  //get all sections in a grade
  async function getSectionsInGrade(gradeId) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const tempUrl = prefixBuilder('Sections')+'grade/all-sections/'+gradeId
      const res = await axios.get(tempUrl);
      return res
    } catch (err) {
      // will handle error here


    }
  }



  // add section in a grade
  async function AddSectionInGrade(gradeId, sectionModel){
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try{
        const res =  await axios.post(prefixBuilder('Sections')+'add-section/'+gradeId, sectionModel);
        return res
    }
    catch(err){
        return 'error'
    }
}



// get grades in a school
  async function getGradesInSchool() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const tempUrl = prefixBuilder('Grades')
      const res = await axios.get(tempUrl);
      return res
    } catch (err) {
      // will handle error here


    }
  }


// add grade in a school
async function AddSectionInGrade(gradeModel){
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try{
        const res =  await axios.post(prefixBuilder('Grades'), gradeModel);
        return res
    }
    catch(err){
        return 'error'
    }
}



// get grade details
async function getGradeDetails(gradeId) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const tempUrl = prefixBuilder('Grades')+gradeId
      const res = await axios.get(tempUrl);
      return res
    } catch (err) {
      // will handle error here


    }
  }


// get school details
  async function getSchoolDetails(schoolId) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    try {
      const tempUrl = prefixBuilder('School')+schoolId
      const res = await axios.get(tempUrl);
      return res
    } catch (err) {
      // will handle error here
    }
  }


