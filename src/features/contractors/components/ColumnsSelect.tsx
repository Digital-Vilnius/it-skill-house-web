import React, { FC } from 'react';
import { Column } from 'components/DataTable';
import { Card, Dropdown, Form } from 'react-bootstrap';
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
    <Dropdown>
      <Dropdown.Toggle className='button button-secondary'>
        <Columns />
        Columns
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ width: '250px' }}>
        <Card.Body>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='tasks'>
              {(droppableProvided) => (
                <div
                  className='checklist'
                  ref={droppableProvided.innerRef}
                  {...droppableProvided.droppableProps}
                >
                  {allColumns.map((column, index) => (
                    <Draggable draggableId={column.id} key={column.id} index={index}>
                      {(draggableProvided) => (
                        <div
                          className='checklist-item'
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                        >
                          <Form.Check type='checkbox' id={column.id}>
                            <Form.Check.Input
                              onChange={() => handleOnChange(column.id)}
                              checked={visibleColumns.includes(column.id)}
                              type='checkbox'
                              className='me-3'
                            />
                            <Form.Check.Label {...draggableProvided.dragHandleProps}>
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
        </Card.Body>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ColumnsSelect;
