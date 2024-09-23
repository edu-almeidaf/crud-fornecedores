import { useState, useCallback } from 'react'
import { unparse } from 'papaparse'
import { Address, Supplier } from '@/http/get-suppliers'
import toast from 'react-hot-toast'

function formatAddress(address: Address) {
  return (
    [address.street, address.number, address.complement]
      .filter(Boolean)
      .join(', ') + `, ${address.city}, ${address.state}`
  )
}

export function useExportSuppliersCSV() {
  const [isExportingCSV, setIsExportingCSV] = useState(false)

  const exportSuppliersToCSV = useCallback(async (suppliers: Supplier[]) => {
    try {
      setIsExportingCSV(true)

      const csvContent = suppliers.map((supplier) => ({
        ID: supplier.id,
        Nome: supplier.name,
        Descrição: supplier.description,
        'Nome do Contato': supplier.contacts
          .map((contact) => contact.name)
          .join('\n'),
        Telefone: supplier.contacts
          .map((contact) => contact.phoneNumber)
          .join('\n'),
        CEP: supplier.contacts
          .map((contact) => contact.address.zipCode)
          .join('\n'),
        Endereço: supplier.contacts
          .map((contact) => formatAddress(contact.address))
          .join('\n'),
        Referência: supplier.contacts
          .map((contact) => contact.address.reference)
          .join('\n'),
      }))

      const csv = unparse(csvContent, { header: true })

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = 'fornecedores.csv'
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      setTimeout(() => {
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }, 100)

      toast.success('Lista exportada com sucesso', {
        position: 'bottom-right',
        duration: 5000,
      })
    } catch (error) {
      toast.error('Erro ao exportar a lista', {
        position: 'bottom-right',
      })
    } finally {
      setIsExportingCSV(false)
    }
  }, [])

  return { exportSuppliersToCSV, isExportingCSV }
}
