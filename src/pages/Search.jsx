import { getRegExp } from "korean-regexp"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { selectPokemonByIdRegExp } from "../RTK/selector"
import { Card } from "../component/Card"

export default function Search() {
  const [searchParams] = useSearchParams()
  const param = searchParams.get('pokemon')
  const reg = getRegExp(param)

  const pokemon = useSelector(selectPokemonByIdRegExp(reg))
  return (
    <>
      {pokemon.map(el => <Card key={el.id} pokemon={el} />)}
    
    </>
  )
}