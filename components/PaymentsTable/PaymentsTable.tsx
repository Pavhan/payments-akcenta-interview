"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { PAYMENT_TYPES } from "@data/constants";
import { IPayment } from "@data/types";
import { formatDateToLocal } from "@lib/utils";
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnFiltersState,
  ColumnDef,
} from "@tanstack/react-table"
import Link from "next/link"
import { useState } from 'react'
import PaymentStatus from "@components/PaymentStatus/PaymentStatus";
import Filtering from "@components/Filtering/Filtering";
import Pagination from "@components/Pagination/Pagination";

const columns: ColumnDef<IPayment>[] = [
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
    cell: info => <PaymentStatus status={info.getValue()} />,
  },
]

export default function PaymentsTable({ data }: { data: IPayment[] }) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [filtering, setFiltering] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable<IPayment>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
      sorting: sorting,
      globalFilter: filtering,
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  })

  return (
    <>
      <Filtering onChange={setFiltering} />
      <div className="rounded-lg bg-gray-200 p-2 overflow-x-auto mb-4">
        <table className="text-gray-900 min-w-full text-left">
          <thead className="rounded-lg text-sm font-normal">
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
              <tr key={row.id} className="py-2 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg even:bg-gray-100">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="whitespace-nowrap px-2 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                  <td className="whitespace-nowrap px-2 py-3">
                    <Link href={`/payments/${row.original.paymentId}`} className="rounded-md bg-blue-500 inline-block text-center px-4 font-bold py-2 text-sm text-white transition-colors hover:bg-blue-800 no-underline">
                      Detail
                    </Link>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination data={table} />
    </>
  )
}