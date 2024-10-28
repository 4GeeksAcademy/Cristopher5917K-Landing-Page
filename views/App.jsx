import React from "react";
import Navbar from "../components/Navbar.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import Card from "../components/Card.jsx";
function App() {
    return (
        <>

            <Navbar />
            <Jumbotron />

            <div className="container mt-4">
                <div className="row">
                    <Card />

                    <Card />

                    <Card />

                    <Card />
                </div>
            </div>

        
            <div className="row mt-4">
                <div className="col-12 bg-dark d-flex justify-content-center">
                    <p className="text-light">Copy right @Cristopher5917K 2024</p>
                </div>
            </div>

        

        </>
    )


}

export default App