import React, {Component} from 'react';
import bgAjuda from "../image/3.jpg";

class Ajuda extends Component {
    render(){
        return(
            // style={{ backgroundImage: 'url('+bgAjuda+')'}}
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="borda-modal p-4">
                        <div className="modal-content ">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">SOBRE O SISTEMA</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis odio arcu, pulvinar eu ultrices quis, laoreet ac nunc. Phasellus ut risus nisi. Aliquam eu sapien ac diam posuere ullamcorper. Suspendisse elementum nibh enim, quis molestie ipsum condimentum ac. Proin odio eros, hendrerit in commodo ut, convallis ac nulla. Nulla aliquam, turpis eu hendrerit fringilla, nisi justo lacinia arcu, quis dictum diam mi at elit. Nullam faucibus rutrum nisi vitae consequat. Sed semper elit sem. Pellentesque vehicula nunc vel libero ornare commodo. Maecenas eget nunc a lectus bibendum suscipit ac vestibulum massa. Sed eu semper ex. Vivamus elementum imperdiet ultrices.
                                        </div>
                                        {/* <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div> */}
                                    </div>
                                    <div className="col-lg-4">
                                        <img src={bgAjuda} className="img-fluid" alt="imagem: construindo app" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ajuda;