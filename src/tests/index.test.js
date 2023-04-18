import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../components/Table';
import { FILES_TABLE_HEADS } from '../constants';

describe('Table', () => {
  it('should render table header and body', () => {
    const head = FILES_TABLE_HEADS
    const items = [
      { key: 1, cols: ['John', 20] },
      { key: 2, cols: ['Jane', 30] },
    ];
    const { getByText } = render(<Table head={head} items={items} />);
    
    
    expect(screen.getByText(FILES_TABLE_HEADS[0])).toBeInTheDocument();
    expect(screen.getByText(FILES_TABLE_HEADS[1])).toBeInTheDocument();
    
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });

});