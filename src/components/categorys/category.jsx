import React, { use } from 'react';
import"./category.css"

const Category = ({categoryFetch}) => {
    const btns = use(categoryFetch)
 
    return (
        <div>
            <div className='category-btn-container'>
                
             <button className='category-btn'>ALL</button>
               {
                btns.categories.map((btn)=><DisplayBtn key={btn.category_id} btn={btn.category}></DisplayBtn>)
               }
            </div>
        </div>
    );
};


function  DisplayBtn ({btn}) {
 
    return (
        <div>
        <button className='category-btn'>{btn}</button>
        </div>
    )


}

export default Category;