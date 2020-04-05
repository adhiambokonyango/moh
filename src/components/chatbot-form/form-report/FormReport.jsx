import React, {Component} from 'react';
import Modal from "react-awesome-modal";
import TopBar from "../../topbar/TopBar";
import './FormReport.scss';
import Accordion from "../../accordion/Accordion";
import Row from "reactstrap/es/Row";

class FormReport extends Component {

    state = {
        displayModal: false,
    };

    handleEditIconClicked = () =>{
        this.setState({displayModal: true});
    };

    handleCloseIconClicked = () =>{
        this.setState({displayModal: false});
    };

    render() {
        return (
            <div>
                <TopBar handleEditIconClicked={()=>{this.handleEditIconClicked();}} />
                <div className="report__content-div">
                    <Accordion title="High fever" />
                </div>
                <Modal
                    visible={this.state.displayModal}
                    width="800"
                    height="360"
                    effect="fadeInUp"
                >
                    <div className="report__first-row">
                    <i
                        className="fa fa-close fa-fw report__close-icon"
                        onClick={() => {
                            this.handleCloseIconClicked();
                        }}
                    />
                    </div>
                    <div className="report__content-row">
                        <div className="report__left-column">
a
                        </div>
                        <div className="report__middle-stroke"></div>
                        <div className="report__right-column">
nnnn
                        </div>
                    </div>

                </Modal>
            </div>
        );
    }
}

export default FormReport;
