import React, { Component } from 'react'
import { Button , Col , Card , CardBody , Row } from 'reactstrap';
import { generateKeyPair } from 'crypto';

export class Success extends Component {
    render() {
        const { resetForm } = this.props;
        return (
            <div>
            <Col sm="12">
                <Card>
                    <CardBody style={{ textAlign : 'center' }}>
                        <i className="fa fa-check-circle" 
                        style={
                            { fontSize : '256px', 
                              color : '#d3d3d3'
                            }
                            }/><br/>
                        Book added successfully<br/>
                        <Button color="secondary"
                            onClick={resetForm} 
                            style={
                                {margin : '20px',
                                width: '300px'}
                                }>Add another book
                        </Button>
                    </CardBody>
                </Card>
            </Col>
            </div>
        )
    }
}

export default Success
