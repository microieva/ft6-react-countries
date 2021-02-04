import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = () => {
  const [countries, setCountries] = useState([])
  const url = 'https://restcountries.eu/rest/v2/all'
  const fetchData = async () => {
    const response = await axios.get(url)
    setCountries(response.data)
  }

  useEffect(() => {
    let countries = []
    countries = await this.fetchData() 
    console.log('1 - All Countries:', countries);
    return countries 

  }, [])

  return data
}

async fetchData() {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  const data = await response.json()
  return data
}

async getAllCountries() {
  
}