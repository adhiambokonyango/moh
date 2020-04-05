import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllMeasureDescription, registerMeasureDescription} from "../../store/modules/measure_description/actions";
import Table from "../../components/table/table_body/Table";


class MeasureDescription extends Component {

    state = {
        measureDescription:'',

        tableData: [],
        tableHeaders: {
            MeasureDescriptionId:'#',
            MeasureDescription:'MeasureDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllMeasureDescription();
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
            MeasureDescription:this.state.measureDescription
        };

        this.props.registerMeasureDescription(payload);
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register MeasureDescription</h3>
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
                                        name="measureDescription"
                                        className="form-control"
                                        placeholder="measureDescription"
                                        value={this.state.measureDescription}
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
                    visible={this.props.measureDescriptionSuccessFullyRegistered}
                    width="300"
                    height="300"
                    effect="fadeInUp"
                >
                    <p>measureDescription Registered SuccessFully</p>
                </Modal>
                <Table tableTitle='Registered Companies'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredMeasureDescription}/>
            </div>
        );
    }
}


MeasureDescription.propTypes = {
    registerMeasureDescription: PropTypes.func.isRequired,
    measureDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllMeasureDescription: PropTypes.func.isRequired,
    registeredMeasureDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    measureDescriptionSuccessFullyRegistered: state.measure_description.measureDescriptionSuccessFullyRegistered,
    registeredMeasureDescription: state.measure_description.registeredMeasureDescription
});



const mapDispatchToProps = dispatch => ({
    registerMeasureDescription: payload => dispatch(registerMeasureDescription(payload)),
    fetchAllMeasureDescription: () => dispatch(fetchAllMeasureDescription)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeasureDescription);