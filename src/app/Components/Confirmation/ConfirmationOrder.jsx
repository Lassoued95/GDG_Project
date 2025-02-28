"use client";
import {useNavigate} from "react-router-dom";

function Confirmation() {
    const navigate = useNavigate();

    return (

        <div
            className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-lg text-gray-700 mb-6">
                Thank you for your order. You will receive a confirmation email shortly.
            </p>
            <button
                onClick={() => navigate("/Confirmation/Confirmation")}
                className="mt-4 bg-black text-blue-50 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 ease-in-out">
                Go back

            </button>

        </div>
    );
}

export default Confirmation;