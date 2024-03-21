import { Link } from "react-router-dom";
import { PokemonCard } from "../../PokemonCard";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./style";

export function Home() {
  const { data, isLoading, error, page, totalPages } = useQueryPokemonPage();
  console.log(data);

  return (
    <Container>
      <h1>{"Bem-vindo(a) a pokédex do reprograma Jucás"}</h1>

      {isLoading && <span className="loading">Loading...</span>}
      {isLoading && error && <span className="loading">Error...</span>}

      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={"/details"} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>

      <div className="paginationComponnt"></div>
      <button>&lt; Anterior</button>
      <span className="numberPage">
        {page}/{totalPages}
      </span>
      <button>Próxima &lt;</button>
    </Container>
  );
}
