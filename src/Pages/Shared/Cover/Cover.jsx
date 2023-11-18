import { Parallax } from 'react-parallax';

const Cover = ({img,title}) => {
    return (

        <div className='mb-12'>
          <Parallax
        blur={{ min: -50, max: 40 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-300}
    >
         <div className="hero h-[550px]"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-slate-800 bg-opacity-50 p-12 ">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           
          </div>
        </div>
      </div>
    </Parallax>
       
        </div>
       
    );
};

export default Cover;