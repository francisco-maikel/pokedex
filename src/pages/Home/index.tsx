import { Link } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard";
import { useQueryPokemonPage } from "../../hooks/useQueryPokemonPage";
import { Container } from "./style";

export function Home() {
  const { data, isLoading, error, page, totalPages, nextPage, prevPage } =
    useQueryPokemonPage();
  console.log(data);

  return (
    <Container>
      <h1>{"Bem-vindo(a) a pokédex do reprograma Jucás"}</h1>

      {isLoading && <span className="loading">Loading...</span>}
      {isLoading && error && <span className="loading">Error...</span>}

      <div className="gridCards">
        {data?.map((pokemon) => {
          return (
            <Link to={`/details/${pokemon.name}`} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </Link>
          );
        })}
      </div>

      <div className="paginationComponent">
        <button onClick={prevPage} disabled={page <= 1}>&lt; Anterior</button>

        <span className="numberPage">
          {String(page).padStart(2, "0")}/{String(totalPages).padStart(2, "0")}
        </span>

        <button onClick={nextPage} disabled={page >= totalPages}>
          Próxima &lt;
        </button>
      </div>
    </Container>
  );
}
