import React from 'react';

export default function Search() {

    return (
        <>
            <div className="search">
                <div className="input_wrapper">
                    <input type="search" placeholder="Search for something" />
                </div>
                <div className="results_wrapper">
                    <div className="row">
                        <div className="col left">
                            Left
                        </div>
                        <div className="col right">
                            Right
                        </div>
                    </div>
                    <div className="row">
                        <div className="col left">
                            Left
                        </div>
                        <div className="col right">
                            Right
                        </div>
                    </div>
                    <div className="row">
                        <div className="col left">
                            Left
                        </div>
                        <div className="col right">
                            Right
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}