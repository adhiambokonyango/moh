import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllTravel, registerTravel} from "../../store/modules/travel/actions";
import Table from "../../components/table/table_body/Table";

class Travel extends Component {

    state = {
        travelTitle:'',

        tableData: [],
        tableHeaders: {
            TravelId:'#',
            TravelTitle:'measure'

        }
    };


    componentDidMount() {
        this.props.fetchAllTravel();
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
            TravelTitle:this.state.travelTitle
        };

        this.props.registerTravel(payload);
        this.setState({travelTitle:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register Travel</h3>
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
                                        name="travelTitle"
                                        className="form-control"
                                        placeholder="travelTitle"
                                        value={this.state.travelTitle}
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

                <Table tableTitle='Registered Travel'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredTravel}/>
            </div>
        );
    }
}


Travel.propTypes = {
    registerTravel: PropTypes.func.isRequired,
    travelSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllTravel: PropTypes.func.isRequired,
    registeredTravel: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    travelSuccessFullyRegistered: state.travel.travelSuccessFullyRegistered,
    registeredTravel: state.travel.registeredTravel
});



const mapDispatchToProps = dispatch => ({
    registerTravel: payload => dispatch(registerTravel(payload)),
    fetchAllTravel: () => dispatch(fetchAllTravel())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Travel);