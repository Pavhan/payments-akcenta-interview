"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { CURRENCY, PAYMENT_STATUSES, PAYMENT_TYPES } from "@data/constants";
import { IPayment } from "@data/types";
import { formatDateToLocal } from "@lib/utils";
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import Link from "next/link"
import { useState } from 'react'
import Select from "@components/Select/select";

const columns = [
  {
    header: "ID",
    accessorKey: "paymentId",
  },
  {
    header: "Date",
    accessorKey: "timestamp",
    accessorFn:  (row: IPayment) =>  formatDateToLocal(row.timestamp),
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Currency",
    accessorKey: "currency",
  },
  {
    header: "Type",
    accessorKey: "paymentType",
    accessorFn: (row: IPayment) =>  PAYMENT_TYPES[row.paymentType],
  },
  {
    header: "Status",
    accessorKey: "status",
    accessorFn: (row: IPayment) =>  PAYMENT_STATUSES[row.status],
  },
]

export default function PaymentsTable({ data }: { data: IPayment[] }) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [filtering, setFiltering] = useState('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  })

  const handleFilteringChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
   setFiltering(e.target.value)
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Payments</h1>
      <strong className="block mb-2">Filter by:</strong>
      <div className="flex mb-4 gap-3 bg-gray-100 p-4 rounded-lg">
        
        <div>
          <strong className="block mb-2">Currency</strong>
          <Select onChange={handleFilteringChange}>  
            {Object.keys(CURRENCY).map((key) => <option key={key} value={key}>{key}</option>)}
          </Select>
        </div>
        <div>
          <strong className="block mb-2">Type</strong>
          <Select onChange={handleFilteringChange}>
            {Object.entries(PAYMENT_TYPES).map(([key,value]) => <option key={key} value={value}>{value}</option>)}
          </Select>
        </div>
        <div>
          <strong className="block mb-2">Status</strong>
          <Select onChange={handleFilteringChange}>
            {Object.entries(PAYMENT_STATUSES).map(([key,value]) => <option key={key} value={value}>{value}</option>)}
          </Select>
        </div>
      </div> 

      <div className="rounded-lg bg-gray-200 p-2 overflow-x-auto">
        <table className="text-gray-900 min-w-full">
          <thead className="rounded-lg text-left text-sm font-normal">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-2 py-5"
                  >
                      <div className="inline-block pr-6 relative cursor-pointer">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <span className="absolute top-0 right-0">
                          {
                            header.column.getIsSorted() === 'asc' ? (
                              <ChevronUpIcon className="size-5" />
                            ) : header.column.getIsSorted() === 'desc' ? (
                              <ChevronDownIcon className="size-5" />
                            ) : null
                          }
                        </span>
                      </div>
                  </th>
                ))}
                <th className="px-2 py-5">
                  <span className="sr-only">Detail</span>
                </th>
              </tr>
            ))}
          </thead>
          <tbody className="bg-white">
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className=" py-2 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg even:bg-gray-100">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="whitespace-nowrap px-2 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                  <td className="whitespace-nowrap px-2 py-3">
                    <Link href={`payments/${row.original.paymentId}`} className="rounded-md bg-blue-500 block text-center px-4 font-bold py-2 text-sm text-white transition-colors hover:bg-blue-800">
                      Detail
                    </Link>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}