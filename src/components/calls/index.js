'use strict'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/authContext'
import { Navigate, Link } from 'react-router-dom'

import { getFirestore, collection, doc, getDocs, getDoc, setDoc, where, query } from "firebase/firestore";

const Calls = () => {
    const { currentUser } = useAuth()
    const [ calls, setCalls ] = useState([])

    const userId = currentUser.uid

    useEffect(() => {
        const firestore = getFirestore();

    const getUserData = async () => {
      const userDataRef = doc(firestore, 'userData', userId);
      const userDataDoc = await getDoc(userDataRef);
      if (userDataDoc.exists()) {
        const userData = userDataDoc.data();
        const companyQuery = query(collection(firestore, 'calls'), where('company_id', '==', userData.company_id));
        const companyDocs = await getDocs(companyQuery);
        const callsData = []
        companyDocs.forEach((doc) => {
          const companyData = doc.data();
          callsData.push(companyData);
        });
        setCalls(callsData);

      } else {
        console.log('No user data found');
      }
    };

    getUserData();
    }, []);

    
    return (
        <>
            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Calls</h3>
                    </div>
                    {calls.length > 0 && (
                        <table className="w-full text-sm text-gray-600">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-gray-500 bg-transparent border">Title</th>
                                    <th className="px-4 py-2 text-gray-500 bg-transparent border">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {calls.map((phone, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border">{phone.title}</td>
                                        <td className="px-4 py-2 border">{phone.phone_number}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
        </>
    )
}

export default Calls