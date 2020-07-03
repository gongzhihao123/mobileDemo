const Environment = process.env.NODE_ENV !== 'production'
const BASE_UR = Environment ? '/repair-portal' : ''

export default BASE_UR
