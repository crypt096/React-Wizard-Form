import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Row
} from 'reactstrap';

const Information = (props) => {
  const { handleSubmit, previousPage,nextPage , onCheckboxBtnClick , logResults , getBookTitle , getBookAuthor ,
  getBookIsbn, getBookPublisher , getBookDatePublished , getBookNumOfPages, getBookFormat, getBookEdition, getBookEditionLanguage,
  getBookDescription , checkDesReq , checkIfPageIsSkipped} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <Card className="card-border">
          <CardBody>
          {/* Book title */}
          <FormGroup>
            <Label for="bookTitle">Book title</Label>
            <Input type="text" name="bookTitle" id="bookTitle" placeholder="Book title" onChange={getBookTitle}/>
          </FormGroup>

          {/* Author */}
          <FormGroup>
            <Label for="authorSelect">Author</Label>
            <Input type="select" name="select" id="authorSelect" placeholder="Author" onChange={getBookAuthor}>
              <option>Author 1</option>
              <option>Author 2</option>
              <option>Author 3</option>
            </Input>
          </FormGroup>

          {/* ISBN */}
          <FormGroup>
            <Label for="ISBN">ISBN title</Label>
            <Input type="text" name="email" id="ISBN" placeholder="ISBN" onChange={getBookIsbn}/>
          </FormGroup>

          {/* Publisher */}
          <FormGroup>
            <Label for="publisherSelect">Publisher</Label>
            <Input type="select" name="select" id="publisherSelect" placeholder="Publisher" onChange={getBookPublisher}>
              <option>Publisher 1</option>
              <option>Publisher 2</option>
              <option>Publisher 3</option>
            </Input>
          </FormGroup>

          <Col xs="3" sm="3" style={{paddingLeft: '0px'}}>
            <FormGroup>
              <Label for="datePublished">Date published</Label>
              <Input type="date" name="date" id="datePublished" placeholder="DD/MM/YYYY" onChange={getBookDatePublished}/>
            </FormGroup>
          </Col>

          <Col xs="2" sm="2" style={{paddingLeft: '0px'}}>
          <FormGroup>
            <Label for="pagesNumber">Number</Label>
            <Input
              type="number"
              name="pagesNumber"
              id="pagesNumber"
              placeholder="Number of pages"
              onChange={getBookNumOfPages}
            />
          </FormGroup>
          </Col>

          <Col xs="3" sm="3" style={{paddingLeft: '0px'}}>
          <FormGroup>
            <Label for="formatSelect">Format</Label>
            <Input type="select" name="select" id="formatSelect" placeholder="Format" onChange={getBookFormat}>
              <option>Format 1</option>
              <option>Format 2</option>
              <option>Format 3</option>
            </Input>
          </FormGroup>
          </Col>

          <Row>
          <Col xs="3" sm="3">
          <FormGroup>
            <Label for="formatSelect">Edition</Label>
            <Input type="text" name="select" id="formatSelect" placeholder="Edition" onChange={getBookEdition}>
            </Input>
          </FormGroup>
          </Col>

          <Col xs="3" sm="3" style={{paddingLeft: '20px'}}>
          <FormGroup>
            <Label for="editionLangSelect">Edition language</Label>
            <Input type="select" name="select" id="editionLangSelect" placeholder="Edition language" onChange={getBookEditionLanguage}>
              <option>Edition language 1</option>
              <option>Edition language 2</option>
              <option>Edition language 3</option>
            </Input>
          </FormGroup>
          </Col>
          </Row>

          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" id="description" onChange={getBookDescription}/>
          </FormGroup>


          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button color="secondary" className="pull-right" onClickCapture={logResults} type="submit" style={{
              marginRight : '20px',
              width : '130px' }}>
               Add
            </Button>
            <Button outline color="secondary" className="pull-right" onClick={checkIfPageIsSkipped} style={{
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

Information.propTypes = {
  handleSubmit: PropTypes.func,
  logResults: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Information);
