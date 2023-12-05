import { Link } from 'react-router-dom';
import { Button } from '../Button/style'
import { Container } from './style'

interface GameProps {
    id: number;
    imagem: string;
}

export function CardGamesT({ id, imagem }: GameProps) {

    return (
        <>
            <Container>
                <section>

                    <img src={imagem} />
                    <Link to={`/jogo/${id}`}>
                        <Button>Ver mais</Button>
                    </Link>
                </section>
            </Container>
        </>
    )
}
