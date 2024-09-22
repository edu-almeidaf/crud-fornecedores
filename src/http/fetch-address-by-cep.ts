import axios from 'axios'

export async function fetchAddressByCep(cep: string) {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

  if (response.data.erro) {
    throw new Error('Digite um cep válido!')
  }

  return response.data
}
