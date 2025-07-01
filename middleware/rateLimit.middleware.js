import ratelimit from "../upstashRateLimit/upstashRateLimit.js"

const rateLimiterMiddleware = async (req, res, next) => {
    try {

        const response = await ratelimit.limit("my-rate-limit")

        if (!response.success) {
            res.status(429).json({
                message: "to many request,try after sometime",
                response: response.success
            }) 
            console.log((response.reset).toString())
            return         
        }

         next()
    } catch (error) {
        res.status(500).json({
            message: "Rate Limit Internal Error",
            error: error
        })
        next()
    }
}

export default rateLimiterMiddleware