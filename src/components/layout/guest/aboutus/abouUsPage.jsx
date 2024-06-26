import NavBar from '@/components/ui/nav-bar';
import NavBarPhone from '@/components/ui/nav-bar_phone';

export default async function AboutUs() {
    let color = "Orange"
    return (
        <main className="w-full overflow-y-hidden overflow-x-hidden">
            <div className="hidden_in_mobile">
                <NavBar color={color} />
            </div>
            <div className="hidden_in_pc">
                <NavBarPhone color={color} />
            </div>
            <div className='hidden_in_mobile'>
                <div className='parallax' style={{ backgroundImage: "url('/images/aboutusparallax1.jpg')" }} />
            </div>
            <div className='hidden_in_pc'>
                <div className='parallax_aboutus_phone' style={{ backgroundImage: "url('/images/aboutusparallax1.jpg')" }} />
            </div>
            <div className='aboutus_text2'>
                <div className='titletext_container'>
                    <h1 className='aboutus_titletext2 font-[GoodBrush]'><i>¿QUIENES SOMOS?</i></h1>
                </div>
                <div className='about_us_text_container'>
                    <p className='p-about_us_section'>
                        Somos un vibrante coro que cuenta con entre 20 y 40 voces, dirigidas por el talentoso músico, compositor, arreglista y productor <span className="text-customOrange font-bold">Gerson Gelabert</span>.
                        Dedicados al gospel contemporáneo, nuestro repertorio combina elementos modernos con el espíritu tradicional del gospel.
                        Invitamos a todos a disfrutar de una experiencia musical única, donde la pasión y la energía del grupo se traducen en la esencia pura de nuestro espíritu. ¡Ven a sentirlo con nosotros!
                    </p>
                </div>
            </div>


            <hr className='divisor_paralax1' />

            <div className='aboutus_text2'>
                <div className='titletext_container'>
                    <h1 className='aboutus_titletext2 font-[GoodBrush]'><i>NUESTRA TRAYECTORIA</i></h1>
                </div>
                <div className='about_us_text_container'>
                    <p className='p-about_us_section'>
                        Empezamos en 2012 como un modesto grupo amateur y hemos crecido exponencialmente desde entonces.
                        Bajo la batuta de <span className="text-customOrange font-bold">Gerson Gelabert</span> desde noviembre de 2019, hemos superado desafíos como la pandemia global,
                        lo que ha reforzado nuestra misión de llegar al corazón de la gente a través del inspirador poder del gospel.
                    </p>
                </div>
            </div>


            <hr className='divisor_paralax1' />

            <div className='aboutus_text2'>
                <div className='titletext_container'>
                    <h1 className='aboutus_titletext2 font-[GoodBrush]'><i>NUESTRO COMPROMISO</i></h1>
                </div>
                <div className='about_us_text_container mb-12'>
                    <p className='p-about_us_section'>
                        Desde nuestros inicios, hemos actuado en una amplia variedad de escenarios como teatros, festivales, y eventos privados, además de contribuir en actos benéficos.
                        Comprometidos firmemente con causas solidarias, colaboramos de manera activa con organizaciones sin ánimo de lucro para organizar eventos que mejoran su visibilidad y recaudan fondos para diversos proyectos.
                        En esta línea, hemos colaborado con entidades como <span className="text-customOrange font-bold">La marató de TV3</span>, <span className="text-customOrange font-bold">Banc dels Aliments</span>, y el <span className="text-customOrange font-bold">Casal dels Infants del Raval</span>, entre otros.
                        Nuestra música ha resonado también en centros penitenciarios y residencias para ancianos, demostrando el poder transformador del gospel en todos los entornos.
                    </p>
                </div>
            </div>

        </main>
    )
}