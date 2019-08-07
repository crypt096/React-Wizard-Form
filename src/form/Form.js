import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card,Container,Button } from 'reactstrap';
import Genre from './Genre';
import Subgenre from './Subgenre';
import AddNewSubgenre from './AddNewSubgenre';
import Information from './Information';
import Success from './Success';

class Form extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [
        {title: 'Genre'},
        {title: 'Subgenre'},
        {title: 'Add new subgenre'},
        {title: 'Information'}
      ],
      gSelected : [],
      subgSelected : [],
      newSubgenreName : '',
      isDescripitionRequired : '',
      bookTitle : '',
      bookAuthor : '',
      bookIsbn : '',
      bookPublisher : '',
      bookDatePublished : '',
      bookNumOfPages: '',
      bookFormat: '',
      bookEdition : '',
      bookEditionLang : '',
      bookDescription : '',
      isPageSkipped : false
    };

    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    this.onSubgenreBtnClick = this.onSubgenreBtnClick.bind(this);
    this.logResults = this.logResults.bind(this);
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  skipPage() {
    this.setState({ page: this.state.page + 2 })
    this.setState({ isPageSkipped : true})
  }

  skippedPageBack() {
    this.setState({ page: this.state.page - 2 })
    this.setState({ isPageSkipped : false})
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.gSelected.indexOf(selected);
    if (index < 0) {
      this.state.gSelected.push(selected);
    } else {
      this.state.gSelected.splice(index, 1);
    }
    this.setState({ gSelected: [...this.state.gSelected] });
  }

  onSubgenreBtnClick(selected) {
    const index = this.state.subgSelected.indexOf(selected);
    if (index < 0) {
      this.state.subgSelected.push(selected);
    } else {
      this.state.subgSelected.splice(index, 1);
    }
    this.setState({ subgSelected: [...this.state.subgSelected] });
  }

  logResults(e) {
    this.checkDesReq(e);
    console.log(this.state);
  }

  resetForm() {
    this.setState({ 
      page : this.state.page = 0,
      gSelected : [],
      subgSelected : [],
      newSubgenreName : '',
      isDescripitionRequired : '',
      bookTitle : '',
      bookAuthor : '',
      bookIsbn : '',
      bookPublisher : '',
      bookDatePublished : '',
      bookNumOfPages: '',
      bookFormat: '',
      bookEdition : '',
      bookEditionLang : '',
      bookDescription : '',
      isPageSkipped : false
     })
  }

  setNewSubgenreName(e) {
    this.setState({ newSubgenreName : e.target.value})
  }

  isDescripitionRequired(e) {
    this.setState({ isDescripitionRequired : e.target.checked})
  }

  getBookTitle(e) {
    this.setState({ bookTitle : e.target.value})
  }

  getBookAuthor(e) {
    this.setState({ bookAuthor : e.target.value})
  }

  getBookIsbn(e) {
    this.setState({ bookIsbn : e.target.value})
  }

  getBookPublisher(e) {
    this.setState({ bookPublisher : e.target.value})
  }

  getBookDatePublished(e) {
    this.setState({ bookDatePublished : e.target.value})
  }

  getBookNumOfPages(e) {
    this.setState({ bookNumOfPages : e.target.value})
  }

  getBookFormat(e) {
    this.setState({ bookFormat : e.target.value})
  }

  getBookEdition(e) {
    this.setState({ bookEdition : e.target.value})
  }

  getBookEditionLanguage(e) {
    this.setState({ bookEditionLang : e.target.value})
  }

  getBookDescription(e) {
    this.setState({ bookDescription : e.target.value})
  }

  checkIfPageIsSkipped() {
    if(((this.state.page === 3) && (this.state.isPageSkipped === true))){
      this.skippedPageBack();
    }else{
      this.previousPage();
    }
  }

  checkDesReq(e) {
    if((this.state.isDescripitionRequired) === true && (this.state.bookDescription === '')) {
      e.preventDefault();
      console.log('You can not proceed further until you fill Description!');
    }else{
      this.nextPage();
    }
  }

  checkGenre(e) {
    if (this.state.gSelected.length <= 0) {
      e.preventDefault();
      console.log('You must select Genre first!');
    } else {
      this.nextPage();
    }
  }

  checkSubGenre(e) {
    if (this.state.subgSelected.length <= 0) {
      e.preventDefault();
      console.log('You must select Subgenre first!');
    } else {
      this.skipPage();
    }
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <Container>
        <Card>
        <Stepper steps={ steps } activeStep={ page } 
        activeColor="#4D4D61"
        completeColor="#B1BFCC"
        defaultColor="#B1BFCC"
        circleFontSize="20px"/>

        {page === 0 && <Genre 
        onSubmit={this.nextPage}
        onCheckboxBtnClick={this.onCheckboxBtnClick.bind(this)}
        active={this.state.gSelected}
        checkGenre={this.checkGenre.bind(this)}
        />}
        {page === 1 && (
          <Subgenre
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            onSubgenreBtnClick={this.onSubgenreBtnClick.bind(this)}
            skipPage={this.skipPage.bind(this)}
            active={this.state.subgSelected}
            checkSubGenre={this.checkSubGenre.bind(this)}
          />
        )}
        {page === 2 && (
          <AddNewSubgenre
          nextPage={this.nextPage}
          previousPage={this.previousPage}
          setNewSubgenreName={this.setNewSubgenreName.bind(this)}
          isDescripitionRequired={this.isDescripitionRequired.bind(this)}
          />
        )}
        {page === 3 && (
          <Information
            previousPage={this.previousPage}
            nextPage={this.nextPage}
            logResults={this.logResults.bind(this)}
            getBookTitle={this.getBookTitle.bind(this)}
            getBookAuthor={this.getBookAuthor.bind(this)}
            getBookIsbn={this.getBookIsbn.bind(this)}
            getBookPublisher={this.getBookPublisher.bind(this)}
            getBookDatePublished={this.getBookDatePublished.bind(this)}
            getBookNumOfPages={this.getBookNumOfPages.bind(this)}
            getBookFormat={this.getBookFormat.bind(this)}
            getBookEdition={this.getBookEdition.bind(this)}
            getBookEditionLanguage={this.getBookEditionLanguage.bind(this)}
            getBookDescription={this.getBookDescription.bind(this)}
            checkDesReq={this.checkDesReq.bind(this)}
            checkIfPageIsSkipped={this.checkIfPageIsSkipped.bind(this)}
          />
        )}
        {page === 4 && (
          <Success
          logResults={this.logResults.bind(this)}
          resetForm={this.resetForm.bind(this)}
          />
        )}
        {/* You can track things that you add dynamically here */}
        {/* <p>Selected: {JSON.stringify(this.state)}</p> */}
      </Card>
      </Container>
    );
  }

}

Form.propTypes = {
  onSubmit: PropTypes.func
};

Button.propTypes = {
  active : PropTypes.bool
}

export default Form;
