import '../styles/QuienesSomos.css'
import { useEffect, useRef, useState } from 'react'

function QuienesSomos() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="nosotros"
      ref={sectionRef}
      className={`quienes-somos ${isVisible ? 'visible' : ''}`}
      data-section="quienes-somos"
    >
      <div className="quienes-somos-contenedor">
        <div className="quienes-somos-izquierda">
          <div className="quienes-somos-decoracion"></div>
          <h2 className="quienes-somos-titulo">Quiénes Somos</h2>
          
          <div className="quienes-somos-contenido">
            <p className="quienes-somos-intro">
              <strong>Corte A</strong> es un estudio–taller especializado en el diseño y fabricación de
              muebles a medida y proyectos personalizados para arquitectos y desarrolladores.
            </p>

            <p className="quienes-somos-parrafo">
              Cada pieza que creamos es única: nace desde un concepto, se modela en detalle y se ejecuta
              con precisión dentro de nuestro taller propio.
            </p>

            <p className="quienes-somos-parrafo">
              Somos un equipo interdisciplinario que combina diseño, ingeniería, producción y gestión,
              permitiendo acompañar al cliente desde la idea inicial hasta la entrega final. Nuestro
              enfoque es 100% personalizado: entendemos necesidades, proponemos soluciones y
              transformamos espacios con muebles que unen estética, funcionalidad y durabilidad.
            </p>

            <p className="quienes-somos-parrafo">
              En Corte A creemos que cada diseño merece ser único, y cada cliente, acompañado.
            </p>

            <p className="quienes-somos-parrafo">
              Por eso trabajamos con dedicación, tecnología y oficio para convertir ideas en realidades
              que perduran.
            </p>
          </div>
        </div>

        <div className="quienes-somos-derecha">
          <div className="quienes-somos-estadisticas">
            <div className="quienes-somos-estadistica">
              <div className="quienes-somos-estadistica-numero">2020</div>
              <div className="quienes-somos-estadistica-label">
                <span>DESDE</span>
                <span>EL</span>
                <span>AÑO</span>
              </div>
              <p className="quienes-somos-estadistica-descripcion">
                Desde 2020 transformando hogares en Tucumán con experiencia comprobada y calidad superior.
              </p>
            </div>

            <div className="quienes-somos-divider"></div>

            <div className="quienes-somos-estadistica">
              <div className="quienes-somos-estadistica-numero">20+</div>
              <div className="quienes-somos-estadistica-label">PROYECTOS</div>
              <p className="quienes-somos-estadistica-descripcion">
                Más de 20 proyectos realizados con diseño personalizado adaptado al estilo de vida de cada cliente.
              </p>
            </div>

            <div className="quienes-somos-divider"></div>

            <div className="quienes-somos-estadistica">
              <div className="quienes-somos-estadistica-numero">100%</div>
              <div className="quienes-somos-estadistica-label">SATISFACCIÓN</div>
              <p className="quienes-somos-estadistica-descripcion">
                Compromiso total con el resultado final y garantía de satisfacción en cada proyecto entregado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuienesSomos;

