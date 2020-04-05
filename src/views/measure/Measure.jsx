import React, {Component} from 'react';

import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllMeasure, registerMeasure} from "../../store/modules/measure/actions";
import Table from "../../components/table/table_body/Table";

class Measure extends Component {

    state = {
        measureTitle:'',

        tableData: [],
        tableHeaders: {
            MeasureId:'#',
            MeasureTitle:'measure'

        }
    };


    componentDidMount() {
        this.props.fetchAllMeasure();
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
            MeasureTitle:this.state.measureTitle
        };

        this.props.registerMeasure(payload);

    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register Measures</h3>
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
                                        name="measureTitle"
                                        className="form-control"
                                        placeholder="measureTitle"
                                        value={this.state.measureTitle}
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

                <Table tableTitle='Registered Measures'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredMeasure}/>
            </div>
        );
    }
}


Measure.propTypes = {
    registerMeasure: PropTypes.func.isRequired,
    measureSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllMeasure: PropTypes.func.isRequired,
    registeredMeasure: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    measureSuccessFullyRegistered: state.measure.measureSuccessFullyRegistered,
    registeredMeasure: state.measure.registeredMeasure
});



const mapDispatchToProps = dispatch => ({
    registerMeasure: payload => dispatch(registerMeasure(payload)),
    fetchAllMeasure: () => dispatch(fetchAllMeasure())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Measure);