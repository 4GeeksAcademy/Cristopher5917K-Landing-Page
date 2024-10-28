import React from "react";

const Card = () => {
    return (
        <div className="col-12 col-md-3">
            <div className="card-group">
                <div className="card text-center">
                    <img src="https://picsum.photos/seed/picsum/500/320" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae velit enim doloremque iure mollitia nihil incidunt amet, eligendi rerum veniam.</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary">Find Out More!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card