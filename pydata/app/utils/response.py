from fastapi.responses import JSONResponse
import json

def successResponse(responseCode, data):
    return JSONResponse(
            status_code = responseCode.status,
            content = {
                "statusCode": responseCode.status,
                "statusName": responseCode.name,
                "message": responseCode.message,
                "data": json.dumps(data)
            }
        )

def ErrorResponse(responseCode):
    return JSONResponse(
            status_code = responseCode.status,
            content = {
                "statusCode": responseCode.status,
                "statusName": responseCode.name,
                "message": responseCode.message,
            }
        )
