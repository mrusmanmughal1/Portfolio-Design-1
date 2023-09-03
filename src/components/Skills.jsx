import { AiFillHtml5 } from 'react-icons/ai';
import{BiLogoCss3 ,BiLogoReact,BiLogoJavascript} from 'react-icons/bi'

const icons = [{
    icon: <AiFillHtml5/>,
    text: "80%",
    color:"text-html"
   
},{
    icon:<BiLogoCss3/>,
    text:"80%",
    color:"text-css"
   

},{
    icon:<BiLogoJavascript/>,
    text:"70%",
    color:"text-js"
},{
    icon:<BiLogoReact/>,
    text:"90%",
    color:'text-react'
}
]
const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100">
        <div className="text-center py-16 text-6xl font-bold ">Skills & Experience</div>
        <div className="flex py-14">
            <div className="w-1/2 flex flex-wrap gap-10 text-center items-center ">
            {icons.map((val,i)=>{
            const {icon,color,text}=val;
            return (
            <div key={i} className="border rounded-full px-6 py-3 flex flex-col items-center" >
                
                <i className={`text-8xl ${color}`}>{icon}</i>
                <p className='font-semibold text-lg'>{text}</p>
                </div>
                    
                )})}
                
            </div>
            <div className="w-1/2"></div>
        </div>
    </section>
  )
}

export default Skills