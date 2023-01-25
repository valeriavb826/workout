import React from 'react';

type navbarProps = {
    
};

const navbar:React.FC<navbarProps> = () => {
    
    return (
         <div className= "bg-blue-500 h-[10vh] flex justify-between items-center">
            <div>
                <h1 className= "ml-[20px]">logo</h1>
            </div>
            <div className ="flex space-x-12 mr-[20px]">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p className="bg-red-500 px-[30px]">4</p>
            </div>
         </div>
    )
}
export default navbar;