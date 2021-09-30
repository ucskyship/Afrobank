import React from 'react'
import { Clear, ArrowForward } from '@material-ui/icons'
import { Modal, ModalBody } from 'reactstrap'
import propTypes from 'prop-types'
import { Pin, Button } from '../globalcomponents/index'

const PinModal = (props) => {
    return (
        <div>
            <Modal isOpen={props.isVisible} toggle={props.toggleVisibility}>
                <div className="ml-2 mr-2 mt-2 d-flex justify-content-end align-items-center">
                    <Button
                        bg="none"
                        onClick={props.toggleVisibility}
                        icon={() => <Clear style={{ color: 'red' }} />}
                    />
                </div>
                <ModalBody>
                    <div className="d-flex justify-content-center">
                        <Pin onChange={props.onChange} />
                    </div>
                    <div className="d-flex justify-content-center pt-5 pb-3">
                        <Button
                            onClick={props.onSubmit}
                            className="rounded-pill"
                            bg="#0d3153"
                            color="white"
                            width={150}
                            height={40}
                            icon={() => <ArrowForward fontSize="small" />}
                        />
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

PinModal.propTypes = {
    isVisible: propTypes.bool.isRequired,
    toggleVisibility: propTypes.func.isRequired,
    onSubmit: propTypes.func,
}

export default PinModal
