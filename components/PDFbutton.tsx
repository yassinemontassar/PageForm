"use client";
import React from 'react';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Button } from './ui/button';
import { MdOutlinePictureAsPdf } from 'react-icons/md';

interface ConvertToPDFButtonProps {
  row: any[];
  columnLabels: string[];
}

const ConvertToPDFButton: React.FC<ConvertToPDFButtonProps> = ({ row, columnLabels }) => {
  const handleConvertToPDF = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add a title to the PDF
    pdf.text('Table Data to PDF', 20, 20);

    // Add the table to the PDF using the autoTable plugin
    autoTable(pdf,{
      head: [columnLabels], // Convert column labels to an array of arrays
      body: row,
      columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0], cellWidth: 'auto' } }, 
    });

    // Save the PDF or open it in a new tab
    pdf.save('submissions.pdf');
  };

  return (
    <Button
    className=" mt-2 flex mx-auto gap-2 text-white bg-gradient-to-r from-gray-400 to-gray-600"
      onClick={handleConvertToPDF}
    >
      <MdOutlinePictureAsPdf className="h-4 w-4" />
      Convert to PDF
    </Button>
  );
};

export default ConvertToPDFButton;
