import httpStatus from "http-status";

export default function errorHandler(error,req,res,next) {
    if(error.type === "notFound"){
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }
    if(error.type === "unprocessableEntity"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }
    if(error.type === "Conflict"){
        return res.status(httpStatus.CONFLICT).send(error.message);
    }
    if(error.type === "Server"){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR.send(error.message));
    }
    if(error.type === "BadReq"){
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }




    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong ");
}