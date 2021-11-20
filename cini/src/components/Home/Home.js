import React from 'react';
import './Home.css';
import CategoryList from '../CategoryList/CategoryList';

function Home() {
  const optionList = ["Kids", "TV Shows", "Movies"];
  return (
    <div>
        <div className="header">
            <div className="headerTitle">Cinibuzz</div>
            <div className="headerOptions">
                {
                    optionList.map((opt, ind) => {
                       return <div className="options" key={ind}>{opt}</div>
                    })
                }
            </div>
            
        </div>
        <div className="body">
                <CategoryList/>
        </div>
        <div className="footer">Hi It is home!!!!</div>
    </div>

  );
}

export default Home;