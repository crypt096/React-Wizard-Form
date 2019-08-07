import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Card,
  CardBody,
  Col,
  Row
} from 'reactstrap';

const Subgenre = (props) => {
  const { handleSubmit, previousPage , nextPage, skipPage , onCheckboxBtnClick , active } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
          <Row style={{padding : '20px'}}>
              <div className="col-sm-12 text-center">
              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Subgenre 1')}
               active={active.includes('Subgenre 1')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Subgenre 1
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Subgenre 2')}
               active={active.includes('Subgenre 2')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Subgenre 2
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Subgenre 3')} 
               active={active.includes('Subgenre 3')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Subgenre 3
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Subgenre 4')} 
               active={active.includes('Subgenre 4')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Subgenre 4
              </Button>
              </div>
            </Row>
            <Row style={{padding : '20px'}}>
              <div className="col-sm-12 text-center">
              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Subgenre 5')}
               active={active.includes('Subgenre 5')} 
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Subgenre 5
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Subgenre 6')}
               active={active.includes('Subgenre 6')} 
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Subgenre 6
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Subgenre 7')} 
               active={active.includes('Subgenre 7')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Subgenre 7
              </Button>

              <Button color="secondary"
               size="lg" 
               onClick={nextPage} 
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Add new subgenre
              </Button>
              </div>
            </Row>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="secondary" className="pull-right" onClick={skipPage} style={{
              marginRight : '80px',
              width : '130px' }}>
               Next
            </Button>
            <Button outline color="secondary" className="pull-right" onClick={previousPage} style={{
              marginRight : '20px',
              width : '130px' }}>
              <i className="fa fa-chevron-left" />
                &nbsp; Back
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

Subgenre.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
};

Button.propTypes = {
  active : PropTypes.bool
}

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Subgenre);
