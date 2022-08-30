import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import translate from '../../core/locales/ar/translation.json';
import { AiOutlineSearch } from 'react-icons/ai';
import { Status } from '../../core/enums/Enum';
import TableLink from '../table-link';
import TableButton from '../tabel-button';
import { navigationPath, variant } from '../../core/helpers/Helpers';

interface MultiColTableProps {
  titles: string[];
  rows: Object[];
}

export default function MultiColTable({ titles, rows }: MultiColTableProps) {
  const [searchResult, setSearchResult] = useState<Object[]>(rows);

  const filteredRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRows =
      rows &&
      rows.filter((data) =>
        Object.values(data).toString().includes(e.target.value)
      );
    setSearchResult(newRows);
  };
return (
    <div className="bg-white ">
      <div className=" pb-2  d-flex flex-md-row justify-content-between align-items-center  flex-column pb-md-3 w-100">
        <div className=" d-flex flex-row pe-5 align-items-center ">
          <div className="border border-gray-400 rounded p-1 text-gray-400 my-2">
            <input
              className="border-0"
              type="text"
              onChange={filteredRows}
              placeholder={translate.table.search}
            />
            <AiOutlineSearch size={20} />
          </div>
        </div>
        <div className="  d-flex flex-row justify-content-center align-items-center ps-md-3 ">
          <p className="text-gray-700 h6 small mt-1 ps-sm-2 mx-3 ">
            {translate.table.showInputs}
          </p>
          <select className="rounded px-3 text-gray-700 bold select  ">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      {rows.length ?(
        <Table hover responsive>
          <thead className="bg-secondary text-white text-center">
            <tr>
              {titles.map((title: string, index: number) => (
                <th key={index}>{title}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {searchResult.map((row: any, index: number) => (
              <tr key={index} className="text-gray-800 text-center">
                {Object.entries(row).map((data, index) =>
                  data[0] === 'status' ? (
                    <td key={index} >
                      <TableButton
                        serviceCode={row?.orderNumber}
                        status={row?.status}
                        variant={variant}
                        navigationPath={navigationPath}
                      />
                    </td>
                  ) : (

                    <td key={index} className="align-middle">{row?.status}</td>

                  )
                )}
                {Object.entries(row).map(
                  (data, index) =>
                    data[0] === 'status' && (
                      <td key={index}>
                        {data[1] === Status.ACCEPTED ? (
                          <TableLink status={Status.ACCEPTED} />
                        ) : data[1] === Status.DONE ? (
                          <TableLink status={Status.DONE} />
                        ) : null}
                      </td>
                    )
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      ):<h3>لاتوجد طلبات</h3>}
    </div>
  );
}
