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


const Genre = (props) => {
  const { handleSubmit , onCheckboxBtnClick , active } = props;
  props = {
    cSelected : []
  }
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card>
          <CardBody>
            <Row style={{padding : '20px'}}>
              <div className="col-sm-12 text-center">
              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Genre 1')} 
               active={active.includes('Genre 1')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Genre 1
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Genre 2')}
               active={active.includes('Genre 2')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Genre 2
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Genre 3')}
               active={active.includes('Genre 3')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Genre 3
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Genre 4')} 
               active={active.includes('Genre 4')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Genre 4
              </Button>
              </div>
            </Row>
            <Row style={{padding : '20px'}}>
              <div className="col-sm-12 text-center">
              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Genre 5')} 
               active={active.includes('Genre 5')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Genre 5
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Genre 6')} 
               active={active.includes('Genre 6')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Genre 6
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Genre 7')} 
               active={active.includes('Genre 7')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Genre 7
              </Button>

              <Button outline color="secondary"
               size="lg" 
               onClick={() => onCheckboxBtnClick('Genre 8')}
               active={active.includes('Genre 8')}
               style={
                 {margin : '20px',
                  width: '200px'}
                  }>Genre 8
              </Button>
              </div>
            </Row>
          </CardBody>
          <div style={{ padding : '20px'}}>
            <Button color="secondary" className="pull-right" type="submit" style={{
              marginRight: '60px',
              width : '130px'}}>
               Next
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

Genre.propTypes = {
  handleSubmit: PropTypes.func
};

Button.propTypes = {
  active : PropTypes.bool
}

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Genre);
