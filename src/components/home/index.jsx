import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Link } from 'react-router-dom'
// import { getFirestore, collection, doc, getDocs, getDoc, setDoc, where, query } from "firebase/firestore";


const Home = () => {
    const { currentUser } = useAuth()
   
    return (
        <>
            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Welcome {currentUser.displayName ? currentUser.displayName : currentUser.email}</h3>
                    </div>
                    <div className="flex flex-col space-y-4 justify-center items-center">
                        <Link to="/calls">
                            <button className="px-4 py-2 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 hover:shadow-xl transition duration-300">Call Center</button>
                        </Link>
                        <Link to="/enrollments">
                            <button className="px-4 py-2 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 hover:shadow-xl transition duration-300">Enrollments</button>
                        </Link>
                        <Link to="/faqs">
                            <button className="px-4 py-2 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 hover:shadow-xl transition duration-300">Benefit Info</button>
                        </Link>
                        <Link to="/forms">
                            <button className="px-4 py-2 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 hover:shadow-xl transition duration-300">Forms</button>
                        </Link>
                        <Link to="/notifications">
                            <button className="px-4 py-2 text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 hover:shadow-xl transition duration-300">Notifications</button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home