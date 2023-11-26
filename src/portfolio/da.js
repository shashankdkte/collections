import Image1 from './../assets/tailwind/clipboard.jpg'
import Image2 from './../assets/tailwind/loopstudios.jpg'
import Image3 from './../assets/tailwind/shortly.jpg'
import Image4 from './../assets/tailwind/fylo.jpg'
import Image5 from './../assets/tailwind/bookmark.jpg'
import Image6 from './../assets/bootstrap/blog.png'
import Image7 from './../assets/bootstrap/corso.png'
import Image8 from './../assets/bootstrap/portfolio.png'
import Image9 from './../assets/bootstrap/vera.png'
import Image10 from './../assets/bootstrap/yavin.png'


const da = [
    {
        id: 1,
        category: 'uiux',
        tags:['bootstrap','react'],
        image: Image1,
        title: "Clipboard",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'https://shashankdkte.github.io/basic-tailwind/clipboard',
        github: 'https://github.com/shashankdkte/basic-tailwind/tree/main/clipboard'
    },
    {
        id: 2,
        category: 'frontend',
        tags:['react','tailwind'],
        image: Image2,
        title: "LoopStudios",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'https://shashankdkte.github.io/basic-tailwind/loopstudios',
        github: 'https://github.com/shashankdkte/basic-tailwind/tree/main/loopstudios'
    },
    {
        id: 3,
        category: 'frontend',
        tags:['angular','bootstrap'],
        image: Image3,
        title: "Shortly",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'https://shashankdkte.github.io/basic-tailwind/',
        github: 'https://github.com/shashankdkte/basic-tailwind'
    },
    {
        id: 4,
        category: 'uiux',
        tags:['nextjs','tailwind'],

        image: Image4,
        title: "Fylo",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'https://shashankdkte.github.io/basic-tailwind/fylo',
        github: 'https://github.com/shashankdkte/basic-tailwind/tree/main/fylo'
    },
    {
        id: 5,
        category: 'uiux',
        tags:['nextjs','bootstrap'],

        image: Image5,
        title: "Bookmark",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! ",
        demo: 'https://shashankdkte.github.io/basic-tailwind/bookmark',
        github: 'https://github.com/shashankdkte/basic-tailwind/tree/main/bookmark'
    },
    {
        id: 6,
        category: 'frontend',
        tags:['aspnet','angular'],

        image: Image6,
        title: "Testimonial",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'https://shashankdkte.github.io/basic-tailwind/testimonial',
        github: 'https://github.com/shashankdkte/basic-tailwind/tree/main/testimonial-grid'
    },
    {
        id: 7,
        category: 'frontend',
        tags:['aspnet','react'],

        image: Image7,
    

        title: "Project Title Seven (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 8,
        category: 'backend',
        tags:['react','django'],
        image: Image8,
        title: "Project Title Eight (Backend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 9,
        category: 'frontend',
        tags:['react','node'],
        image: Image9,
        title: "Project Title Nine (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
      {
        id: 9,
        category: 'frontend',
        tags:['angular','node'],
        image: Image10,
        title: "Project Title Nine (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    }
]


export default da

// Step 1: Get Distinct tags
//  Add to LIst if Selected Tag includes tag in project