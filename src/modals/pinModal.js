import React, { useState } from 'react'
import { Clear } from '@material-ui/icons'
import { Modal, ModalBody } from 'reactstrap'
import propTypes from 'prop-types'
import { Pin, Button } from '../globalcomponents/index'
import Loader from 'react-loader-spinner'
import {
  createPin as createUserPin,
  userHasPin,
} from '../services/authentication'

const PinModal = (props) => {
  const [createPin, setCreatePin] = useState('')
  const [confirmPin, setConfirmPin] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const [pinError, setPinError] = useState('')

  const hasPin = userHasPin()
  const handlePinCreate = async () => {
    if (confirmPin !== createPin) {
      setPinError('Pin must match')
    } else {
      setIsloading(true)
      try {
        const pin = createPin.toString()
        await createUserPin(pin)
        setIsloading(false)
        props.toggleVisibility()
      } catch (error) {
        setPinError(error)
        setIsloading(false)
      }
    }
  }

  return (
    <div>
      {!!hasPin ? (
        <Modal
          centered
          style={{
            maxWidth: '350px',
          }}
          isOpen={props.isVisible}
          toggle={props.toggleVisibility}
        >
          <div className="ml-2 mr-2 mt-2 d-flex justify-content-end align-items-center">
            <Clear
              onClick={props.toggleVisibility}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <ModalBody>
            <div className="d-flex justify-content-center">
              <Pin onChange={props.onChange} />
            </div>
            <div className="d-flex pt-3 justify-content-center">
              <span
                className="text-center font-weight-bold"
                style={{ color: 'red', fontSize: '12px' }}
              >
                {props.error}
              </span>
            </div>
            <div className="d-flex justify-content-center pt-3">
              <Button
                onClick={props.onSubmit}
                bg="#0d3153"
                color="white"
                width="100%"
                height="40px"
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
          style={{
            maxWidth: '350px',
          }}
          toggle={props.toggleVisibility}
        >
          <div className="ml-2 mr-2 mt-2 d-flex justify-content-end align-items-center">
            <Clear
              onClick={props.toggleVisibility}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <ModalBody>
            <div className="d-flex justify-content-center">
              <span className="text-center" style={{ color: 'red' }}>
                {props.error}
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <span className="text-center" style={{ color: 'red' }}>
                {pinError}
              </span>
            </div>

            <Pin onChange={(e) => setCreatePin(e)} />
            <div className="mt-4 mb-2">
              <Pin onChange={(e) => setConfirmPin(e)} />
            </div>

            <div className="d-flex justify-content-center pt-5 pb-3">
              <Button
                onClick={handlePinCreate}
                bg="#0d3153"
                color="white"
                width="100%"
                height="40px"
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
