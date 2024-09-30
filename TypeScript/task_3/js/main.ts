// task_3/js/main.ts

/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get the newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row
const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };

// Update the row
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
