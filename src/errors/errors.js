function notFound(resource) {
    return {
        type: "notFound",
        message: `${resource ? resource : "Item"} não encontrado`
    }
}

function unprocEntity(resource) {
    return {
        type: "unprocessableEntity",
        message: `${resource ? resource : "ERROR 409"}`
    }
}

function conflict(resource) {
    return {
        type: "Conflict",
        message: `${resource} Conflict`
    }
}
function InternalServer(resource) {
    return {
        type: "Server",
        message: `${resource}`
    }
}





export const error = { notFound, unprocEntity, conflict, InternalServer };