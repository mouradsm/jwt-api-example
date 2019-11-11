import { verifyJWTToken } from '.libs/auth'
import { verify } from 'crypto'

export function verifyJWTToken_MW(req, res, next) {
    let token = (req.method === 'POST') ? req.body.token : req.query.token

    verifyJWTToken(token)
        .then((decodedToken) => {
            req.use = decodedToken.data
            next()
        })
        .catch((err) => {
            res.status(400).json({message: "Invalid auth token provided."})
        })
    }
