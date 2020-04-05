import React, {Component} from 'react';
import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllMeasureDescription, registerMeasureDescription} from "../../store/modules/measure_description/actions";
import Table from "../../components/table/table_body/Table";
import {fetchAllMeasure} from "../../store/modules/measure/actions";
import Select from "react-select";
import {fetchAllChildrenTips} from "../../store/modules/children_tips/actions";


class MeasureDescription extends Component {

    state = {
        measureDescription:'',
        selectedOption: '',
        selectOptions: [],
        tableData: [],
        tableHeaders: {
            MeasureDescriptionId:'#',
            MeasureDescription:'MeasureDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllMeasureDescription();
        this.props.fetchAllMeasure();
    }

    componentDidUpdate(prevProps) {
        if(this.props.registeredMeasure !== prevProps.registeredMeasure) {
            if(this.props.registeredMeasure.length > 0) {
                let allregisteredMeasure = this.props.registeredMeasure;

                allregisteredMeasure = allregisteredMeasure.map(item => {
                    return {
                        label: item.MeasureTitle,
                        value: item.MeasureId
                    };
                });
                this.setState({ selectOptions: allregisteredMeasure });
            }
        }
    };



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
            MeasureDescription:this.state.measureDescription,
            MeasureId:this.state.selectedOption.value,
        };

        this.props.registerMeasureDescription(payload);
        this.setState({measureDescription:''});
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
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        placeholder="Select Title"
                                        name="selectedOption"
                                        closeMenuOnSelect={true}
                                        value={this.state.selectedOption}
                                        onChange={value =>
                                            this.setState({
                                                ...this.state,
                                                selectedOption: value
                                            })
                                        }
                                        options={this.state.selectOptions}
                                    />
                                </div>

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

                <Table tableTitle='Registered MeasureDescription'
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
    fetchAllMeasure: PropTypes.func.isRequired,
    registeredMeasure: PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = state => ({
    measureDescriptionSuccessFullyRegistered: state.measure_description.measureDescriptionSuccessFullyRegistered,
    registeredMeasureDescription: state.measure_description.registeredMeasureDescription,
    registeredMeasure: state.measure.registeredMeasure
});



const mapDispatchToProps = dispatch => ({
    registerMeasureDescription: payload => dispatch(registerMeasureDescription(payload)),
    fetchAllMeasureDescription: () => dispatch(fetchAllMeasureDescription()),
    fetchAllMeasure: () => dispatch(fetchAllMeasure())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeasureDescription);