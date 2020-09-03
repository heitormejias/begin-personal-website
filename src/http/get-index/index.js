const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Heitor Cordeiro Mejias', // ←  Start by adding your name!
    title: 'Heitor Cordeiro Mejias',
    occupation: 'Solution/Software Architect',
    location: 'São Paulo, Brazil',
    bio: 'Specialist in solution architecture with micro-services, DDD, Hexagonal, Onion, Clean, CQRS and all together. Java specialist and vast knowledge in several programming languages such as Go, Python, Javascript / typescript, etc.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'cadastro@mejias.com.br',
    twitter: 'heitormejias',
    linkedin: 'heitor-cordeiro-mejias/',
    instagram: '',
    facebook: '',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body
  }
}
