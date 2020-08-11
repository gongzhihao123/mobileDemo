const Environment = process.env.NODE_ENV !== 'production'
const BASE_UR = Environment ? '/activity' : ''

export default BASE_UR
