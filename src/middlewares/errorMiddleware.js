import httpStatus from "http-status";

export default function errorHandler(error,req,res,next) {
    if(error.type === "notFound"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong ")
}