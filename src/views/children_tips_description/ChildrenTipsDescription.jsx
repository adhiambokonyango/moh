import React, {Component} from 'react';

import Table from "../../components/table/table_body/Table";
import { connect } from "react-redux";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";
import {fetchAllChildrenTipsDescription, registerChildrenTipsDescription} from "../../store/modules/children_tips_description/actions";
import {fetchAllChildrenTips} from "../../store/modules/children_tips/actions";
import Select from "react-select";



class ChildrenTipsDescription extends Component {

    state = {
        childrenTipsDescription:'',
        selectedOption: '',
        selectOptions: [],
        tableData: [],
        tableHeaders: {
            ChildrenTipsDescriptionId:'#',
            ChildrenTipsDescription:'ChildrenTipsDescription'

        }
    };


    componentDidMount() {
        this.props.fetchAllChildrenTips();
        this.props.fetchAllChildrenTipsDescription();
    }

    componentDidUpdate(prevProps) {
         if(this.props.registeredChildrenTips !== prevProps.registeredChildrenTips) {
             if(this.props.registeredChildrenTips.length > 0) {
                 let allregisteredChildrenTips = this.props.registeredChildrenTips;

                allregisteredChildrenTips = allregisteredChildrenTips.map(item => {
                    return {
                        label: item.ChildrenTipsTitle,
                        value: item.ChildrenTipsId
                    };
                });
                this.setState({ selectOptions: allregisteredChildrenTips });
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
            ChildrenTipsId:this.state.selectedOption.value,
            ChildrenTipsDescription:this.state.childrenTipsDescription
        };

        this.props.registerChildrenTipsDescription(payload);
        this.setState({childrenTipsDescription:''});
    };

    render() {
        return (
            <div>
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Register ChildrenTipsDescription</h3>
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
                                        name="childrenTipsDescription"
                                        className="form-control"
                                        placeholder="childrenTipsDescription"
                                        value={this.state.childrenTipsDescription}
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

                <Table tableTitle='Registered ChildrenTipsDescription'
                       tableHeaderObject={this.state.tableHeaders}
                       tableData={this.props.registeredChildrenTipsDescription}/>
            </div>
        );
    }
}


ChildrenTipsDescription.propTypes = {
    registerChildrenTipsDescription: PropTypes.func.isRequired,
    childrenTipsDescriptionSuccessFullyRegistered: PropTypes.bool.isRequired,
    fetchAllChildrenTipsDescription: PropTypes.func.isRequired,
    registeredChildrenTipsDescription: PropTypes.arrayOf(PropTypes.object).isRequired,
    registeredChildrenTips: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchAllChildrenTips: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    childrenTipsDescriptionSuccessFullyRegistered: state.children_tips_description.childrenTipsDescriptionSuccessFullyRegistered,
    registeredChildrenTipsDescription: state.children_tips_description.registeredChildrenTipsDescription,
    registeredChildrenTips: state.children_tips.registeredChildrenTips
});



const mapDispatchToProps = dispatch => ({
    registerChildrenTipsDescription: payload => dispatch(registerChildrenTipsDescription(payload)),
    fetchAllChildrenTipsDescription: () => dispatch(fetchAllChildrenTipsDescription()),
    fetchAllChildrenTips: () => dispatch(fetchAllChildrenTips())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChildrenTipsDescription);