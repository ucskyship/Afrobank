import React, { useState } from 'react'
import { Clear } from '@material-ui/icons'
import { Col, Modal, ModalBody } from 'reactstrap'
import propTypes from 'prop-types'
import { Pin, Button } from '../globalcomponents/index'
import Loader from 'react-loader-spinner'
import { createPin as createUserPin } from '../services/authentication'

const PinModal = (props) => {
    const [createPin, setCreatePin] = useState('')
    const [confirmPin, setConfirmPin] = useState('')
    const [isLoading, setIsloading] = useState(false)
    const [pinError, setPinError] = useState('')
    const { pin, accountNumber } = props.payLoad

    const handlePinCreate = async () => {
        if (confirmPin !== createPin) {
            setPinError('Pin must match')
        } else {
            setIsloading(true)
            try {
                await createUserPin({
                    accountNumber: accountNumber.toString(),
                    pin: createPin.toString(),
                })
                setIsloading(false)
                props.toggleVisibility()
            } catch (error) {
                console.log(error)
                setPinError(error)
                setIsloading(false)
            }
        }
    }
    return (
        <div>
            {!!pin ? (
                <Modal
                    centered
                    isOpen={props.isVisible}
                    toggle={props.toggleVisibility}
                >
                    <div className="ml-2 mr-2 mt-2 d-flex justify-content-end align-items-center">
                        <Button
                            bg="none"
                            onClick={props.toggleVisibility}
                            icon={() => <Clear style={{ color: 'red' }} />}
                        />
                    </div>
                    <ModalBody>
                        <div className="d-flex justify-content-center">
                            <span
                                className="text-center"
                                style={{ color: 'red' }}
                            >
                                {props.error}
                            </span>
                        </div>
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
                                text={
                                    props.isLoading ? (
                                        <Loader
                                            type="ThreeDots"
                                            height={30}
                                            width={30}
                                            color="white"
                                        />
                                    ) : (
                                        'Transfer'
                                    )
                                }
                            />
                        </div>
                    </ModalBody>
                </Modal>
            ) : (
                <Modal
                    centered
                    isOpen={props.isVisible}
                    toggle={props.toggleVisibility}
                >
                    <div className="ml-2 mr-2 mt-2 d-flex justify-content-end align-items-center">
                        <Button
                            bg="none"
                            onClick={props.toggleVisibility}
                            icon={() => <Clear style={{ color: 'red' }} />}
                        />
                    </div>
                    <ModalBody>
                        <div className="d-flex justify-content-center">
                            <span
                                className="text-center"
                                style={{ color: 'red' }}
                            >
                                {props.error}
                            </span>
                        </div>
                        <div className="d-flex justify-content-center">
                            <span
                                className="text-center"
                                style={{ color: 'red' }}
                            >
                                {pinError}
                            </span>
                        </div>
                        <Col lg={10} className="m-auto">
                            <Pin onChange={(e) => setCreatePin(e)} />
                            <div className="mt-4 mb-2">
                                <Pin onChange={(e) => setConfirmPin(e)} />
                            </div>
                        </Col>

                        <div className="d-flex justify-content-center pt-5 pb-3">
                            <Button
                                onClick={handlePinCreate}
                                className="rounded-pill"
                                bg="#0d3153"
                                color="white"
                                width={150}
                                height={40}
                                text={
                                    isLoading ? (
                                        <Loader
                                            type="ThreeDots"
                                            height={30}
                                            width={30}
                                            color="white"
                                        />
                                    ) : (
                                        'create pin'
                                    )
                                }
                            />
                        </div>
                    </ModalBody>
                </Modal>
            )}
        </div>
    )
}

PinModal.propTypes = {
    isVisible: propTypes.bool.isRequired,
    toggleVisibility: propTypes.func.isRequired,
    onSubmit: propTypes.func,
}

PinModal.defaultProps = {
    onSubmit: () => {},
    isVisible: false,
    toggleVisibility: () => {},
}

export default PinModal
