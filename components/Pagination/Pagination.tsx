"use client";

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import { IPayment } from "@data/types";
import { Table } from "@tanstack/react-table"
import Select from "@components/Select/select";

interface IPaginationProps {
  data: Table<IPayment>
}

export default function PaymentsTable({ data }: IPaginationProps) {
  return (
    <div className="flex items-center gap-2 justify-between flex-wrap ">
      <div className="flex gap-2">
      <button
        className="px-3 py-2 text-gray-700 appearance-none bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:opacity-50"
        onClick={() => data.setPageIndex(0)}
        disabled={!data.getCanPreviousPage()}
      >
        <ChevronDoubleLeftIcon className="size-5" />
      </button>
      <button
        className="px-3 py-2 text-gray-700 appearance-none bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:opacity-50"
        onClick={() => data.previousPage()}
        disabled={!data.getCanPreviousPage()}
      >
        <ChevronLeftIcon className="size-5" />
      </button>
      <button
        className="px-3 py-2 text-gray-700 appearance-none bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:opacity-50"
        onClick={() => data.nextPage()}
        disabled={!data.getCanNextPage()}
      >
        <ChevronRightIcon className="size-5" />
      </button>
      <button
        className="px-3 py-2 text-gray-700 appearance-none bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm disabled:opacity-50"
        onClick={() => data.setPageIndex(data.getPageCount() - 1)}
        disabled={!data.getCanNextPage()}
      >
        <ChevronDoubleRightIcon className="size-5" />
      </button>
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {data.getState().pagination.pageIndex + 1} of{' '}
          {data.getPageCount()}
        </strong>
      </span>
      </div>
      <div className="flex gap-2">
      <span className="flex items-center gap-3">
        Go to page:
        <input
          type="number"
          min="1"
          max={data.getPageCount()}
          defaultValue={data.getState().pagination.pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            data.setPageIndex(page)
          }}
          className="px-3 py-2 text-gray-700 appearance-none bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-16"
        />
      </span>
      <Select
        value={data.getState().pagination.pageSize}
        onChange={e => {
          data.setPageSize(Number(e.target.value))
        }}
        
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </Select>
      </div>
    </div>
  )
}