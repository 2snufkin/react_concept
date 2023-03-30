import Course2 from './Course2'
import Course3 from './Course3'
import Course1 from "./Course1";
import EmailInput from "../state/Email"


function ListCourses(){
    const course1 = {start:'26.03.23', end: null };
    const course2 =  { start: null, end: 'finished'} ;
    const course3 =  {start:'21.03.23', end: null} ;
    return (
        <>
        {/*<Course1 dates={course1}>React Key Concepts: Book 2022</Course1>*/}
        {/*<Course2 dates={course2}>Electron from Scratch: Build Desktop Applications with JavaScript : Video 2022</Course2>*/}
        {/*<Course3 dates={course3}>React - The Complete Guide: Video 2022</Course3>*/}
            <EmailInput></EmailInput>
        </>
    )
}

export default ListCourses
