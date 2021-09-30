const extractApiError = (error) => {
    throw error.response.data.message
}

export { extractApiError }
