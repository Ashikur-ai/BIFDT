import { FaPlus } from "react-icons/fa6";
const AddCategory = () => {
    const categories = ['Marchandising', 'Computer Operation', 'Pattern Design', 'Fashion Design', 'Interior Design']
    return (
        <div className="w-full">
            <h2 className="p-4 text-gray-600 text-2xl font-bold">All Categories </h2>
            <div className="flex gap-3 flex-col items-center h-full">
                {
                    categories?.map((category, idx) => <div key={idx} className="flex gap-2 justify-center items-center">
                        <p className="flex bg-gray-500 text-white w-[160px] justify-center items-center py-1 rounded-md" >{category}</p>
                        <button  className=' h-8 w-8 flex justify-center items-center bg-red-500 rounded-md hover:bg-red-600 cursor-pointer transition-all duration-300 text-white'>X</button>
                    </div>)
                }
                <p className="flex bg-blue-600 text-white w-[202px] justify-center items-center py-1 rounded-md gap-2" ><FaPlus/> Add Category</p>
            </div>
        </div>
    );
};

export default AddCategory;