import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { fetchMatches } from '../valorantAPI';
import { MatchDetails } from '../valorantAPI/types/matchDetails';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'mapName', headerName: 'Map Name', width: 130 },
  { field: 'gameMode', headerName: 'Game Mode', width: 130 },
  { field: 'rounds', headerName: 'Rounds', type: 'number', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row[params.id, 'firstName'] || ''} ${
        params.row[params.id, 'lastName'] || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {

const [matchInfo, setmatchInfo] = useState<MatchDetails>()

useEffect(() => {
  
    //TODO: change region to dynamic
    fetchMatches("ap", "Kaiserin", "9988", "3", null).then((matchDetails: MatchDetails) => {
        setmatchInfo(matchDetails)
      })

   /*fetchMatch("5bd043d9-b79b-4685-8acd-37ed28521e1b") */
   
   },[])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
