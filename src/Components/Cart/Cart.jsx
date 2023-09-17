/* eslint-disable react/prop-types */

const Cart = ({addedCourses,remaining,totalHour,price}) => {
    // console.log(addedCourses);
    return (
        <div className="w-1/3 bg-gray-50 ml-4 mt-2 p-5  h-[330px] rounded-md">
            <h3 className="text-center text-lg font-bold text-indigo-500 mb-2">Credit Hour Remaining {remaining}hr</h3>
            <hr />
            <div className="min-h-[170px]">
            <h2 className="text-xl font-semibold" >Course Name</h2>
            {
                addedCourses.map((course,idx) =>(
                   <ol className="font-normal text-sm text-gray-500"  key={idx}><li>{idx+1}. {course.title}</li></ol>
                  
                ))
            }
            </div>
            <hr  />
            <p className="mt-2 mb-2 text-lg font-medium ">Total Credit Hour : {totalHour}hr</p>
            <hr />
            <p className="mt-3 text-lg font-medium">Total Price : {price} USD</p>
        </div>
    );
};

export default Cart;