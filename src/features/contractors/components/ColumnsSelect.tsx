import React, { FC } from 'react';
import { Column } from 'components/DataTable';
import { Dropdown, Form } from 'react-bootstrap';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import xor from 'lodash/xor';
import { Contractor } from '../types';
import { Columns } from 'react-feather';

interface Props {
  allColumns: Column<Contractor>[];
  visibleColumns: string[];
  onVisibleColumnsChange: (ids: string[]) => void;
  columnsOrder: string[];
  onColumnsOrderChange: (ids: string[]) => void;
}

const ColumnsSelect: FC<Props> = (props) => {
  const { allColumns, visibleColumns, onVisibleColumnsChange, onColumnsOrderChange, columnsOrder } =
    props;

  const handleOnChange = (id: string) => {
    onVisibleColumnsChange(xor(visibleColumns, [id]));
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) return;

    const newOrder = [...columnsOrder];
    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index, 0, columnsOrder[source.index]);

    onColumnsOrderChange(newOrder);
  };

  return (
    <Dropdown className='columns-select'>
      <Dropdown.Toggle className='button button-secondary'>
        <Columns />
        Columns
      </Dropdown.Toggle>
      <Dropdown.Menu align='end'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='tasks'>
            {(droppableProvided) => (
              <div
                className='columns-select-items'
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                {allColumns.map((column, index) => (
                  <Draggable draggableId={column.id} key={column.id} index={index}>
                    {(draggableProvided) => (
                      <div ref={draggableProvided.innerRef} {...draggableProvided.draggableProps}>
                        <Form.Check className='columns-select-item' type='checkbox' id={column.id}>
                          <Form.Check.Input
                            onChange={() => handleOnChange(column.id)}
                            checked={visibleColumns.includes(column.id)}
                            type='checkbox'
                            className='me-3'
                          />
                          <Form.Check.Label
                            className='columns-select-item-label'
                            {...draggableProvided.dragHandleProps}
                          >
                            {column.label}
                          </Form.Check.Label>
                        </Form.Check>
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ColumnsSelect;
