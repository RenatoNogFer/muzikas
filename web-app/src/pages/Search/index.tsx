import { useState, useEffect } from 'react'
import { createSearchParams, useSearchParams } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { Links } from '../components/links/Links'
import { Item } from './../../types/item'

import './index.css'

import plus from './assets/Plus.png'

const Search = () => {
  // Instanciat Item Sercive (ver exemplo das categorias)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<Item[]>([])
  const [searchParams, setSearchParams] = useSearchParams()

  const searchHandler = () => {
    setSearchParams(createSearchParams({ query: search }))
  }

  const getItems = async () => {
    setLoading(true)
    let response: any = null

    setLoading(false)
  }

  useEffect(() => {
    const query = searchParams.get('query')
    // Pegar produtos da API
    // Passar query para a funcao
    // se tiver query, no item service adicionar `?query=${query}` no fim da URL do getItems
  }, [searchParams])

  return (
    <div className='search-main-div'>
      <Header />
      <Links />
      <div className='search-box'>
        <div className='search-bar'>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchHandler}>
            <img src={plus} />
          </button>
        </div>
        <div className='search-results'>
            <h4>Search results for "{searchParams.get('query')}"</h4>
        </div>
        <div className="search-product-list">
          <div className='search-product'>
            <div className='home-grid-container'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
