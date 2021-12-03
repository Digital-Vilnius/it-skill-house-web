import React, { FC } from 'react';
import { Column } from './DataTable/types';
import { Card, Dropdown, Form } from 'react-bootstrap';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import xor from 'lodash/xor';

interface Props {
  columns: Column<any>[];
  value: string[];
  onChange: (ids: string[]) => void;
  order: string[];
  onOrderChange: (ids: string[]) => void;
}

const ColumnsSelect: FC<Props> = (props) => {
  const { columns, value, onChange, onOrderChange, order } = props;

  const handleOnChange = (id: string) => {
    onChange(xor(value, [id]));
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) return;

    const newOrder = [...order];
    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index, 0, order[source.index]);

    onOrderChange(newOrder);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle>Columns</Dropdown.Toggle>
      <Dropdown.Menu>
        <Card.Body>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='tasks'>
              {(droppableProvided) => (
                <div
                  className='checklist'
                  ref={droppableProvided.innerRef}
                  {...droppableProvided.droppableProps}
                >
                  {columns.map((column, index) => (
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
                              checked={value.includes(column.id)}
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
