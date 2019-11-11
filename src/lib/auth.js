import jwt from 'jsonwebtoken'


export function verifyJWToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            
            if( err || decodedToken){
                return reject(err)
            }

            return (decodedToken)
        })
    })
}

export function createJWToken() {
    return jwt.sign(process.env.JWT_SECRET, {
        expiresIn: 300,
        algorithm: 'HS256'
    })
}

export default {
    verifyJWToken,
    createJWToken
}