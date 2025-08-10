import { Container } from './styles';
import mdma from '@/assets/mdma.png'
import smilingPill from '@/assets/smilingPill.png'

export function Safety() {
    return (
        <Container>
            <img  className="smilingPill" src={smilingPill} alt="pill" />
            <section>
              <div className='divInfo'>
                <h1>MDMA SAFETY GUIDE</h1>
                    <small>Bond: 3,4-Methylendioxy-N-methlamphetamine</small>
                    <p>When taking <strong>MDMA</strong>, it is recommended not to exceed a maximum dose of <strong>1.5MG</strong> <strong>MDMA</strong> per kg bodyweight 
                        for men and <strong>1.3MG</strong> <strong>MDMA</strong> per kg bodyweight for women. 
                        In general, a dose of <strong>120MG</strong> should not be exceeded. 
                        After ingestion, be sure to hydrate sufficiently. 
                        Only obtain <strong>MDMA</strong> from trustworth sources.</p>                      
              </div>
              <div>
                <img className='mdma' src={mdma} alt="" />
              </div>
            </section>
        </Container>
    )
}