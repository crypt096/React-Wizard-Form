import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Col , Card, CardBody, Row, Button , Label , Input , FormGroup } from 'reactstrap';

export class AddNewSubgenre extends Component {
    render() {
        const { nextPage , setNewSubgenreName, isDescripitionRequired } = this.props;
        return (
            <div>
            <Col sm="12">
                <Card>
                <CardBody>
                    <Row style={{padding : '20px'}}>
                        <Input 
                            type="text"
                            name="subgenre-name"
                            placeholder="Subgenre name"
                            onChange={setNewSubgenreName}>
                        </Input>
                    </Row>
                    <Row style={{padding : '20px'}}>
                    <FormGroup check inline>
                        <Label check>
                            <Input type="checkbox"
                            onChange={isDescripitionRequired}
                            /> Description is required for this subgenre
                        </Label>
                    </FormGroup>
                    </Row>
                </CardBody>
                <div style={{ paddingBottom: 30 }}>
                    <Button color="secondary" className="pull-right" type="submit" onClick={nextPage} style={{
                        marginRight : '20px',
                        width : '130px' }}>
                    Next
                    </Button>
                </div>
                </Card>
            </Col>
            </div>
        )
    }
}

AddNewSubgenre.propTypes = {
    handleSubmit: PropTypes.func,
    previousPage: PropTypes.func
  };

export default reduxForm({
    form: 'wizardForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  })(AddNewSubgenre);