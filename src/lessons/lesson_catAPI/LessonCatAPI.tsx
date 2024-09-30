import React from 'react'
import FetchCat from '../../components/fetchCat/FetchCat';

const LessonCatAPI = () => {
    return (
      <div className='lesson-container'>
        <h2>Lesson Cat API</h2>
        {/* <GenderForm/> */}
        <FetchCat />
      </div>
    );
  };
  
  export default LessonCatAPI;
