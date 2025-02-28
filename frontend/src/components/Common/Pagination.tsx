import { useState } from "react";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {

 
    const [curPage, setCurPage] = useState<number>(0)

    const prevPage = () => {
        if (curPage<1){
            onPageChange(currentPage-1)
            setCurPage(curPage-1)
        }
    }

    const nextPage = () => {
        if (curPage< totalPages){

            onPageChange(currentPage+1)
            setCurPage(curPage+1)
        }
    }

    console.log(totalPages, curPage);
    
    
    return (
        <div className="flex gap-2 justify-center mt-1">
            {/* Previous Button */}
            <button
                    onClick={prevPage}
                    disabled={curPage === 0}
                    className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
                Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => onPageChange(index + 1)}
                    className={`px-3 py-1 rounded ${curPage === index + 1 ? " text-white" : "bg-gray-300"} bg-blue-500`}
                >
                    {index + 1}
                </button>
            ))}

            {/* Next Button */}
            <button
                    onClick={nextPage}
                    disabled={curPage === totalPages}
                    className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};


