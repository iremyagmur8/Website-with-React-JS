import Branding from '../Branding'
import Home from '../homes/Home'
import About from '../about/About'
import Service from '../services/Service'
import Skill from '../Skill'
import Blog from '../blog/Blog'

export default function Homepage({data}) {

  return (
    <>
    <Home />
    <Branding data={data}/>
    <About />
    <Service data={data} />
    <Skill />
    <Blog data={data}/>
    </>
  )
}
