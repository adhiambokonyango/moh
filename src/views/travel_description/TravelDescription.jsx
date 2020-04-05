import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllTravelDescription, registerTravelDescription} from "../../store/modules/travel_description/actions";
import Table from "../../components/table/table_body/Table";


class TravelDescription extends Component {

    state = {
        travelDescription:'',

        tableData: [],
        tableHeaders: {
            TravelDescriptionId:'#',
            TravelDescription:'TravelDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllTravelDescription();
    }

    // componentDidUpdate(prevProps) {
    //     if(this.props.registeredChildrenTips !== prevProps.registeredChildrenTips) {
    //         if(this.props.registeredChildrenTips.length > 0) {
    //             let allregisteredChildrenTips = this.props.registeredChildrenTips;
    //
    //             allregisteredChildrenTips = allregisteredChildrenTips.map(item => {
    //                 return {
    //                     label: item.registeredChildrenTips,
    //                     value: item.CompanyId
    //                 };
    //             });
    //             this.setState({ AllCompanies: allregisteredChildrenTips });
    //         }
    //     }
    // };



    handleChange = event => {
        let newState = this.state;
        newState[event.target.name] = event.target.value;
        this.setState({
            ...newState
        });
    };

    handleSubmit = (e) =>{
        e.preventDefault();

        const payload = {
            TravelDescription:this.state.travelDescription
        };

        this.props.registerTravelDescription(payload);
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register TravelDescription</h3>
                    </div>
                    <div className="panel-body">
                        <form
                            action=""
                            method="POST"
                            onSubmit={this.handleSubmit}
                            encType="multipart/form-data"
                        >
                            <fieldset>
                                <div className="form-group">
                                    <input
                                        name="travelDescription"
                                        className="form-control"
                                        placeholder="travelDescription"
                                        value={this.state.travelDescription}
                                        type="text"
                                        onChange={this.handleChange}
                                        autoFocus
                                        required={true}
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-success btn-block"
                                >
                                    Submit
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <Modal
                    visible={this.props.travelDescriptionSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>travelDescription Registered SuccessFully</p>
                </Modal>
                <Table tableTitle='Registered travelDescription'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredTravelDescription}/>
            </div>
        );
    }
}


TravelDescription.propTypes = {
    registerTravelDescription: PropTypes.func.isRequired,
    travelDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllTravelDescription: PropTypes.func.isRequired,
    registeredTravelDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    travelDescriptionSuccessFullyRegistered: state.travel_description.travelDescriptionSuccessFullyRegistered,
    registeredTravelDescription: state.travel_description.registeredTravelDescription
});



const mapDispatchToProps = dispatch => ({
    registerTravelDescription: payload => dispatch(registerTravelDescription(payload)),
    fetchAllTravelDescription: () => dispatch(fetchAllTravelDescription)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TravelDescription);