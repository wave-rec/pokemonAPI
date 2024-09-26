import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  'pokemon/fetchMultiplePokemonById',
  async (maxPokemonId) => {
    //배열 만들기 (이 배열의 길이는 1010이고, 두 번째 인자로는 숫자를 받을거야)
    const numberArray = Array.from({length: maxPokemonId}, (_, i) => { return i + 1 })
    
    //비동기 async 함수 정의
    const fetchAPI = async (pokemonId) => {
      
      //변수에 담아 요청이 돌아올 때까지 기다리기
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
      //요청이 돌아오면 JSON으로 돌아오니 해석 후에 데이터로 꺼내서 보기
      const data = await response.json()
      
      const pokemonData = {
        id: pokemonId,
        name: data.names.find(el => el.language.name === 'ko').name,
        description: data.flavor_text_entries.find(el => el.language.name === 'ko').flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`
      }
      return pokemonData
    }   
      //Promise로 배열을 넣어주면 전부 다 결과값을 받아온 상태가 배열에 들어옴
      return await Promise.all(numberArray.map((el)=> fetchAPI(el)))
  }
)